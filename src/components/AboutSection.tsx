const credentials = [
  { id: '1', label: 'Years Experience', value: '12+' },
  { id: '2', label: 'Projects Delivered', value: '200+' },
  { id: '3', label: 'Client Retention', value: '94%' },
  { id: '4', label: 'Team Members', value: '18' },
];

export function AboutSection() {
  return (
    <section className="py-32 px-8" style={{ backgroundColor: '#0E0E0E' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: About Content */}
          <div>
            <h2 
              className="mb-6"
              style={{ 
                color: '#FAFAFC',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              Built for companies ready to{' '}
              <span style={{ color: '#2E584E' }}>lead their market</span>
            </h2>
            <p 
              className="mb-6"
              style={{ 
                color: '#949797',
                fontSize: '1.125rem',
                lineHeight: '1.7',
              }}
            >
              We work with ambitious founders and marketing leaders who understand that strong brands aren&apos;t accidents — they&apos;re systems.
            </p>
            <p 
              style={{ 
                color: '#949797',
                fontSize: '1.125rem',
                lineHeight: '1.7',
              }}
            >
              Every project is built on strategy, executed with precision, and designed to scale as you grow.
            </p>
          </div>

          {/* Right: Credentials Grid */}
          <div className="grid grid-cols-2 gap-8">
            {credentials.map((item) => (
              <div 
                key={item.id}
                className="p-8 rounded-lg"
                style={{ 
                  backgroundColor: '#1A1A1A',
                  border: '1px solid #2C2D2D',
                }}
              >
                <div 
                  className="mb-2"
                  style={{ 
                    color: '#2E584E',
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.value}
                </div>
                <div 
                  style={{ 
                    color: '#949797',
                    fontSize: '0.875rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}