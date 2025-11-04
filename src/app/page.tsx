'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { StructuredData } from '@/components/shared/StructuredData'

export default function LandingPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Ace Vocational Academy',
    description: 'Industry-leading institution offering world-class Culinary and Fashion programs. Transform your passion into profession.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://acevocationalacademy.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://acevocationalacademy.com'}/favicon.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
    sameAs: [],
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'https://acevocationalacademy.com',
      },
    ],
  }

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={breadcrumbSchema} />
      <div className="h-screen md:h-screen overflow-y-auto md:overflow-hidden bg-neutral-950">
      {/* Header - Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container-custom py-4 md:py-5 lg:py-6">
          <Link href="/" className="flex items-center justify-center space-x-2 md:space-x-3">
            <Image
              src="/ava-logo-dark.png"
              alt="Ace Vocational Academy"
              width={36}
              height={36}
              className="object-contain md:w-11 md:h-11"
              priority
            />
            <span className="text-base md:text-lg lg:text-xl font-semibold tracking-tight text-white">
              ACE VOCATIONAL ACADEMY
            </span>
          </Link>
        </div>
      </header>

      {/* Full Screen Split Hero */}
      <main className="min-h-screen md:h-screen pt-[68px] md:pt-[72px] lg:pt-[88px]">
        <div className="min-h-[calc(100vh-68px)] md:h-full flex flex-col">
          {/* Title Section */}
          <div className="container-custom py-6 md:py-8 lg:py-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-display-md lg:text-display-lg font-display font-normal text-balance mb-3 md:mb-4 text-white leading-tight px-4">
                Transform Your Passion
                <br />
                Into Profession
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto px-4">
                Choose your path to excellence
              </p>
            </motion.div>
          </div>

          {/* Path Selection - Split Screen */}
          <div className="flex-1 grid md:grid-cols-2 gap-0 min-h-0">
            {/* Culinary Path */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group min-h-[50vh] md:h-full overflow-hidden"
            >
              <Link href="/culinary" className="block h-full min-h-[50vh] md:min-h-0">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/culinary-main.png"
                    alt="Culinary Arts Program"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-culinary-900/60 to-black/80 group-hover:from-black/60 group-hover:via-culinary-900/50 group-hover:to-black/70 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative h-full min-h-[50vh] md:min-h-0 flex flex-col justify-center items-center p-6 md:p-8 lg:p-12">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-12 md:w-20 h-12 md:h-20 border-t-2 border-l-2 border-culinary-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="text-center max-w-md transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-culinary-400 to-transparent" />
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-culinary-400">
                        School of
                      </p>
                      <div className="h-px w-8 md:w-12 bg-gradient-to-r from-culinary-400 via-transparent to-transparent" />
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal text-white mb-4 md:mb-6 leading-tight" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}>
                      Culinary Arts
                    </h2>
                    
                    <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed px-2">
                      Master the art of gastronomy with world-class training
                    </p>
                    
                    <div className="inline-flex items-center gap-2 md:gap-3 text-white font-medium px-6 md:px-8 py-3 md:py-4 text-sm md:text-base border border-white/30 backdrop-blur-sm bg-white/5 group-hover:bg-culinary-600 group-hover:border-culinary-600 transition-all duration-300">
                      <span>Explore Program</span>
                      <ArrowRight size={18} className="md:w-5 md:h-5 transform transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-culinary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </Link>
            </motion.div>

            {/* Fashion Path */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative group min-h-[50vh] md:h-full overflow-hidden border-t md:border-t-0 md:border-l border-white/10"
            >
              <Link href="/fashion" className="block h-full min-h-[50vh] md:min-h-0">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/fashion-2.png"
                    alt="Fashion Design Program"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-fashion-900/55 to-black/85 group-hover:from-black/65 group-hover:via-fashion-900/45 group-hover:to-black/75 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative h-full min-h-[50vh] md:min-h-0 flex flex-col justify-center items-center p-6 md:p-8 lg:p-12">
                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-12 md:w-20 h-12 md:h-20 border-t border-r border-fashion-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="text-center max-w-md transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-fashion-400 to-transparent" />
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-fashion-300 font-sans">
                        School of
                      </p>
                      <div className="h-px w-8 md:w-12 bg-gradient-to-r from-fashion-400 via-transparent to-transparent" />
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal text-white mb-4 md:mb-6 leading-tight tracking-tight" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}>
                      Fashion Design
                    </h2>
                    
                    <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed font-light px-2">
                      Shape the future with cutting-edge design education
                    </p>
                    
                    <div className="inline-flex items-center gap-2 md:gap-3 text-white font-medium px-6 md:px-8 py-3 md:py-4 text-sm md:text-base border border-white/30 backdrop-blur-sm bg-white/5 group-hover:bg-fashion-600 group-hover:border-fashion-600 transition-all duration-300 rounded-none">
                      <span>Explore Program</span>
                      <ArrowRight size={18} className="md:w-5 md:h-5 transform transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fashion-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      </div>
    </>
  )
}

