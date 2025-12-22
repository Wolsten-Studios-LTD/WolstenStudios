const processSteps = [
  {
    id: '1',
    number: '01',
    title: 'Discover',
    description: 'We immerse ourselves in your business, market, and vision to uncover strategic opportunities and define clear objectives.',
  },
  {
    id: '2',
    number: '02',
    title: 'Design',
    description: 'We craft visual systems, brand identities, and digital experiences that communicate your unique value with precision.',
  },
  {
    id: '3',
    number: '03',
    title: 'Develop',
    description: 'We build scalable design systems and websites engineered for performance, flexibility, and long-term growth.',
  },
  {
    id: '4',
    number: '04',
    title: 'Deploy',
    description: 'We launch with confidence, providing documentation, training, and ongoing support to ensure seamless adoption.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-32 px-8" style={{ backgroundColor: '#0E0E0E' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 
            className="mb-4"
            style={{ 
              color: '#FAFAFC',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
            }}
          >
            Our Process
          </h2>
          <p style={{ color: '#949797', fontSize: '1.125rem' }}>
            A structured approach to building exceptional brands
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connecting Line */}
              {index < processSteps.length - 1 && (
                <div 
                  className="hidden md:block absolute top-12 left-full w-full h-px"
                  style={{ backgroundColor: '#2C2D2D' }}
                />
              )}
              
              <div className="relative">
                <div 
                  className="mb-6 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#2E584E',
                    color: '#FAFAFC',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {step.number}
                </div>
                <h3 
                  className="mb-3"
                  style={{ 
                    color: '#FAFAFC',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#949797', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}