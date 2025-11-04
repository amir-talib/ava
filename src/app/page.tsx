'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <div className="h-screen overflow-hidden bg-neutral-950">
      {/* Header - Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container-custom py-5 lg:py-6">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/ava-logo.png"
              alt="Ace Vocational Academy"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <span className="text-lg lg:text-xl font-semibold tracking-tight text-white">
              ACE VOCATIONAL ACADEMY
            </span>
          </Link>
        </div>
      </header>

      {/* Full Screen Split Hero */}
      <main className="h-screen pt-[72px] lg:pt-[88px]">
        <div className="h-full flex flex-col">
          {/* Title Section */}
          <div className="container-custom py-10 lg:py-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-display-md lg:text-display-lg font-display font-normal text-balance mb-4 text-white leading-tight">
                Transform Your Passion
                <br />
                Into Profession
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Choose your path to excellence
              </p>
            </motion.div>
          </div>

          {/* Path Selection - Split Screen */}
          <div className="flex-1 grid md:grid-cols-2 gap-0">
            {/* Culinary Path */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group h-full overflow-hidden"
            >
              <Link href="/culinary" className="block h-full">
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
                <div className="relative h-full flex flex-col justify-center items-center p-8 lg:p-12">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-culinary-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="text-center max-w-md transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-culinary-400 to-transparent" />
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-culinary-400">
                        School of
                      </p>
                      <div className="h-px w-12 bg-gradient-to-r from-culinary-400 via-transparent to-transparent" />
                    </div>
                    
                    <h2 className="text-5xl lg:text-6xl font-display font-normal text-white mb-6 leading-tight" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}>
                      Culinary Arts
                    </h2>
                    
                    <p className="text-lg text-white/80 mb-8 leading-relaxed">
                      Master the art of gastronomy with world-class training
                    </p>
                    
                    <div className="inline-flex items-center gap-3 text-white font-medium px-8 py-4 border border-white/30 backdrop-blur-sm bg-white/5 group-hover:bg-culinary-600 group-hover:border-culinary-600 transition-all duration-300">
                      <span>Explore Program</span>
                      <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-2" />
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
              className="relative group h-full overflow-hidden border-l border-white/10"
            >
              <Link href="/fashion" className="block h-full">
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
                <div className="relative h-full flex flex-col justify-center items-center p-8 lg:p-12">
                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-fashion-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="text-center max-w-md transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-fashion-400 to-transparent" />
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-fashion-300 font-sans">
                        School of
                      </p>
                      <div className="h-px w-12 bg-gradient-to-r from-fashion-400 via-transparent to-transparent" />
                    </div>
                    
                    <h2 className="text-5xl lg:text-6xl font-display font-normal text-white mb-6 leading-tight tracking-tight" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}>
                      Fashion Design
                    </h2>
                    
                    <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                      Shape the future with cutting-edge design education
                    </p>
                    
                    <div className="inline-flex items-center gap-3 text-white font-medium px-8 py-4 border border-white/30 backdrop-blur-sm bg-white/5 group-hover:bg-fashion-600 group-hover:border-fashion-600 transition-all duration-300 rounded-none">
                      <span>Explore Program</span>
                      <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-2" />
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
  )
}

