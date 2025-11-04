import type { Metadata } from 'next'
import { DisciplineLayout } from '@/components/layouts/DisciplineLayout'

export const metadata: Metadata = {
  title: 'Fashion School',
  description: 'Shape the future of fashion with cutting-edge design training at Ace Vocational Academy.',
}

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DisciplineLayout discipline="fashion">{children}</DisciplineLayout>
}




