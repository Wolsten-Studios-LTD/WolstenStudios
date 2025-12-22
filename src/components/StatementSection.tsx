export function StatementSection() {
  return (
    <section className="py-32 px-8" style={{ backgroundColor: '#0E0E0E' }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            style={{ 
              color: '#FAFAFC',
              fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
              lineHeight: '1.4',
              letterSpacing: '-0.01em',
              fontWeight: 300,
            }}
          >
            We partner with ambitious companies to build{' '}
            <span style={{ color: '#2E584E', fontWeight: 400 }}>brand systems</span>{' '}
            that drive clarity, consistency, and growth across every touchpoint.
          </p>
        </div>
      </div>
    </section>
  );
}