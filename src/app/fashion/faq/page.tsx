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
          question: 'What are the entry requirements for fashion programs?',
          answer: 'You need to be at least 18 years old with a secondary school certificate or equivalent. A creative portfolio (sketches, designs, or mood boards) is required for most programs. We also assess your passion for fashion and creative vision during the interview process.',
        },
        {
          id: 'adm-2',
          question: 'When can I start my program?',
          answer: 'We have multiple intake periods throughout the year. Most programs start in January, April, and September. Some specialized programs have fewer intakes. Check our Courses page for detailed information about each program\'s start dates.',
        },
        {
          id: 'adm-3',
          question: 'Do I need prior fashion experience to apply?',
          answer: 'No prior professional experience is required, but we look for demonstrated interest in fashion through your portfolio, personal projects, or relevant activities. A genuine passion for design and creativity is essential.',
        },
        {
          id: 'adm-4',
          question: 'Do you accept international students?',
          answer: 'Yes! We welcome international students from around the world. International applicants may need to provide additional documentation including visa requirements, English language proficiency tests, and credential evaluations.',
        },
      ],
    },
    {
      name: 'Programs',
      faqs: [
        {
          id: 'prog-1',
          question: 'What programs do you offer?',
          answer: 'We offer four main programs: Fashion Design Diploma (12 months), Fashion Business & Entrepreneurship (9 months), Textile & Surface Design (6 months), and Fashion Styling & Creative Direction (8 months). Each program targets different aspects of the fashion industry.',
        },
        {
          id: 'prog-2',
          question: 'Are your programs accredited?',
          answer: 'Yes, all our programs are accredited by the National Board for Technical Education (NBTE) and recognized internationally. Many of our graduates successfully work with global fashion houses and brands.',
        },
        {
          id: 'prog-3',
          question: 'Will I create a fashion collection?',
          answer: 'Yes! Most programs culminate in a final collection or portfolio project. This becomes a centerpiece of your professional portfolio and is often showcased at our annual fashion show.',
        },
        {
          id: 'prog-4',
          question: 'Do you teach sustainable fashion practices?',
          answer: 'Absolutely. Sustainability is integrated throughout our curriculum. You\'ll learn about eco-friendly materials, ethical production, circular fashion, and sustainable business practices.',
        },
      ],
    },
    {
      name: 'Facilities & Resources',
      faqs: [
        {
          id: 'fac-1',
          question: 'What facilities are available to students?',
          answer: 'Students have access to design studios, industrial sewing machines, pattern-making labs, digital design software, textile printing facilities, photography studio, and a fashion library. All spaces are equipped with professional-grade tools.',
        },
        {
          id: 'fac-2',
          question: 'Will I need my own sewing machine?',
          answer: 'The academy provides all major equipment for coursework. However, many students choose to purchase personal machines for home practice. You\'ll need basic design supplies like sketchbooks, tools, and some fabrics for projects.',
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
          answer: 'We offer comprehensive career support including portfolio development, industry networking events, fashion show participation, job placement assistance, mentorship programs, and access to our extensive alumni network in the fashion industry.',
        },
        {
          id: 'car-2',
          question: 'What is your graduate employment rate?',
          answer: 'We maintain a 93% graduate employment rate. Many students launch their own brands, while others join established fashion houses, styling agencies, retail companies, or textile firms within 6 months of graduation.',
        },
        {
          id: 'car-3',
          question: 'Do you offer internship opportunities?',
          answer: 'Yes! We partner with over 60 fashion brands, design houses, styling agencies, and retailers across Nigeria and internationally to provide hands-on industry experience.',
        },
      ],
    },
    {
      name: 'Financial',
      faqs: [
        {
          id: 'fin-1',
          question: 'What is the tuition fee?',
          answer: 'Tuition varies by program, ranging from ₦1,600,000 to ₦2,800,000. This includes instruction, facility access, and most materials. Additional costs may include personal supplies, fabrics for final collections, and portfolio printing.',
        },
        {
          id: 'fin-2',
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans allowing you to pay in installments throughout your program. Contact our admissions office to discuss options that fit your budget.',
        },
        {
          id: 'fin-3',
          question: 'Are scholarships available?',
          answer: 'We offer merit-based scholarships and need-based financial aid. Scholarships are awarded based on portfolio strength, academic achievement, and financial need. Apply early as opportunities are limited.',
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
            description="Find answers to common questions about our fashion programs, admissions, and facilities."
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
              <h2 className="text-2xl font-semibold mb-6 pb-3 border-b-2 border-fashion-600">
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
                        <span className="flex-shrink-0 text-fashion-600">
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
      <section className="section-spacing bg-fashion-600 text-white">
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
              <Button href="/fashion/contact" className="bg-white text-fashion-600 hover:bg-neutral-50">
                Contact Us
              </Button>
              <Button href="/fashion/admissions" variant="secondary" className="border-white text-white hover:bg-white/10">
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}




