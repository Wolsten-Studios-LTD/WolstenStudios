import { useState, useEffect, ReactNode, createContext, useContext } from 'react';

interface RouterContextType {
  currentPath: string; // always "/..."
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

interface RouterProps {
  children: ReactNode;
}

const normalizePath = (input: string) => {
  const path = (input || '').trim();

  if (!path || path === '#') return '/';
  if (path.startsWith('#/')) return path.slice(1);
  if (path.startsWith('#')) return '/' + path.slice(1).replace(/^\/+/, '');
  if (path.startsWith('/')) return path;
  return '/' + path.replace(/^\/+/, '');
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
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    // Convert legacy hash URLs to path-based URLs
    if (window.location.hash.startsWith('#/')) {
      const normalized = normalizePath(window.location.hash);
      window.history.replaceState({}, '', normalized);
      setCurrentPath(normalized);
    }
  }, []);

  useEffect(() => {
    const sync = () => setCurrentPath(normalizePath(window.location.pathname));

    const handlePopState = () => {
      sync();
      scrollToTop();
    };

    sync();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const gtag = (window as any).gtag;
    if (!gtag) return;

    const pagePath = currentPath || '/';
    const config = { page_path: pagePath };

    gtag('config', 'G-C1NXZVQVKD', config);
    gtag('config', 'AW-17799960396', config);
    gtag('event', 'page_view', { page_path: pagePath });
  }, [currentPath]);

  const navigate = (path: string) => {
    const next = normalizePath(path);

    if (window.location.pathname !== next) {
      window.history.pushState({}, '', next);
      setCurrentPath(next);
      scrollToTop();
    } else {
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
