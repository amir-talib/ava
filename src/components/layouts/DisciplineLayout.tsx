import { type ReactNode } from 'react'
import { type Discipline } from '@/types'
import { Navigation } from '@/components/shared/Navigation'
import { Footer } from '@/components/shared/Footer'

interface DisciplineLayoutProps {
  children: ReactNode
  discipline: Discipline
}

export function DisciplineLayout({ children, discipline }: DisciplineLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation discipline={discipline} />
      <main className="flex-1 pt-[72px] lg:pt-[88px]">
        {children}
      </main>
      <Footer discipline={discipline} />
    </div>
  )
}




