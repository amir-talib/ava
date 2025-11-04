import type { Metadata } from 'next'
import { DisciplineLayout } from '@/components/layouts/DisciplineLayout'

export const metadata: Metadata = {
  title: 'Culinary Arts Program',
  description: 'Master the art of gastronomy with world-class culinary training at Ace Vocational Academy. Professional chef training, hands-on kitchen experience, and industry connections.',
  keywords: ['culinary school', 'chef training', 'culinary arts', 'professional cooking', 'Nigeria culinary school'],
  openGraph: {
    title: 'Culinary Arts Program | Ace Vocational Academy',
    description: 'Master the art of gastronomy with world-class culinary training.',
    url: '/culinary',
    images: [
      {
        url: '/culinary-main.png',
        width: 1200,
        height: 630,
        alt: 'Culinary Arts at Ace Vocational Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culinary Arts Program | Ace Vocational Academy',
    description: 'Master the art of gastronomy with world-class culinary training.',
    images: ['/culinary-main.png'],
  },
  alternates: {
    canonical: '/culinary',
  },
}

export default function CulinaryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DisciplineLayout discipline="culinary">{children}</DisciplineLayout>
}




