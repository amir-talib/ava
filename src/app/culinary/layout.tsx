import type { Metadata } from 'next'
import { DisciplineLayout } from '@/components/layouts/DisciplineLayout'

export const metadata: Metadata = {
  title: 'Culinary School',
  description: 'Master the art of gastronomy with world-class culinary training at Ace Vocational Academy.',
}

export default function CulinaryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DisciplineLayout discipline="culinary">{children}</DisciplineLayout>
}




