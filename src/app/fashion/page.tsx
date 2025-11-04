'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Users, BookOpen, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function FashionHomePage() {
  const stats = [
    { label: 'Industry Partners', value: '60+' },
    { label: 'Expert Instructors', value: '20+' },
    { label: 'Professional Programs', value: '3+' },
    { label: 'Hands-On Training', value: '100%' },
  ]

  const programs = [
    {
      title: 'Foundation Course',
      duration: 'Beginner Level',
      description: 'Perfect starting point for those new to fashion design. Learn the fundamentals of design, pattern making, and garment construction.',
      highlights: ['Basic Pattern Making', 'Sewing Fundamentals', 'Design Sketching Basics', 'Fabric Selection'],
    },
    {
      title: 'Intermediate Course',
      duration: 'Mid-Level Skills',
      description: 'Build upon your foundation skills with advanced techniques. Develop your personal style and technical expertise.',
      highlights: ['Advanced Pattern Making', 'Draping Techniques', 'Fashion Illustration', 'Portfolio Development'],
    },
    {
      title: 'Advanced Course',
      duration: 'Professional Mastery',
      description: 'Achieve professional mastery in fashion design. Perfect for those ready to launch their career or start their own fashion business.',
      highlights: ['Collection Development', 'Business Fundamentals', 'Brand Development', 'Professional Portfolio'],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/fashion-2.png"
            alt="Fashion Design at Ace Vocational Academy"
            fill
            className="object-cover scale-105"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-fashion-900/50 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        
        {/* Geometric decorative elements */}
        <div className="absolute top-20 right-10 w-px h-32 bg-gradient-to-b from-fashion-400/60 to-transparent" />
        <div className="absolute top-52 right-10 w-24 h-px bg-gradient-to-l from-fashion-400/60 to-transparent" />
        <div className="absolute bottom-32 left-10 w-px h-24 bg-gradient-to-t from-fashion-400/40 to-transparent hidden lg:block" />
        
        <div className="container-custom w-full">
          <div className="max-w-3xl mx-auto">
            {/* Content container with refined backdrop */}
            <div className="relative backdrop-blur-md bg-black/5 p-8 lg:p-12 border border-white/10 rounded-none">
              {/* Minimal corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-fashion-400/50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-fashion-400/50" />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                {/* Subtitle with minimal line */}
            <motion.div
                  initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-3 mb-7"
            >
                  <div className="h-px w-8 bg-gradient-to-r from-fashion-400 to-transparent" />
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-fashion-300 font-sans">
                School of Fashion Design
              </p>
                </motion.div>

                {/* Main heading with tight spacing */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-display-lg lg:text-display-xl font-display font-normal mb-8 text-balance text-white leading-[1.0] tracking-tight"
                  style={{ textShadow: '0 4px 24px rgba(0, 0, 0, 0.4)' }}
                >
                Shape the Future of
                <br />
                  <span className="text-fashion-300 inline-block mt-1">Fashion</span>
                </motion.h1>

                {/* Description with refined typography */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl lg:text-2xl text-white/85 leading-relaxed mb-12 max-w-xl font-light"
                >
                Transform your creative vision into wearable art with cutting-edge design education and industry expertise.
                </motion.p>

                {/* CTA Buttons with sophisticated styling */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <Button 
                    href="/fashion/admissions" 
                    size="lg"
                    className="bg-fashion-600 text-white hover:bg-fashion-700 hover:shadow-xl hover:shadow-fashion-600/40 hover:-translate-y-0.5 transition-all duration-300 rounded-none"
                  >
                  Apply Now
                </Button>
                  <Button 
                    href="/fashion/courses" 
                    variant="secondary" 
                    size="lg"
                    className="border border-white/70 text-white hover:bg-white/5 hover:border-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-none"
                  >
                  View Programs
                </Button>
                </motion.div>
              </motion.div>
              </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing-sm bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-display font-normal text-fashion-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-fashion-600 mb-5">
                Why Choose Us
              </p>
              <h2 className="text-display-md font-display font-normal mb-8 leading-tight">
                Industry-Leading Fashion Education
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-lg text-neutral-600 leading-relaxed">
                Our fashion program blends creative expression with technical mastery, preparing you for success in the global fashion industry.
              </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  From concept to runway, you&apos;ll work alongside award-winning designers and build a portfolio that opens doors.
              </p>
              </div>
              <Button href="/fashion/about">
                Learn More About Our School
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <FeatureCard
                  icon={<Award className="text-fashion-600" size={32} />}
                  title="Certified Programs"
                  description="Internationally recognized fashion credentials"
                />
                <FeatureCard
                  icon={<Users className="text-fashion-600" size={32} />}
                  title="Expert Faculty"
                  description="Learn from industry professionals"
                />
              </div>
              <div className="space-y-6 mt-12">
                <FeatureCard
                  icon={<BookOpen className="text-fashion-600" size={32} />}
                  title="Studio Experience"
                  description="Professional design studio access"
                />
                <FeatureCard
                  icon={<TrendingUp className="text-fashion-600" size={32} />}
                  title="Career Support"
                  description="Comprehensive guidance for your fashion career path"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-fashion-600 mb-5">
              Our Programs
            </p>
            <h2 className="text-display-md font-display font-normal mb-6 leading-tight">
              Choose Your Fashion Path
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              From design fundamentals to business strategy, find the program that matches your fashion vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 p-8 lg:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-medium text-fashion-600 uppercase tracking-wider">
                    {program.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-normal mb-5 leading-tight">{program.title}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start text-sm text-neutral-600 leading-relaxed">
                      <span className="text-fashion-600 mr-3 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/fashion/courses"
                  className="inline-flex items-center text-sm font-medium text-fashion-600 hover:text-fashion-700 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button href="/fashion/courses" variant="secondary">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-fashion-600 to-fashion-700 text-white p-12 lg:p-20 text-center rounded-sm"
          >
            <h2 className="text-display-sm lg:text-display-md font-display font-normal mb-6 leading-tight">
              Ready to Start Your Fashion Journey?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Join the next generation of fashion innovators. Applications are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                href="/fashion/admissions"
                className="bg-white text-fashion-600 hover:bg-neutral-50"
                size="lg"
              >
                Apply Now
              </Button>
              <Button
                href="/fashion/contact"
                variant="secondary"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                Schedule a Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white border border-neutral-200 p-7 hover:shadow-lg transition-all duration-300">
      <div className="mb-5">{icon}</div>
      <h3 className="font-semibold mb-3 text-lg">{title}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
    </div>
  )
}



