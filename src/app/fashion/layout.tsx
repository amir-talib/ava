import type { Metadata } from 'next'
import { DisciplineLayout } from '@/components/layouts/DisciplineLayout'

export const metadata: Metadata = {
  title: 'Fashion Design Program',
  description: 'Shape the future of fashion with cutting-edge design training at Ace Vocational Academy. Professional fashion design education, creative studios, and industry expertise.',
  keywords: ['fashion school', 'fashion design', 'fashion training', 'design education', 'Nigeria fashion school'],
  openGraph: {
    title: 'Fashion Design Program | Ace Vocational Academy',
    description: 'Shape the future of fashion with cutting-edge design training.',
    url: '/fashion',
    images: [
      {
        url: '/fashion-2.png',
        width: 1200,
        height: 630,
        alt: 'Fashion Design at Ace Vocational Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion Design Program | Ace Vocational Academy',
    description: 'Shape the future of fashion with cutting-edge design training.',
    images: ['/fashion-2.png'],
  },
  alternates: {
    canonical: '/fashion',
  },
}

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DisciplineLayout discipline="fashion">{children}</DisciplineLayout>
}




