import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Horizon Digital',
    category: 'Brand Identity & Web Platform',
    image: 'https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjUwMDYyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '2',
    title: 'Vesta Systems',
    category: 'Design System & Strategy',
    image: 'https://images.unsplash.com/photo-1764383381195-5daa5902c3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZGluZyUyMGlkZW50aXR5fGVufDF8fHx8MTc2NTA1MTI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '3',
    title: 'Apex Analytics',
    category: 'Product & Interface Design',
    image: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NTA1MTI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '4',
    title: 'Construct Capital',
    category: 'Brand & Digital Presence',
    image: 'https://images.unsplash.com/photo-1614862876418-99251b905882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjUwNTEyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-32 px-8" style={{ backgroundColor: '#0E0E0E' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 
            className="mb-4"
            style={{ 
              color: '#FAFAFC',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
            }}
          >
            Selected Work
          </h2>
          <p style={{ color: '#949797', fontSize: '1.125rem' }}>
            Case studies from our recent projects
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <a
              key={study.id}
              href={`#case-${study.id}`}
              className="group cursor-pointer"
            >
              <div className="mb-6 overflow-hidden rounded-lg" style={{ backgroundColor: '#1A1A1A' }}>
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 
                  className="mb-2 transition-colors"
                  style={{ 
                    color: '#FAFAFC',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                  }}
                >
                  {study.title}
                </h3>
                <p style={{ color: '#949797', fontSize: '0.95rem' }}>
                  {study.category}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="#all-work"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{ 
              color: '#FAFAFC',
              fontSize: '0.95rem',
              letterSpacing: '0.02em',
            }}
          >
            View All Projects
            <span style={{ fontSize: '1.25rem' }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}