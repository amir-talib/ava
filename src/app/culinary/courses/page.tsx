'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Award, Calendar } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/Button'

export default function CoursesPage() {
  const courses = [
    {
      id: 'cake-baking-decoration',
      title: 'Cake Baking & Decoration Course',
      duration: 'Varies',
      level: 'All Levels',
      students: 'Small Classes',
      intakes: 'Rolling',
      tuition: 'Contact for Pricing',
      tagline: 'Bake. Create. Decorate. Impress — the Ace way!',
      description: 'Focus on creativity and artistry in cake making. Curriculum includes: baking perfect, moist cakes, elegant frosting techniques, piping skills, and fondant design. Hands-on program with professional techniques. Suitable for aspiring business owners or home bakers.',
      curriculum: [
        'Baking perfect, moist cakes',
        'Elegant frosting techniques',
        'Piping skills',
        'Fondant design',
        'Professional techniques',
        'Business fundamentals',
      ],
      outcomes: [
        'Start your own cake business',
        'Work as a professional cake decorator',
        'Master artistic cake design',
        'Become a skilled home baker',
      ],
    },
    {
      id: 'cake-bread-pastry',
      title: 'Cake, Bread & Pastry Course',
      duration: 'Comprehensive Program',
      level: 'All Levels',
      students: 'Small Classes',
      intakes: 'Rolling',
      tuition: 'Contact for Pricing',
      tagline: 'Bake with confidence. Create with passion. Rise to excellence — the Ace way!',
      description: 'Comprehensive baking program covering cakes, breads, and pastries. Training includes: texture mastery, flavor development, and design techniques. Step-by-step hands-on training with expert instructors. Focus on turning simple ingredients into professional creations.',
      curriculum: [
        'Texture mastery',
        'Flavor development',
        'Design techniques',
        'Step-by-step hands-on training',
        'Professional creation methods',
        'Expert instruction',
      ],
      outcomes: [
        'Master comprehensive baking skills',
        'Start a bakery business',
        'Work in professional kitchens',
        'Become a skilled artisan baker',
      ],
    },
    {
      id: 'catering',
      title: 'Catering Course',
      duration: 'Comprehensive Program',
      level: 'Professional',
      students: 'Small Classes',
      intakes: 'Rolling',
      tuition: 'Contact for Pricing',
      description: 'Comprehensive practical training for the catering and hospitality industry. Covers: menu planning, food preparation, presentation techniques, kitchen organization, and event service management. Hands-on experience with professional catering standards. Prepares students for diverse culinary field opportunities.',
      curriculum: [
        'Menu planning',
        'Food preparation',
        'Presentation techniques',
        'Kitchen organization',
        'Event service management',
        'Professional catering standards',
        'Hands-on experience',
      ],
      outcomes: [
        'Start your own catering business',
        'Work in event catering companies',
        'Become a professional caterer',
        'Manage catering operations',
      ],
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <PageHeader
            subtitle="Our Programs"
            title="Culinary Arts Courses"
            description="Choose from our comprehensive range of culinary programs designed to transform your passion into professional skills."
          />
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="border border-neutral-200 bg-white"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-culinary-50 text-culinary-700 rounded-full mb-4">
                        {course.level}
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                        {course.title}
                      </h2>
                      {course.tagline && (
                        <p className="text-lg text-culinary-600 font-medium italic mb-4">
                          "{course.tagline}"
                        </p>
                      )}
                      <p className="text-lg text-neutral-600 leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                    <div className="lg:text-right">
                      <div className="text-3xl font-semibold text-culinary-600 mb-2">
                        {course.tuition}
                      </div>
                      <p className="text-sm text-neutral-500">Total tuition</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 mb-10 pb-10 border-b border-neutral-200">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-culinary-600" size={24} />
                      <div>
                        <div className="font-semibold">{course.duration}</div>
                        <div className="text-sm text-neutral-500">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="text-culinary-600" size={24} />
                      <div>
                        <div className="font-semibold">{course.students}</div>
                        <div className="text-sm text-neutral-500">Class Size</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-culinary-600" size={24} />
                      <div>
                        <div className="font-semibold">{course.intakes}</div>
                        <div className="text-sm text-neutral-500">Intakes</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="text-culinary-600" size={24} />
                      <div>
                        <div className="font-semibold">Certificate</div>
                        <div className="text-sm text-neutral-500">Awarded</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10 mb-10">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Curriculum Highlights</h3>
                      <ul className="space-y-2">
                        {course.curriculum.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="text-culinary-600 mr-2">•</span>
                            <span className="text-neutral-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Career Outcomes</h3>
                      <ul className="space-y-2">
                        {course.outcomes.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="text-culinary-600 mr-2">✓</span>
                            <span className="text-neutral-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/culinary/admissions">
                      Apply for {course.title}
                    </Button>
                    <Button href="/culinary/contact" variant="secondary">
                      Request More Information
                    </Button>
                  </div>
                </div>
              </motion.div>
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
              Not Sure Which Program is Right for You?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Schedule a consultation with our admissions team to discuss your goals and find the perfect program.
            </p>
            <Button href="/culinary/contact">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
