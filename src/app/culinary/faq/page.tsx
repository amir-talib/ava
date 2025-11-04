'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/Button'

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const categories = [
    {
      name: 'Admissions',
      faqs: [
        {
          id: 'adm-1',
          question: 'What are the entry requirements for culinary programs?',
          answer: 'You need to be at least 18 years old with a secondary school certificate or equivalent. We also require basic English proficiency and a passion for culinary arts. Some programs may have additional requirements such as prior kitchen experience or specific educational backgrounds.',
        },
        {
          id: 'adm-2',
          question: 'When can I start my program?',
          answer: 'We have multiple intake periods throughout the year. Most programs start in January, April, and September. Specific programs may have different intake schedules. Check our Courses page for detailed information about each program\'s start dates.',
        },
        {
          id: 'adm-3',
          question: 'How long does the application process take?',
          answer: 'Once you submit your application, you\'ll receive a decision within 7 working days. The entire process from application to enrollment typically takes 2-3 weeks.',
        },
        {
          id: 'adm-4',
          question: 'Do you accept international students?',
          answer: 'Yes! We welcome international students from across the globe. International applicants may need to provide additional documentation including visa requirements, English language proficiency tests, and credential evaluations.',
        },
      ],
    },
    {
      name: 'Programs',
      faqs: [
        {
          id: 'prog-1',
          question: 'What programs do you offer?',
          answer: 'We offer four main programs: Professional Chef Program (12 months), Pastry & Baking Arts (9 months), Culinary Management (6 months), and International Cuisine Specialist (8 months). Each program is designed for different career paths and experience levels.',
        },
        {
          id: 'prog-2',
          question: 'Are your programs accredited?',
          answer: 'Yes, all our programs are accredited by the National Board for Technical Education (NBTE) and internationally recognized. Our certifications are respected by employers worldwide.',
        },
        {
          id: 'prog-3',
          question: 'Can I work while studying?',
          answer: 'Our programs are intensive and require full-time commitment. However, we do offer evening and weekend classes for some programs. Many students also participate in paid internships during their training.',
        },
        {
          id: 'prog-4',
          question: 'Do you offer online or hybrid learning options?',
          answer: 'Culinary education requires hands-on practice, so our core programs are in-person. However, we offer some supplementary online courses for theory components and continuing education.',
        },
      ],
    },
    {
      name: 'Facilities & Resources',
      faqs: [
        {
          id: 'fac-1',
          question: 'What facilities are available to students?',
          answer: 'Students have access to professional-grade kitchens, a bakery lab, demonstration theater, dining room for practical service training, a culinary library, and student lounge. All facilities are equipped with industry-standard equipment.',
        },
        {
          id: 'fac-2',
          question: 'Will I need to purchase my own equipment?',
          answer: 'You\'ll need to purchase a professional knife set, chef uniforms, and some personal tools. The academy provides all major equipment and ingredients for training. We can recommend suppliers and may offer starter kits for purchase.',
        },
        {
          id: 'fac-3',
          question: 'Is accommodation provided?',
          answer: 'We don\'t provide on-campus accommodation, but we can assist with finding nearby housing options and connect you with other students looking for roommates.',
        },
      ],
    },
    {
      name: 'Career & Employment',
      faqs: [
        {
          id: 'car-1',
          question: 'What career support do you provide?',
          answer: 'We offer comprehensive career support including resume building, interview preparation, industry networking events, job placement assistance, and access to our alumni network. Our career services team works with each graduate individually.',
        },
        {
          id: 'car-2',
          question: 'What is your graduate employment rate?',
          answer: 'We\'re proud to have a 95% graduate employment rate. Most students secure positions within 3-6 months of graduation. Our alumni work in top restaurants, hotels, private chef services, and their own businesses.',
        },
        {
          id: 'car-3',
          question: 'Do you offer internship opportunities?',
          answer: 'Yes! All programs include industry placement components. We partner with over 50 restaurants, hotels, and catering companies across Nigeria and internationally to provide real-world experience.',
        },
      ],
    },
    {
      name: 'Financial',
      faqs: [
        {
          id: 'fin-1',
          question: 'What is the tuition fee?',
          answer: 'Tuition varies by program, ranging from ₦1,500,000 to ₦2,500,000. This includes instruction, use of facilities, and most ingredients. Additional costs include uniforms, personal equipment, and textbooks.',
        },
        {
          id: 'fin-2',
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans. You can pay in installments over the duration of your program. Contact our admissions office to discuss options that work for your budget.',
        },
        {
          id: 'fin-3',
          question: 'Are scholarships available?',
          answer: 'We offer merit-based scholarships and need-based financial aid. Scholarships are awarded based on academic achievement, talent, and financial need. Apply early as scholarships are limited.',
        },
      ],
    },
  ]

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <PageHeader
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our culinary programs, admissions, and facilities."
          />
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-2xl font-semibold mb-6 pb-3 border-b-2 border-culinary-600">
                {category.name}
              </h2>
              <div className="space-y-3">
                {category.faqs.map((faq) => {
                  const isOpen = openFAQ === faq.id
                  return (
                    <div
                      key={faq.id}
                      className="border border-neutral-200 bg-white overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                      >
                        <span className="font-semibold pr-8">{faq.question}</span>
                        <span className="flex-shrink-0 text-culinary-600">
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                      </button>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-neutral-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-spacing bg-culinary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-display-sm font-semibold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our admissions team is ready to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/culinary/contact" className="bg-white text-culinary-600 hover:bg-neutral-50">
                Contact Us
              </Button>
              <Button href="/culinary/admissions" variant="secondary" className="border-white text-white hover:bg-white/10">
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}




