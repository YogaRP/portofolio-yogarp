// Shared types
export type LinkRef = { label: string; href: string }
export type ImageRef = { src: string; alt: string }

export interface Project {
  title: string
  slug: string
  summary: string
  problem?: string
  solution?: string
  result?: string
  role: string
  stack: string[]
  startedAt?: string // YYYY-MM
  finishedAt?: string | null
  tags?: string[]
  links?: { demo?: string; github?: string; docs?: string }
  gallery?: ImageRef[]
  metrics?: { label: string; value: string }[]
}

export type AchievementType = 'certificate' | 'award' | 'recognition'

export interface Achievement {
  title: string
  slug: string
  type: AchievementType
  issuer: string
  issuedAt: string // YYYY-MM-DD
  credentialId?: string
  credentialUrl?: string
  skills?: string[]
  summary?: string
  image?: ImageRef
  links?: LinkRef[]
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements?: string[]
  technologies?: string[]
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other'
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
}

export interface Testimonial {
  content: string
  author: string
  role: string
  company?: string
  avatar?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location?: string
  socialLinks: SocialLink[]
}

// MDX Content types
export interface MDXContent {
  frontmatter: Record<string, unknown>
  content: string
  slug: string
}

// API Response types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

// Navigation types
export interface NavItem {
  title: string
  href: string
  description?: string
}

// SEO types
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  author?: string
  image?: string
  url?: string
}