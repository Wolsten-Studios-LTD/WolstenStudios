import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from './Router';
import logoImage from 'figma:asset/1f9262f184061b032424382743e6dd199dd63b34.png';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navigate } = useRouter();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="px-8 py-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ 
        backgroundColor: 'rgba(250, 250, 252, 0.9)',
        borderBottom: '1px solid rgba(235, 235, 239, 0.6)',
      }}
      aria-label="Main navigation"
    >
      <button 
        onClick={() => handleNavigate('/')} 
        className="flex items-center border-0 bg-transparent p-0 cursor-pointer" 
        aria-label="Wolsten Studios home"
      >
        <img 
          src={logoImage} 
          alt="Wolsten Studios logo" 
          className="w-auto"
          style={{ height: '32px', display: 'block' }}
        />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10 text-sm" style={{ color: '#606260', letterSpacing: '0.02em' }} role="navigation" aria-label="Primary">
        <button 
          onClick={() => handleNavigate('/case-studies')}
          className="transition-all duration-200 border-0 bg-transparent cursor-pointer" 
          style={{ color: '#606260', textDecoration: 'none' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#00A5C7';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#606260';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Case Studies
        </button>
        <button 
          onClick={() => handleNavigate('/sprintos')}
          className="transition-all duration-200 border-0 bg-transparent cursor-pointer" 
          style={{ color: '#606260', textDecoration: 'none' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#00A5C7';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#606260';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          SprintOS™
        </button>
        <button 
          onClick={() => handleNavigate('/about')}
          className="transition-all duration-200 border-0 bg-transparent cursor-pointer" 
          style={{ color: '#606260', textDecoration: 'none' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#00A5C7';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#606260';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          About
        </button>
        <button 
          onClick={() => handleNavigate('/contact')}
          className="transition-all duration-200 border-0 bg-transparent cursor-pointer" 
          style={{ color: '#606260', textDecoration: 'none' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#00A5C7';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#606260';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Contact
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 transition-opacity hover:opacity-70"
        style={{ color: '#0E0E0E' }}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 backdrop-blur-sm"
          style={{
            backgroundColor: 'rgba(250, 250, 252, 0.98)',
            borderBottom: '1px solid rgba(235, 235, 239, 0.6)',
          }}
        >
          <div className="flex flex-col px-8 py-6 space-y-6">
            <button 
              onClick={() => handleNavigate('/case-studies')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer text-left"
              style={{ color: '#606260', fontSize: '1rem', letterSpacing: '0.02em', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
                e.currentTarget.style.paddingLeft = '8px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#606260';
                e.currentTarget.style.paddingLeft = '0px';
              }}
            >
              Case Studies
            </button>
            <button 
              onClick={() => handleNavigate('/sprintos')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer text-left"
              style={{ color: '#606260', fontSize: '1rem', letterSpacing: '0.02em', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
                e.currentTarget.style.paddingLeft = '8px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#606260';
                e.currentTarget.style.paddingLeft = '0px';
              }}
            >
              SprintOS™
            </button>
            <button 
              onClick={() => handleNavigate('/about')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer text-left"
              style={{ color: '#606260', fontSize: '1rem', letterSpacing: '0.02em', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
                e.currentTarget.style.paddingLeft = '8px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#606260';
                e.currentTarget.style.paddingLeft = '0px';
              }}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigate('/contact')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer text-left"
              style={{ color: '#606260', fontSize: '1rem', letterSpacing: '0.02em', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
                e.currentTarget.style.paddingLeft = '8px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#606260';
                e.currentTarget.style.paddingLeft = '0px';
              }}
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavigate('/application')}
              className="transition-all duration-200 px-5 py-3 text-center border-0 cursor-pointer"
              style={{ 
                color: '#FAFAFC',
                backgroundColor: '#0E0E0E',
                fontSize: '1rem', 
                letterSpacing: '0.01em', 
                textDecoration: 'none',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00A5C7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0E0E0E';
              }}
            >
              Apply for SprintOS™
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}