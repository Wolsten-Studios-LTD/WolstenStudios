import { useEffect } from 'react';
import { useRouter } from './Router';

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
}

const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Wolsten Studios | Premium Transformation Studio for Established Businesses',
    description: 'Transformation studio rebuilding brand, digital, and growth foundations for businesses €500k–€20m revenue. SprintOS™ transforms your infrastructure in 7–14 days.',
    path: '',
    type: 'website',
  },
  sprintos: {
    title: 'SprintOS™ — 7-14 Day Transformation Sprint | Wolsten Studios',
    description: 'SprintOS™ rebuilds brand architecture, digital experience, and growth foundations in 7–14 days. Complete transformation for established businesses ready to scale.',
    path: 'sprintos',
    type: 'website',
  },
  about: {
    title: 'About Wolsten Studios — Transformation Studio for Founder-Led Businesses',
    description: 'Founded to rebuild the architecture of founder-led businesses through brand strategy, digital systems, and focused execution. Built for clarity, speed, and scale.',
    path: 'about',
    type: 'website',
  },
  contact: {
    title: 'Contact Wolsten Studios — Submit Inquiry for Business Transformation',
    description: 'Get in touch with Wolsten Studios to discuss your brand, digital, and growth transformation. We respond to all serious inquiries within 48 hours.',
    path: 'contact',
    type: 'website',
  },
  application: {
    title: 'Apply for SprintOS™ Transformation Sprint | Wolsten Studios',
    description: 'Submit your SprintOS™ application. We review all applications within 48 hours and respond to aligned businesses ready for transformation.',
    path: 'application',
    type: 'website',
  },
  'case-study': {
    title: 'Case Studies — Transformation Projects | Wolsten Studios',
    description: 'Explore Wolsten Studios transformation work with established businesses across energy, professional services, and technology sectors.',
    path: 'case-study',
    type: 'article',
  },
  'brand-guide': {
    title: 'Brand Guidelines — Wolsten Studios Visual Identity',
    description: 'Wolsten Studios brand guidelines, visual identity system, and design standards.',
    path: 'brand-guide',
    type: 'website',
  },
  'privacy-policy': {
    title: 'Privacy Policy | Wolsten Studios',
    description: 'Wolsten Studios privacy policy and data handling practices for website visitors and clients.',
    path: 'privacy-policy',
    type: 'website',
  },
  nda: {
    title: 'Non-Disclosure Agreement | Wolsten Studios',
    description: 'Wolsten Studios standard non-disclosure agreement for confidential business discussions and transformation projects.',
    path: 'nda',
    type: 'website',
  },
};

export function SEO() {
  const { currentPath } = useRouter();

  useEffect(() => {
    updateSEO(currentPath);
  }, [currentPath]);

  const updateSEO = (path: string) => {
    // Determine which config to use
    let config = seoConfigs.home;
    
    if (path.startsWith('#/sprintos')) {
      config = seoConfigs.sprintos;
    } else if (path.startsWith('#/about')) {
      config = seoConfigs.about;
    } else if (path.startsWith('#/contact')) {
      config = seoConfigs.contact;
    } else if (path.startsWith('#/application')) {
      config = seoConfigs.application;
    } else if (path.startsWith('#/case-')) {
      config = seoConfigs['case-study'];
    } else if (path.startsWith('#/brand-guide')) {
      config = seoConfigs['brand-guide'];
    } else if (path.startsWith('#/privacy-policy')) {
      config = seoConfigs['privacy-policy'];
    } else if (path.startsWith('#/nda')) {
      config = seoConfigs.nda;
    }

    const baseUrl = 'https://www.wolstenstudios.com';
    const fullUrl = config.path ? `${baseUrl}/#/${config.path}` : baseUrl;

    // Update document title
    document.title = config.title;
    
    // Update meta description
    updateMetaTag('name', 'description', config.description);
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', config.title);
    updateMetaTag('property', 'og:description', config.description);
    updateMetaTag('property', 'og:url', fullUrl);
    updateMetaTag('property', 'og:type', config.type || 'website');
    
    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', config.title);
    updateMetaTag('name', 'twitter:description', config.description);

    // Update canonical link
    updateCanonicalLink(fullUrl);
  };

  const updateMetaTag = (attribute: string, name: string, content: string) => {
    const selector = `meta[${attribute}="${name}"]`;
    let element = document.querySelector(selector);
    
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };

  const updateCanonicalLink = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  };

  return null;
}