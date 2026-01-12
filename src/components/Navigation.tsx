import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from './Router';
import { WolstenIcon } from './logos/WolstenIcon';

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
        <WolstenIcon className="h-8 w-auto block" />
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
          Work
        </button>
        <button 
          onClick={() => {
            handleNavigate('/');
            setTimeout(() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
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
          Services
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
          className="transition-all duration-200 border-0 bg-transparent cursor-pointer px-6 py-3 rounded-full" 
          style={{ 
            backgroundColor: '#00A5C7',
            color: '#FAFAFC',
            boxShadow: '0 4px 12px rgba(0, 165, 199, 0.25)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0090AF';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 165, 199, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#00A5C7';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 165, 199, 0.25)';
          }}
        >
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 border-0 bg-transparent cursor-pointer"
        style={{ color: '#2D3436' }}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
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
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-8 py-6 flex flex-col gap-6">
            <button 
              onClick={() => handleNavigate('/case-studies')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer text-left" 
              style={{ color: '#606260', fontSize: '1rem' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#606260';
              }}
            >
              Work
            </button>
            <button 
              onClick={() => {
                handleNavigate('/');
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                setIsMenuOpen(false);
              }}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer text-left" 
              style={{ color: '#606260', fontSize: '1rem' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#606260';
              }}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigate('/about')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer text-left" 
              style={{ color: '#606260', fontSize: '1rem' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00A5C7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#606260';
              }}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigate('/contact')}
              className="transition-all duration-200 border-0 bg-transparent cursor-pointer px-6 py-3 rounded-full text-center" 
              style={{ 
                backgroundColor: '#00A5C7',
                color: '#FAFAFC',
                boxShadow: '0 4px 12px rgba(0, 165, 199, 0.25)',
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}