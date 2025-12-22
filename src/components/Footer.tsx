import { useRouter } from './Router';
import { WolstenIconWhite } from './logos/WolstenIconWhite';

const footerLinks = {
  company: [
    { label: 'Work', href: '/' },
    { label: 'SprintOS™', href: '/sprintos' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  connect: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/110592070/' },
  ],
};

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer 
      style={{ 
        backgroundColor: '#0A0A0A',
        color: '#FAFAFC' 
      }}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <WolstenIconWhite style={{ height: '40px', width: 'auto', display: 'block' }} />
            </div>
            <p style={{ color: '#949797', fontSize: '0.938rem', lineHeight: '1.7', maxWidth: '400px' }}>
              Premium transformation studio building brands, systems, and digital experiences for founder-led businesses.
            </p>
          </div>

          {/* Links */}
          <nav className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" aria-label="Footer navigation">
            <div>
              <h4 
                className="mb-6"
                style={{ 
                  color: '#FAFAFC',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Pages
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.href)}
                      className="transition-all duration-200 border-0 bg-transparent cursor-pointer text-left p-0"
                      style={{ 
                        color: '#949797',
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#00A5C7';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#949797';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 
                className="mb-6"
                style={{ 
                  color: '#FAFAFC',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Connect
              </h4>
              <ul className="space-y-3">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-all duration-200"
                      style={{ 
                        color: '#949797',
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#00A5C7';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#949797';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid #2C2D2D' }}
        >
          <div style={{ color: '#606260', fontSize: '0.875rem' }}>
            © 2025 Wolsten Studios. All rights reserved.
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => navigate('/privacy-policy')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer p-0"
              style={{ 
                color: '#949797', 
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#949797';
              }}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => navigate('/nda')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer p-0"
              style={{ 
                color: '#949797', 
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#949797';
              }}
            >
              NDA
            </button>
            <button 
              onClick={() => navigate('/buns-and-guns-proposal')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer p-0"
              style={{ 
                color: '#949797', 
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#949797';
              }}
            >
              B&G
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
