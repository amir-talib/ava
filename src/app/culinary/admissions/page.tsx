'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, FileText, Calendar, CreditCard, CheckCircle } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/Button'

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    startDate: '',
    education: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const requirements = [
    'Minimum age of 18 years',
    'Secondary school certificate or equivalent',
    'Passion for culinary arts',
    'Basic English proficiency',
    'Medical fitness certificate',
  ]

  const steps = [
    {
      icon: <FileText className="text-culinary-600" size={32} />,
      title: 'Submit Application',
      description: 'Complete the online application form with your personal details and program selection.',
    },
    {
      icon: <Calendar className="text-culinary-600" size={32} />,
      title: 'Interview & Assessment',
      description: 'Attend a brief interview to discuss your goals and participate in a practical assessment.',
    },
    {
      icon: <CheckCircle className="text-culinary-600" size={32} />,
      title: 'Receive Decision',
      description: 'Get your admission decision within 7 working days via email.',
    },
    {
      icon: <CreditCard className="text-culinary-600" size={32} />,
      title: 'Enrollment & Payment',
      description: 'Complete enrollment by submitting documents and making the first tuition payment.',
    },
  ]

  const programs = [
    { value: 'cake-baking-decoration', label: 'Cake Baking & Decoration Course' },
    { value: 'cake-bread-pastry', label: 'Cake, Bread & Pastry Course' },
    { value: 'catering', label: 'Catering Course' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <PageHeader
            subtitle="Admissions"
            title="Begin Your Culinary Journey"
            description="Join Nigeria's premier culinary institution. Applications are rolling—apply today and start transforming your passion into profession."
          />
        </div>
      </section>

      {/* Application Process */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-display-sm lg:text-display-md font-semibold mb-6">
              Application Process
            </h2>
            <p className="text-lg text-neutral-600">
              Our streamlined admissions process ensures you can focus on what matters—your culinary education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">{step.icon}</div>
                <div className="mb-2 text-sm font-medium text-culinary-600">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-sm font-semibold mb-8 text-center">
              Entry Requirements
            </h2>
            <div className="bg-white border border-neutral-200 p-8 lg:p-12">
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start">
                    <Check className="text-culinary-600 mr-3 flex-shrink-0" size={24} />
                    <span className="text-lg text-neutral-600">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <p className="text-neutral-600 text-sm leading-relaxed">
                  <strong>Note:</strong> International students may have additional requirements.
                  Contact our admissions team for specific guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-semibold mb-4">
                Apply Now
              </h2>
              <p className="text-lg text-neutral-600">
                Start your application by filling out the form below. Our admissions team will contact you within 24 hours.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-neutral-200 p-8 lg:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium mb-2">
                    Desired Program *
                  </label>
                  <select
                    id="program"
                    required
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                  >
                    <option value="">Select a program</option>
                    {programs.map((prog) => (
                      <option key={prog.value} value={prog.value}>
                        {prog.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                    Preferred Start Date *
                  </label>
                  <select
                    id="startDate"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                  >
                    <option value="">Select intake date</option>
                    <option value="jan-2025">January 2025</option>
                    <option value="apr-2025">April 2025</option>
                    <option value="sep-2025">September 2025</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="education" className="block text-sm font-medium mb-2">
                    Highest Education Level *
                  </label>
                  <select
                    id="education"
                    required
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                  >
                    <option value="">Select education level</option>
                    <option value="secondary">Secondary School</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Us About Your Culinary Goals (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                    placeholder="Share your passion for culinary arts and what you hope to achieve..."
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" fullWidth size="lg">
                    Submit Application
                  </Button>
                  <p className="text-sm text-neutral-500 text-center mt-4">
                    By submitting this form, you agree to our terms and conditions.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="section-spacing bg-culinary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-display-sm font-semibold mb-6">
            Have Questions About Admissions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our admissions team is here to help. View our FAQ or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/culinary/faq" className="bg-white text-culinary-600 hover:bg-neutral-50">
              View FAQ
            </Button>
            <Button href="/culinary/contact" variant="secondary" className="border-white text-white hover:bg-white/10">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}



