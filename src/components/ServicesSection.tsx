const services = [
  {
    id: '1',
    number: '01',
    title: 'Design',
    description: 'Brand identities, visual systems, and interfaces built for clarity and impact.',
  },
  {
    id: '2',
    number: '02',
    title: 'Strategy',
    description: 'Market positioning, brand architecture, and strategic frameworks that guide growth.',
  },
  {
    id: '3',
    number: '03',
    title: 'Systems',
    description: 'Scalable design systems and component libraries that ensure consistency.',
  },
  {
    id: '4',
    number: '04',
    title: 'Websites',
    description: 'High-performance digital experiences optimized for conversion and engagement.',
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 px-8" style={{ backgroundColor: '#0E0E0E' }}>
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
            Services
          </h2>
          <p style={{ color: '#949797', fontSize: '1.125rem' }}>
            End-to-end solutions for modern brands
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: '#2C2D2D' }}>
          {services.map((service) => (
            <div
              key={service.id}
              className="p-12 transition-all hover:bg-opacity-80"
              style={{ backgroundColor: '#0E0E0E' }}
            >
              <div className="mb-6" style={{ color: '#2E584E', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
                {service.number}
              </div>
              <h3 
                className="mb-4"
                style={{ 
                  color: '#FAFAFC',
                  fontSize: '2rem',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}
              >
                {service.title}
              </h3>
              <p style={{ color: '#949797', fontSize: '1rem', lineHeight: '1.7' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}