'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { type Discipline } from '@/types'
import { cn } from '@/lib/utils'

interface NavigationProps {
  discipline: Discipline
}

export function Navigation({ discipline }: NavigationProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const basePath = `/${discipline}`
  
  const navigationItems = [
    { label: 'Home', href: basePath },
    { label: 'About', href: `${basePath}/about` },
    { label: 'Courses', href: `${basePath}/courses` },
    { label: 'Admissions', href: `${basePath}/admissions` },
    { label: 'Contact', href: `${basePath}/contact` },
  ]

  const accentColor = discipline === 'culinary' ? 'text-culinary-600' : 'text-fashion-600'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <nav className="container-custom py-5 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/avanew.png"
              alt="Ace Vocational Academy"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
            <span className={cn('text-lg lg:text-xl font-brand font-semibold tracking-wide transition-colors', accentColor)}>
              {discipline === 'culinary' ? 'CULINARY' : 'FASHION'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-5 py-2.5 text-sm font-sans font-medium transition-colors rounded-sm',
                    isActive
                      ? accentColor
                      : 'text-neutral-600 hover:text-neutral-900'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href={`${basePath}/admissions`}
              className="btn-primary font-sans text-sm px-6 py-2.5"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pt-6 border-t border-neutral-200 animate-in">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'px-4 py-3.5 text-base font-sans font-medium transition-colors rounded-sm',
                      isActive
                        ? accentColor
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                href={`${basePath}/admissions`}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary font-sans mt-6 w-full text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

