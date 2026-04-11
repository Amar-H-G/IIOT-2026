import SectionTitle from '../components/SectionTitle';
import GalleryGrid from '../components/GalleryGrid';
import ScrollReveal from '../components/ScrollReveal';

const categories = [
  'All',
  'Classrooms',
  'Events',
  'Results',
  'Campus',
  'Students',
];

const images = [
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    caption: 'Interactive Smart Classroom',
    category: 'Classrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
    caption: 'Students at Annual Prize Distribution',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    caption: 'Science Laboratory Session',
    category: 'Classrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80',
    caption: 'JEE Result Celebration 2024',
    category: 'Results',
  },
  {
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
    caption: 'Campus Library & Study Zone',
    category: 'Campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80',
    caption: 'Students on Campus Grounds',
    category: 'Students',
  },
  {
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
    caption: 'Group Study Session',
    category: 'Students',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    caption: 'Orientation Day – New Batch 2024',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80',
    caption: 'Physics Lab Demonstration',
    category: 'Classrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1562516710-ba38e84ad4af?w=600&q=80',
    caption: 'NEET Results Celebration',
    category: 'Results',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    caption: 'Annual Science Symposium',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
    caption: 'Digital Library Resources',
    category: 'Campus',
  },
];

import { useState } from 'react';

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? images : images.filter((img) => img.category === active);

  return (
    <main className="pt-16">
      {/* Page Hero */}
      <section className="page-hero py-24 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 mb-5">
              Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Life at{' '}
              <span className="text-amber-300">Our Campus</span>
            </h1>
            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
              A glimpse into our world-class facilities, vibrant events, and the brilliant minds we nurture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              badge="Photo Gallery"
              title="Campus &"
              highlight="Events"
              subtitle="Browse through our facilities, celebrations, and memorable milestones."
            />
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex items-center gap-3 flex-wrap justify-center mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active === cat
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <GalleryGrid images={filtered} />
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 section-alt border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Want to See More? <span className="gradient-text">Visit Us!</span>
            </h3>
            <p className="text-slate-500 mb-6">
              Book a campus visit and speak to our counsellors to know more about our facilities.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl"
            >
              Schedule a Campus Visit
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
