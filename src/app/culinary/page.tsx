'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Users, BookOpen, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function CulinaryHomePage() {
  const stats = [
    { label: 'Industry Partners', value: '50+' },
    { label: 'Expert Instructors', value: '20+' },
    { label: 'Professional Programs', value: '3+' },
    { label: 'Hands-On Training', value: '100%' },
  ]

  const programs = [
    {
      title: 'Cake Baking & Decoration Course',
      duration: '6 Weeks',
      description: 'Focus on creativity and artistry in cake making. Hands-on program with professional techniques suitable for aspiring business owners or home bakers.',
      highlights: ['Baking perfect, moist cakes', 'Elegant frosting techniques', 'Piping skills', 'Fondant design'],
      tagline: 'Bake. Create. Decorate. Impress — the Ace way!',
    },
    {
      title: 'Bread & Pastry Course',
      duration: '6 Weeks',
      description: 'Comprehensive baking program covering breads and pastries. Step-by-step hands-on training with expert instructors.',
      highlights: ['Texture mastery', 'Flavor development', 'Design techniques', 'Professional creation methods'],
      tagline: 'Bake with confidence. Create with passion. Rise to excellence — the Ace way!',
    },
    {
      title: 'Catering Course',
      duration: '3 Months',
      description: 'Comprehensive practical training for the catering and hospitality industry. Hands-on experience with professional catering standards.',
      highlights: ['Menu planning', 'Food preparation', 'Presentation techniques', 'Event service management'],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/culinary-main.png"
            alt="Culinary Arts at Ace Vocational Academy"
            fill
            className="object-cover scale-105"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-culinary-950/60 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        
        {/* Decorative accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-culinary-500/60 to-transparent" />
        
        <div className="container-custom w-full">
          <div className="max-w-3xl mx-auto">
            {/* Content container with backdrop */}
            <div className="relative backdrop-blur-sm bg-black/10 p-8 lg:p-10 border border-white/5 rounded-sm">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-culinary-500/40" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-culinary-500/40" />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {/* Subtitle with accent line */}
            <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="h-px w-12 bg-gradient-to-r from-culinary-500 to-transparent" />
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-culinary-400">
                School of Culinary Arts
              </p>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-display-lg lg:text-display-xl font-display font-normal mb-8 text-balance text-white leading-[1.05]"
                  style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)' }}
                >
                Master the Art of
                <br />
                  <span className="text-culinary-400 inline-block">Cooking</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl"
                >
                Transform your passion for food into a distinguished career with world-class training from industry leaders.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <Button 
                    href="/culinary/admissions" 
                    size="lg"
                    className="bg-culinary-600 text-white hover:bg-culinary-700 hover:shadow-lg hover:shadow-culinary-600/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                  Apply Now
                </Button>
                  <Button 
                    href="/culinary/courses" 
                    variant="secondary" 
                    size="lg"
                    className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
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
                <div className="text-5xl lg:text-6xl font-display font-normal text-culinary-600 mb-3">
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
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-culinary-600 mb-5">
                Why Choose Us
              </p>
              <h2 className="text-display-md font-display font-normal mb-8 leading-tight">
                Industry-Leading Culinary Education
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-lg text-neutral-600 leading-relaxed">
                Our culinary program combines time-honored techniques with innovative approaches, preparing you for success in the dynamic food industry.
              </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Trained by award-winning chefs and supported by state-of-the-art facilities, you&apos;ll gain hands-on experience that sets you apart.
              </p>
              </div>
              <Button href="/culinary/about">
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
                  icon={<Award className="text-culinary-600" size={32} />}
                  title="Certified Programs"
                  description="Internationally recognized culinary certifications"
                />
                <FeatureCard
                  icon={<Users className="text-culinary-600" size={32} />}
                  title="Expert Faculty"
                  description="Learn from Michelin-trained chefs"
                />
              </div>
              <div className="space-y-6 mt-12">
                <FeatureCard
                  icon={<BookOpen className="text-culinary-600" size={32} />}
                  title="Hands-On Training"
                  description="Professional kitchen experience"
                />
                <FeatureCard
                  icon={<TrendingUp className="text-culinary-600" size={32} />}
                  title="Career Support"
                  description="Comprehensive guidance for your culinary career path"
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
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-culinary-600 mb-5">
              Our Programs
            </p>
            <h2 className="text-display-md font-display font-normal mb-6 leading-tight">
              Choose Your Culinary Path
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              From foundational techniques to advanced specializations, find the program that matches your culinary ambitions.
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
                  <span className="text-xs font-medium text-culinary-600 uppercase tracking-wider">
                    {program.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-normal mb-5 leading-tight">{program.title}</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {program.description}
                </p>
                {'tagline' in program && program.tagline && (
                  <p className="text-sm font-medium text-culinary-600 italic mb-6 leading-relaxed">
                    &quot;{program.tagline}&quot;
                  </p>
                )}
                <ul className="space-y-3 mb-8">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start text-sm text-neutral-600 leading-relaxed">
                      <span className="text-culinary-600 mr-3 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/culinary/courses"
                  className="inline-flex items-center text-sm font-medium text-culinary-600 hover:text-culinary-700 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button href="/culinary/courses" variant="secondary">
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
            className="bg-gradient-to-r from-culinary-600 to-culinary-700 text-white p-12 lg:p-20 text-center rounded-sm"
          >
            <h2 className="text-display-sm lg:text-display-md font-display font-normal mb-6 leading-tight">
              Ready to Start Your Culinary Journey?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Join the next generation of culinary professionals. Applications are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                href="/culinary/admissions"
                className="bg-white text-culinary-600 hover:bg-neutral-50"
                size="lg"
              >
                Apply Now
              </Button>
              <Button
                href="/culinary/contact"
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



