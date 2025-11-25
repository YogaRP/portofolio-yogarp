import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project, Achievement, MDXContent } from './types'

const contentDirectory = path.join(process.cwd(), 'content')
const dataDirectory = path.join(process.cwd(), 'data')

// Helper function to read MDX files
export async function getMDXContent(folder: string, slug?: string): Promise<MDXContent[]> {
  const folderPath = path.join(contentDirectory, folder)
  
  if (!fs.existsSync(folderPath)) {
    return []
  }

  const files = slug 
    ? [`${slug}.mdx`] 
    : fs.readdirSync(folderPath).filter(file => file.endsWith('.mdx'))

  const content = files
    .map(file => {
      const filePath = path.join(folderPath, file)
      if (!fs.existsSync(filePath)) return null
      
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        frontmatter: data,
        content,
        slug: file.replace('.mdx', '')
      }
    })
    .filter(Boolean) as MDXContent[]

  return content
}

// Helper function to read JSON data
export async function getJSONData<T>(filename: string): Promise<T[]> {
  const filePath = path.join(dataDirectory, `${filename}.json`)
  
  if (!fs.existsSync(filePath)) {
    return []
  }

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error(`Error reading ${filename}.json:`, error)
    return []
  }
}

// Project loaders
export async function getAllProjects(): Promise<Project[]> {
  const jsonProjects = await getJSONData<Project>('projects')
  const mdxProjects = await getMDXContent('projects')
  
  // Merge JSON metadata with MDX content
  return jsonProjects.map(project => {
    const mdxContent = mdxProjects.find(mdx => mdx.slug === project.slug)
    if (mdxContent) {
      return {
        ...project,
        ...mdxContent.frontmatter,
        content: mdxContent.content
      }
    }
    return project
  })
}

export async function getProjectBySlug(slug: string): Promise<(Project & { content?: string }) | null> {
  const projects = await getAllProjects()
  const project = projects.find(p => p.slug === slug)
  
  if (!project) return null
  
  const mdxContent = await getMDXContent('projects', slug)
  if (mdxContent.length > 0) {
    return {
      ...project,
      content: mdxContent[0].content
    }
  }
  
  return project
}

// Achievement loaders
export async function getAllAchievements(): Promise<Achievement[]> {
  const jsonAchievements = await getJSONData<Achievement>('achievements')
  const mdxAchievements = await getMDXContent('achievements')
  
  // Merge JSON metadata with MDX content
  return jsonAchievements.map(achievement => {
    const mdxContent = mdxAchievements.find(mdx => mdx.slug === achievement.slug)
    if (mdxContent) {
      return {
        ...achievement,
        ...mdxContent.frontmatter,
        content: mdxContent.content
      }
    }
    return achievement
  })
}

export async function getAchievementBySlug(slug: string): Promise<(Achievement & { content?: string }) | null> {
  const achievements = await getAllAchievements()
  const achievement = achievements.find(a => a.slug === slug)
  
  if (!achievement) return null
  
  const mdxContent = await getMDXContent('achievements', slug)
  if (mdxContent.length > 0) {
    return {
      ...achievement,
      content: mdxContent[0].content
    }
  }
  
  return achievement
}

// Featured content for homepage
export async function getFeaturedProjects(limit: number = 4): Promise<Project[]> {
  const projects = await getAllProjects()
  return projects
    .sort((a, b) => new Date(b.startedAt || '').getTime() - new Date(a.startedAt || '').getTime())
    .slice(0, limit)
}

export async function getRecentAchievements(limit: number = 3): Promise<Achievement[]> {
  const achievements = await getAllAchievements()
  return achievements
    .sort((a, b) => new Date(b.issuedAt).getTime() - new Date(a.issuedAt).getTime())
    .slice(0, limit)
}