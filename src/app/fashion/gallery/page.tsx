'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { PageHeader } from '@/components/shared/PageHeader'

export default function GalleryPage() {
  // Gallery categories
  const categories = ['All', 'Student Collections', 'Runway Shows', 'Design Studio', 'Facilities', 'Events']

  // Gallery items with real images
  const galleryItems = [
    { id: 1, category: 'Student Collections', title: 'Fashion Design Excellence', aspect: 'portrait', image: '/fashion-1.png' },
    { id: 2, category: 'Runway Shows', title: 'Creative Design in Action', aspect: 'landscape', image: '/fashion-2.png' },
    { id: 3, category: 'Design Studio', title: 'Professional Fashion Studios', aspect: 'square', image: '/fashion-gallery.jpeg' },
    { id: 4, category: 'Student Collections', title: 'Avant-Garde Design', aspect: 'portrait' },
    { id: 5, category: 'Facilities', title: 'Professional Sewing Studio', aspect: 'landscape' },
    { id: 6, category: 'Runway Shows', title: 'Graduate Showcase 2024', aspect: 'landscape' },
    { id: 7, category: 'Student Collections', title: 'Sustainable Fashion Line', aspect: 'portrait' },
    { id: 8, category: 'Events', title: 'Industry Designer Talk', aspect: 'square' },
    { id: 9, category: 'Design Studio', title: 'Draping Techniques Class', aspect: 'landscape' },
    { id: 10, category: 'Student Collections', title: 'Evening Wear Collection', aspect: 'portrait' },
    { id: 11, category: 'Facilities', title: 'Digital Design Lab', aspect: 'square' },
    { id: 12, category: 'Runway Shows', title: 'Lagos Fashion Week Feature', aspect: 'landscape' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <PageHeader
            subtitle="Gallery"
            title="Creativity in Motion"
            description="Explore our design studios, student collections, runway shows, and the creative energy of our fashion community."
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-neutral-200 sticky top-20 bg-white z-40">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 text-sm font-medium text-neutral-600 hover:text-fashion-600 hover:bg-fashion-50 rounded-sm transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                  item.aspect === 'portrait' ? 'row-span-2' : item.aspect === 'landscape' ? 'col-span-1' : ''
                }`}
              >
                {/* Image or Placeholder */}
                <div className={`relative ${
                  item.aspect === 'portrait' ? 'aspect-[3/4]' : item.aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'
                }`}>
                  {'image' in item && item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-fashion-100 to-fashion-200 flex items-center justify-center">
                      <p className="text-fashion-400 text-sm font-medium text-center px-4">
                        [{item.title}]
                      </p>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs text-fashion-400 font-medium uppercase tracking-wider mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Images
            </button>
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
            <h2 className="text-display-sm font-semibold mb-6">
              Experience It Yourself
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a studio tour and see our world-class facilities in person.
            </p>
            <button className="bg-white text-fashion-600 hover:bg-neutral-50 btn-base">
              Book a Tour
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}




