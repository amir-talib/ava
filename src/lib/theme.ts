/**
 * Theme configuration and utilities
 * Provides discipline-specific theming while maintaining unified brand identity
 */

import { type Discipline, type ThemeConfig } from '@/types'

export const themeConfig: Record<Discipline, ThemeConfig> = {
  culinary: {
    discipline: 'culinary',
    accentColor: 'text-culinary-600',
    accentColorHover: 'hover:text-culinary-700',
    gradientFrom: 'from-culinary-500',
    gradientTo: 'to-culinary-700',
  },
  fashion: {
    discipline: 'fashion',
    accentColor: 'text-fashion-600',
    accentColorHover: 'hover:text-fashion-700',
    gradientFrom: 'from-fashion-500',
    gradientTo: 'to-fashion-700',
  },
}

export function getThemeForDiscipline(discipline: Discipline): ThemeConfig {
  return themeConfig[discipline]
}

export function getDisciplineAccent(discipline: Discipline): string {
  return discipline === 'culinary' ? 'culinary' : 'fashion'
}




