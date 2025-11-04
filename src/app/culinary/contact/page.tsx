'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: <MapPin className="text-culinary-600" size={24} />,
      title: 'Visit Us',
      details: ['123 Excellence Avenue', 'Victoria Island, Lagos', 'Nigeria'],
    },
    {
      icon: <Phone className="text-culinary-600" size={24} />,
      title: 'Call Us',
      details: ['+234 123 456 7890', '+234 123 456 7891', '(Mon - Fri, 8am - 6pm)'],
    },
    {
      icon: <Mail className="text-culinary-600" size={24} />,
      title: 'Email Us',
      details: ['Acevocationalacademy@gmail.com'],
    },
    {
      icon: <Clock className="text-culinary-600" size={24} />,
      title: 'Operating Hours',
      details: ['Monday - Saturday: 9:00 AM - 5:00 PM', 'Sunday: Closed'],
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <PageHeader
            subtitle="Contact Us"
            title="Let's Start a Conversation"
            description="Have questions about our programs, admissions, or facilities? We're here to help you begin your culinary journey."
          />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 p-6 text-center"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 text-sm text-neutral-600">
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-display-sm font-semibold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                  />
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="tour">Campus Tour Request</option>
                    <option value="financial">Financial Aid</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-culinary-600 focus:border-transparent"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button type="submit" fullWidth>
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-display-sm font-semibold mb-6">
                  Find Us
                </h2>
                {/* Map Placeholder */}
                <div className="bg-neutral-200 aspect-square border border-neutral-300 flex items-center justify-center">
                  <p className="text-neutral-500 text-sm">[Interactive Map]</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/acevocationalacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-neutral-300 hover:border-culinary-600 hover:text-culinary-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/Acevocationalacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-neutral-300 hover:border-culinary-600 hover:text-culinary-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://twitter.com/Ace_vocational"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-neutral-300 hover:border-culinary-600 hover:text-culinary-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@ace_vocational_academy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-neutral-300 hover:border-culinary-600 hover:text-culinary-600 transition-colors"
                    aria-label="TikTok"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              <div className="bg-culinary-50 border border-culinary-200 p-6">
                <h3 className="font-semibold mb-2">Schedule a Campus Tour</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Experience our facilities firsthand and meet our faculty. Tours available Monday - Saturday.
                </p>
                <Button href="/culinary/admissions" variant="secondary">
                  Book a Tour
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}



