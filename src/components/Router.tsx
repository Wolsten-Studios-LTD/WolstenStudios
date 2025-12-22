import { useState, useEffect, ReactNode, createContext, useContext } from 'react';

interface RouterContextType {
  currentPath: string; // always "#/..."
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

interface RouterProps {
  children: ReactNode;
}

const normalizeHash = (input: string) => {
  const hash = (input || '').trim();

  if (!hash || hash === '#') return '#/';
  if (hash.startsWith('#/')) return hash;
  if (hash.startsWith('#')) return '#/' + hash.slice(1).replace(/^\/+/, '');
  if (hash.startsWith('/')) return '#' + hash;
  return '#/' + hash;
};

const scrollToTop = () => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  });
};

export function Router({ children }: RouterProps) {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizeHash(window.location.hash)
  );

  useEffect(() => {
    const sync = () => setCurrentPath(normalizeHash(window.location.hash));

    const handleHashChange = () => {
      sync();
      scrollToTop();
    };

    // Critical: sync immediately on mount
    sync();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: currentPath,
      });
    }
  }, [currentPath]);

  const navigate = (path: string) => {
    const next = normalizeHash(path);

    if (window.location.hash !== next) {
      window.location.hash = next;
    } else {
      // Same-hash navigation does not fire hashchange
      setCurrentPath(next);
      scrollToTop();
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router component');
  }
  return context;
}