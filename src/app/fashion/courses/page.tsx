'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Award, Calendar } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/Button'

export default function CoursesPage() {
  const courses = [
    {
      id: 'foundation-course',
      title: 'Foundation Course',
      duration: '6 Months',
      level: 'Beginner',
      students: 'Max 18',
      intakes: 'Jan, Apr, Sep',
      tuition: 'Contact for Pricing',
      description: 'Perfect for beginners starting their fashion design journey. Learn fundamental skills including basic pattern making, sewing techniques, fabric knowledge, and design principles.',
      curriculum: [
        'Introduction to fashion design',
        'Basic pattern making and drafting',
        'Fundamental sewing techniques',
        'Fabric types and characteristics',
        'Fashion illustration basics',
        'Design principles and color theory',
        'Simple garment construction',
        'Introduction to design software',
      ],
      outcomes: [
        'Understand fashion design fundamentals',
        'Create basic garments from scratch',
        'Develop foundational portfolio',
        'Progress to intermediate level',
      ],
    },
    {
      id: 'intermediate-course',
      title: 'Intermediate Course',
      duration: '9 Months',
      level: 'Intermediate',
      students: 'Max 15',
      intakes: 'Feb, Jul, Oct',
      tuition: 'Contact for Pricing',
      description: 'Build on your foundational skills with advanced techniques. Develop expertise in complex pattern making, draping, tailoring, and professional garment construction.',
      curriculum: [
        'Advanced pattern making',
        'Draping and moulage techniques',
        'Professional tailoring methods',
        'Complex garment construction',
        'Fashion illustration mastery',
        'Fabric manipulation and techniques',
        'Sustainable fashion practices',
        'Collection development basics',
      ],
      outcomes: [
        'Master mid-level design skills',
        'Create professional-quality garments',
        'Develop sophisticated portfolio',
        'Ready for advanced specialization',
      ],
    },
    {
      id: 'advanced-course',
      title: 'Advanced Course',
      duration: '12 Months',
      level: 'Professional',
      students: 'Max 12',
      intakes: 'Jan, Sep',
      tuition: 'Contact for Pricing',
      description: 'Achieve professional mastery with industry-level training. Focus on runway collections, couture techniques, brand development, and entrepreneurial skills.',
      curriculum: [
        'Couture and haute couture techniques',
        'Runway collection development',
        'Advanced draping and creative pattern making',
        'Brand identity and development',
        'Fashion business and entrepreneurship',
        'Portfolio development and presentation',
        'Industry connections and mentorship',
        'Fashion show and exhibition',
      ],
      outcomes: [
        'Launch your fashion brand',
        'Work with established fashion houses',
        'Independent designer/entrepreneur',
        'International career opportunities',
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
            title="Fashion Design Courses"
            description="Choose from our comprehensive range of fashion programs designed to transform your creative vision into professional skills."
          />
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="space-y-16">
            {courses.map((course) => (
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
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-fashion-50 text-fashion-700 rounded-full mb-4">
                        {course.level}
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                        {course.title}
                      </h2>
                      <p className="text-lg text-neutral-600 leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                    <div className="lg:text-right">
                      <div className="text-3xl font-semibold text-fashion-600 mb-2">
                        {course.tuition}
                      </div>
                      <p className="text-sm text-neutral-500">Total tuition</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 mb-10 pb-10 border-b border-neutral-200">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-fashion-600" size={24} />
                      <div>
                        <div className="font-semibold">{course.duration}</div>
                        <div className="text-sm text-neutral-500">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="text-fashion-600" size={24} />
                      <div>
                        <div className="font-semibold">{course.students}</div>
                        <div className="text-sm text-neutral-500">Class Size</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-fashion-600" size={24} />
                      <div>
                        <div className="font-semibold">{course.intakes}</div>
                        <div className="text-sm text-neutral-500">Intakes</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="text-fashion-600" size={24} />
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
                            <span className="text-fashion-600 mr-2">•</span>
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
                            <span className="text-fashion-600 mr-2">✓</span>
                            <span className="text-neutral-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/fashion/admissions">
                      Apply for {course.title}
                    </Button>
                    <Button href="/fashion/contact" variant="secondary">
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
            <Button href="/fashion/contact">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
