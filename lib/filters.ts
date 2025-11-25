import { Project, Achievement } from './types'

// Project filtering utilities
export const filterProjects = (
  projects: Project[],
  filters: {
    search?: string
    stack?: string[]
    tags?: string[]
    role?: string
  }
): Project[] => {
  return projects.filter(project => {
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm) ||
        project.summary.toLowerCase().includes(searchTerm) ||
        project.role.toLowerCase().includes(searchTerm) ||
        project.stack.some(tech => tech.toLowerCase().includes(searchTerm))
      
      if (!matchesSearch) return false
    }

    // Stack filter
    if (filters.stack && filters.stack.length > 0) {
      const hasMatchingStack = filters.stack.some(tech => 
        project.stack.some(projectTech => 
          projectTech.toLowerCase().includes(tech.toLowerCase())
        )
      )
      if (!hasMatchingStack) return false
    }

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(tag => 
        project.tags?.some(projectTag => 
          projectTag.toLowerCase().includes(tag.toLowerCase())
        )
      )
      if (!hasMatchingTag) return false
    }

    // Role filter
    if (filters.role) {
      const matchesRole = project.role.toLowerCase().includes(filters.role.toLowerCase())
      if (!matchesRole) return false
    }

    return true
  })
}

// Project sorting utilities
export const sortProjects = (
  projects: Project[],
  sortBy: 'newest' | 'oldest' | 'title-asc' | 'title-desc' = 'newest'
): Project[] => {
  return [...projects].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.startedAt || '').getTime() - new Date(a.startedAt || '').getTime()
      case 'oldest':
        return new Date(a.startedAt || '').getTime() - new Date(b.startedAt || '').getTime()
      case 'title-asc':
        return a.title.localeCompare(b.title)
      case 'title-desc':
        return b.title.localeCompare(a.title)
      default:
        return 0
    }
  })
}

// Achievement filtering utilities
export const filterAchievements = (
  achievements: Achievement[],
  filters: {
    search?: string
    type?: string[]
    issuer?: string[]
    year?: string[]
    skills?: string[]
  }
): Achievement[] => {
  return achievements.filter(achievement => {
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      const matchesSearch = 
        achievement.title.toLowerCase().includes(searchTerm) ||
        achievement.issuer.toLowerCase().includes(searchTerm) ||
        achievement.summary?.toLowerCase().includes(searchTerm) ||
        achievement.skills?.some(skill => skill.toLowerCase().includes(searchTerm))
      
      if (!matchesSearch) return false
    }

    // Type filter
    if (filters.type && filters.type.length > 0) {
      if (!filters.type.includes(achievement.type)) return false
    }

    // Issuer filter
    if (filters.issuer && filters.issuer.length > 0) {
      const matchesIssuer = filters.issuer.some(issuer => 
        achievement.issuer.toLowerCase().includes(issuer.toLowerCase())
      )
      if (!matchesIssuer) return false
    }

    // Year filter
    if (filters.year && filters.year.length > 0) {
      const achievementYear = new Date(achievement.issuedAt).getFullYear().toString()
      if (!filters.year.includes(achievementYear)) return false
    }

    // Skills filter
    if (filters.skills && filters.skills.length > 0) {
      const hasMatchingSkill = filters.skills.some(skill => 
        achievement.skills?.some(achievementSkill => 
          achievementSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
      if (!hasMatchingSkill) return false
    }

    return true
  })
}

// Achievement sorting utilities
export const sortAchievements = (
  achievements: Achievement[],
  sortBy: 'newest' | 'oldest' | 'title-asc' | 'title-desc' = 'newest'
): Achievement[] => {
  return [...achievements].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.issuedAt).getTime() - new Date(a.issuedAt).getTime()
      case 'oldest':
        return new Date(a.issuedAt).getTime() - new Date(b.issuedAt).getTime()
      case 'title-asc':
        return a.title.localeCompare(b.title)
      case 'title-desc':
        return b.title.localeCompare(a.title)
      default:
        return 0
    }
  })
}

// Get unique values for filter options
export const getUniqueStackOptions = (projects: Project[]): string[] => {
  const allStack = projects.flatMap(project => project.stack)
  return [...new Set(allStack)].sort()
}

export const getUniqueTagOptions = (projects: Project[]): string[] => {
  const allTags = projects.flatMap(project => project.tags || [])
  return [...new Set(allTags)].sort()
}

export const getUniqueRoleOptions = (projects: Project[]): string[] => {
  const allRoles = projects.map(project => project.role)
  return [...new Set(allRoles)].sort()
}

export const getUniqueIssuerOptions = (achievements: Achievement[]): string[] => {
  const allIssuers = achievements.map(achievement => achievement.issuer)
  return [...new Set(allIssuers)].sort()
}

export const getUniqueYearOptions = (achievements: Achievement[]): string[] => {
  const allYears = achievements.map(achievement => 
    new Date(achievement.issuedAt).getFullYear().toString()
  )
  return [...new Set(allYears)].sort().reverse()
}

export const getUniqueSkillOptions = (achievements: Achievement[]): string[] => {
  const allSkills = achievements.flatMap(achievement => achievement.skills || [])
  return [...new Set(allSkills)].sort()
}