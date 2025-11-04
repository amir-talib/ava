import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  className?: string
}

export function PageHeader({ 
  title, 
  subtitle, 
  description, 
  children,
  className 
}: PageHeaderProps) {
  return (
    <div className={cn('text-center max-w-3xl mx-auto', className)}>
      {subtitle && (
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-500 mb-5">
          {subtitle}
        </p>
      )}
      <h1 className="text-display-md lg:text-display-lg font-display font-normal text-balance mb-6 leading-tight">
        {title}
      </h1>
      {description && (
        <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}




