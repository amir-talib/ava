'use client'

import { motion } from 'framer-motion'
import { Quote, MapPin, Briefcase } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      name: 'Chef Adewale Okafor',
      program: 'Professional Chef Program',
      graduationYear: 2019,
      currentRole: 'Executive Chef, The Wheatbaker Hotel',
      location: 'Lagos, Nigeria',
      image: null,
      quote: "Ace Vocational Academy didn't just teach me cooking—it taught me how to think like a chef, manage a kitchen, and lead a team. The hands-on training and mentorship from industry professionals prepared me for real-world challenges.",
      achievement: 'Now leading a team of 15 chefs in one of Lagos\'s premier hotels',
    },
    {
      id: 2,
      name: 'Chef Blessing Eze',
      program: 'Pastry & Baking Arts',
      graduationYear: 2020,
      currentRole: 'Owner, Sweet Blessings Patisserie',
      location: 'Abuja, Nigeria',
      image: null,
      quote: "The pastry program exceeded my expectations. I learned authentic French techniques that have become the foundation of my business. Today, I run a successful bakery with clients across Nigeria.",
      achievement: 'Built a thriving pastry business with 200+ monthly clients',
    },
    {
      id: 3,
      name: 'Chef Emmanuel Nwosu',
      program: 'International Cuisine Specialist',
      graduationYear: 2018,
      currentRole: 'Head Chef, Fusion Restaurant Dubai',
      location: 'Dubai, UAE',
      image: null,
      quote: "The international exposure and diverse curriculum at ACE gave me the confidence to compete globally. I'm now working in one of Dubai's top restaurants, creating fusion cuisine for an international clientele.",
      achievement: 'Secured position at prestigious Dubai establishment within 6 months of graduation',
    },
    {
      id: 4,
      name: 'Chef Chioma Okonkwo',
      program: 'Culinary Management',
      graduationYear: 2021,
      currentRole: 'F&B Manager, Transcorp Hilton',
      location: 'Abuja, Nigeria',
      image: null,
      quote: "The management program transformed my career trajectory. I moved from line cook to F&B Manager in just three years. The business acumen I gained has been invaluable.",
      achievement: 'Promoted to management role overseeing 3 restaurant outlets',
    },
    {
      id: 5,
      name: 'Chef Michael Adebayo',
      program: 'Professional Chef Program',
      graduationYear: 2017,
      currentRole: 'Private Chef & Culinary Consultant',
      location: 'Lagos, Nigeria',
      image: null,
      quote: "ACE gave me the technical skills and confidence to start my own private chef business. I now serve high-profile clients and consult for restaurant openings across West Africa.",
      achievement: 'Built exclusive private chef practice with celebrity clientele',
    },
    {
      id: 6,
      name: 'Chef Ngozi Akpan',
      program: 'Pastry & Baking Arts',
      graduationYear: 2022,
      currentRole: 'Pastry Chef, Four Points by Sheraton',
      location: 'Lagos, Nigeria',
      image: null,
      quote: "The faculty's expertise and the modern facilities made learning enjoyable and effective. Within months of graduating, I secured my dream job at an international hotel chain.",
      achievement: 'Youngest pastry chef at Five-star hotel property',
    },
  ]

  const stats = [
    { value: '95%', label: 'Graduate Employment Rate' },
    { value: '1000+', label: 'Successful Alumni' },
    { value: '50+', label: 'Countries Represented' },
    { value: '85%', label: 'Own Businesses' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <PageHeader
            subtitle="Success Stories"
            title="Our Alumni Are Changing the Culinary Landscape"
            description="Meet the chefs who transformed their passion into thriving careers. Their success is our greatest achievement."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="section-spacing-sm bg-culinary-600 text-white">
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
                <Quote className="text-culinary-600 mb-6" size={40} />
                
                <blockquote className="text-lg text-neutral-700 leading-relaxed mb-8">
                  "{story.quote}"
                </blockquote>

                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="text-2xl font-semibold mb-2">{story.name}</h3>
                  
                  <div className="space-y-2 text-sm text-neutral-600 mb-4">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2 text-culinary-600" />
                      <span>{story.currentRole}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-culinary-600" />
                      <span>{story.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-culinary-600 font-medium">
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
              Join our community of successful alumni and transform your culinary passion into a distinguished career.
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




