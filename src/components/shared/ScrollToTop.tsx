'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scrolls to top of page on route change
 * Handles both mobile and desktop scroll restoration
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Instant scroll for better UX on navigation
    })

    // Also handle mobile scroll containers if any
    const scrollContainers = document.querySelectorAll('[data-scroll-container]')
    scrollContainers.forEach((container) => {
      if (container instanceof HTMLElement) {
        container.scrollTop = 0
      }
    })
  }, [pathname])

  return null
}

