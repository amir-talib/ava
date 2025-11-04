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
  title: {
    default: 'Ace Vocational Academy | Culinary & Fashion Excellence',
    template: '%s | Ace Vocational Academy',
  },
  description: 'Industry-leading institution offering world-class Culinary and Fashion programs. Transform your passion into profession.',
  keywords: ['culinary school', 'fashion school', 'vocational training', 'professional education', 'Nigeria'],
  authors: [{ name: 'Ace Vocational Academy' }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'Ace Vocational Academy',
  },
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




