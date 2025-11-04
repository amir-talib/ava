/**
 * Core type definitions for Ace Vocational Academy
 */

export type Discipline = 'culinary' | 'fashion'

export interface ThemeConfig {
  discipline: Discipline
  accentColor: string
  accentColorHover: string
  gradientFrom: string
  gradientTo: string
}

export interface NavigationItem {
  label: string
  href: string
  description?: string
}

export interface Course {
  id: string
  title: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'professional'
  description: string
  highlights: string[]
  tuition: string
  startDates: string[]
  imageUrl?: string
}

export interface SuccessStory {
  id: string
  studentName: string
  program: string
  achievement: string
  quote: string
  imageUrl?: string
  graduationYear: number
  currentRole?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'admissions' | 'programs' | 'facilities' | 'career' | 'general'
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: {
    weekdays: string
    weekends: string
  }
  socialMedia: {
    instagram?: string
    facebook?: string
    twitter?: string
    linkedin?: string
  }
}




