'use client'

import { motion } from 'framer-motion'
import { Quote, MapPin, Briefcase } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      name: 'Designer Amara Nwachukwu',
      program: 'Fashion Design Diploma',
      graduationYear: 2019,
      currentRole: 'Creative Director, Amara Couture',
      location: 'Lagos, Nigeria',
      image: null,
      quote: "ACE gave me more than technical skills—it gave me the confidence to build my own brand. Today, Amara Couture is showcasing at Lagos Fashion Week and dressing celebrities across Africa.",
      achievement: 'Showcased at Lagos Fashion Week 2023 and 2024',
    },
    {
      id: 2,
      name: 'Designer Tunde Bakare',
      program: 'Fashion Design Diploma',
      graduationYear: 2018,
      currentRole: 'Senior Designer, Maki Oh',
      location: 'Lagos, Nigeria',
      image: null,
      quote: "The rigorous training and industry exposure at ACE prepared me to work with Nigeria's top fashion houses. I'm now contributing to a globally recognized brand.",
      achievement: 'Contributed to collections featured in Vogue and Elle',
    },
    {
      id: 3,
      name: 'Entrepreneur Zainab Ibrahim',
      program: 'Fashion Business & Entrepreneurship',
      graduationYear: 2020,
      currentRole: 'Founder, ZI Fashion Consulting',
      location: 'Abuja, Nigeria',
      image: null,
      quote: "The business program equipped me with the tools to not just design, but to build a sustainable fashion business. I now consult for emerging designers across West Africa.",
      achievement: 'Built consulting firm serving 30+ fashion brands',
    },
    {
      id: 4,
      name: 'Designer Chidinma Okoye',
      program: 'Fashion Styling & Creative Direction',
      graduationYear: 2021,
      currentRole: 'Celebrity Stylist',
      location: 'Lagos, Nigeria',
      image: null,
      quote: "ACE's styling program opened doors I never imagined. Within a year of graduating, I was styling for major music videos and red carpet events.",
      achievement: 'Styled over 50 celebrities for high-profile events',
    },
    {
      id: 5,
      name: 'Designer Kemi Adetiba',
      program: 'Textile & Surface Design',
      graduationYear: 2019,
      currentRole: 'Textile Designer, Vlisco',
      location: 'Accra, Ghana',
      image: null,
      quote: "The textile program was incredibly comprehensive. I learned everything from traditional techniques to digital design, which landed me a role at one of Africa's leading textile companies.",
      achievement: 'Designs featured in major African fabric collections',
    },
    {
      id: 6,
      name: 'Designer Uche Mbah',
      program: 'Fashion Design Diploma',
      graduationYear: 2022,
      currentRole: 'Sustainable Fashion Designer',
      location: 'London, UK',
      image: null,
      quote: "ACE's emphasis on innovation and sustainability shaped my design philosophy. I'm now working in London, creating eco-conscious fashion for international markets.",
      achievement: 'Featured in London Fashion Week sustainable showcase',
    },
  ]

  const stats = [
    { value: '93%', label: 'Graduate Employment Rate' },
    { value: '800+', label: 'Successful Alumni' },
    { value: '35+', label: 'Countries Represented' },
    { value: '70%', label: 'Own Brands' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <PageHeader
            subtitle="Success Stories"
            title="Our Alumni Are Shaping the Fashion Industry"
            description="Meet the designers who transformed their creative vision into thriving careers. Their success is our greatest achievement."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="section-spacing-sm bg-fashion-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-semibold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 p-8 lg:p-10"
              >
                <Quote className="text-fashion-600 mb-6" size={40} />
                
                <blockquote className="text-lg text-neutral-700 leading-relaxed mb-8">
                  &quot;{story.quote}&quot;
                </blockquote>

                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="text-2xl font-semibold mb-2">{story.name}</h3>
                  
                  <div className="space-y-2 text-sm text-neutral-600 mb-4">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2 text-fashion-600" />
                      <span>{story.currentRole}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-fashion-600" />
                      <span>{story.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-fashion-600 font-medium">
                      {story.program}
                    </span>
                    <span className="text-neutral-500">
                      Class of {story.graduationYear}
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <p className="text-sm text-neutral-600 italic">
                      <strong>Achievement:</strong> {story.achievement}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-display-sm lg:text-display-md font-semibold mb-6">
              Write Your Own Success Story
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Join our community of successful alumni and transform your fashion vision into a distinguished career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Apply Now
              </button>
              <button className="btn-secondary">
                Schedule a Campus Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}




