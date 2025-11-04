import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://acevocationalacademy.com'),
  title: {
    default: 'Ace Vocational Academy | Culinary & Fashion Excellence',
    template: '%s | Ace Vocational Academy',
  },
  description: 'Industry-leading institution offering world-class Culinary and Fashion programs. Transform your passion into profession.',
  keywords: [
    'culinary school',
    'fashion school',
    'vocational training',
    'professional education',
    'Nigeria',
    'culinary arts',
    'fashion design',
    'vocational academy',
    'professional training',
    'career education',
  ],
  authors: [{ name: 'Ace Vocational Academy' }],
  creator: 'Ace Vocational Academy',
  publisher: 'Ace Vocational Academy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    siteName: 'Ace Vocational Academy',
    title: 'Ace Vocational Academy | Culinary & Fashion Excellence',
    description: 'Industry-leading institution offering world-class Culinary and Fashion programs. Transform your passion into profession.',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Ace Vocational Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ace Vocational Academy | Culinary & Fashion Excellence',
    description: 'Industry-leading institution offering world-class Culinary and Fashion programs.',
    images: ['/favicon.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  category: 'education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}




