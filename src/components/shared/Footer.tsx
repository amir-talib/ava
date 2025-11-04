import Link from 'next/link'
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { type Discipline } from '@/types'

interface FooterProps {
  discipline?: Discipline
}

export function Footer({ discipline }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const basePath = discipline ? `/${discipline}` : ''

  const quickLinks = discipline ? [
    { label: 'About', href: `${basePath}/about` },
    { label: 'Courses', href: `${basePath}/courses` },
    { label: 'Admissions', href: `${basePath}/admissions` },
    { label: 'Contact', href: `${basePath}/contact` },
  ] : []

  const resourceLinks = discipline ? [
    { label: 'FAQ', href: `${basePath}/faq` },
  ] : []

  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="container-custom py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-semibold text-white tracking-tight">
                ACE VOCATIONAL<br />ACADEMY
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Industry-leading institution transforming passion into profession through world-class culinary and fashion education.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/acevocationalacademy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/Acevocationalacademy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/Ace_vocational" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.tiktok.com/@ace_vocational_academy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {discipline && (
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Resources */}
          {discipline && (
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Midland House Plot C8 Road 521 Gwarinpa 11 Suit A6-B10, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+2348142980728" className="hover:text-white transition-colors">
                  +234 814 298 0728
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:Acevocationalacademy@gmail.com" className="hover:text-white transition-colors">
                  Acevocationalacademy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-6">
            <p className="text-sm">
              © {currentYear} Ace Vocational Academy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



