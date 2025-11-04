'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Award, Globe, Heart, Check } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/Button'

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="text-fashion-600" size={40} />,
      title: 'Excellence',
      description: 'Highest standards in training and professionalism.',
    },
    {
      icon: <Target className="text-fashion-600" size={40} />,
      title: 'Creativity',
      description: 'Innovation and artistic expression.',
    },
    {
      icon: <Globe className="text-fashion-600" size={40} />,
      title: 'Integrity',
      description: 'Honesty, responsibility, and ethical conduct.',
    },
    {
      icon: <Heart className="text-fashion-600" size={40} />,
      title: 'Discipline',
      description: 'Focus, commitment, and strong work ethics.',
    },
    {
      icon: <Award className="text-fashion-600" size={40} />,
      title: 'Empowerment',
      description: 'Self-confidence and entrepreneurship.',
    },
    {
      icon: <Heart className="text-fashion-600" size={40} />,
      title: 'Community Impact',
      description: 'Using skills to uplift others and society.',
    },
  ]

  const milestones = [
    { year: '2024', event: 'Academy Founded' },
    { year: '2024', event: 'State-of-the-Art Design Studios Established' },
    { year: '2024', event: 'Industry Partnerships Formed' },
    { year: '2024', event: 'Expert Faculty Assembled' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <PageHeader
            subtitle="About the Academy"
            title="About Ace Vocational Academy"
            description="Premier institution for Culinary Arts and Fashion Design. We provide hands-on skills and professional training, bridging the gap between talent and opportunity."
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-display-sm lg:text-display-md font-display font-semibold mb-6">
                About Ace Vocational Academy
              </h2>
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Ace Vocational Academy is a premier new institution for Culinary Arts and Fashion Design.
                  We provide hands-on skills and professional training, serving as a bridge between
                  talent and opportunity.
                </p>
                <p>
                  Our modern training kitchens and fully equipped fashion studios provide a real-world
                  practice environment where students learn from experienced instructors and mentors.
                  We believe in empowering individuals with the skills, confidence, and mindset to
                  become successful professionals, innovators, and entrepreneurs.
                </p>
                <p>
                  As a new academy, we're building our community from the ground up, focusing on
                  quality education, industry connections, and practical skills that prepare you
                  for success in your chosen field.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden rounded-sm"
            >
              <Image
                src="/fashion-2.png"
                alt="Ace Vocational Academy Fashion Design Studios"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-display-sm lg:text-display-md font-display font-semibold mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-600">
              The principles that guide everything we do at Ace Vocational Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 p-8 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-display-sm font-semibold mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To provide high-quality, practical, and accessible vocational education in Culinary Arts and Fashion Design, 
                empowering individuals with skills, confidence, and mindset to become successful professionals, innovators, 
                and entrepreneurs through industry-standard training and mentorship.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-display-sm font-semibold mb-6">Our Vision</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To become a leading vocational training institution in Africa, recognized for producing exceptional chefs, 
                designers, and entrepreneurs who uphold excellence, creativity, and integrity while contributing to social 
                and economic development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-display-sm lg:text-display-md font-display font-semibold mb-6">
              Why Choose Ace Vocational Academy
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Industry-relevant training aligned with market needs',
              'Experienced instructors with hands-on industry experience',
              'State-of-the-art facilities (kitchens and design studios)',
              'Entrepreneurship development and business training',
              'Flexible learning options for various schedules',
              'Recognized certification (Nigeria and beyond)',
              'Supportive creative community and post-graduation support',
            ].map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 p-6"
              >
                <div className="flex items-start">
                  <Check className="text-fashion-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-neutral-600">{reason}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-fashion-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-display-sm lg:text-display-md font-display font-normal mb-6">
              Join Our Academy
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of our founding community and help shape the future of fashion education. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/fashion/admissions"
                className="bg-white text-fashion-600 hover:bg-neutral-50"
              >
                Apply Now
              </Button>
              <Button
                href="/fashion/contact"
                variant="secondary"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule a Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



