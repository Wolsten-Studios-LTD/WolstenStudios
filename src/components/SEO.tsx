import { useEffect } from 'react';
import { useRouter } from './Router';

interface SEOConfig {
  title: string;
  description: string;
  type?: 'website' | 'article';
}

const BASE_URL = 'https://www.wolstenstudios.com';
const SOCIAL_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'Wolsten Studios';

const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Wolsten Studios | Premium Transformation Studio for Established Businesses',
    description: 'Transformation studio rebuilding brand, digital, and growth foundations for businesses €500k–€20m revenue. SprintOS™ transforms your infrastructure in 7–14 days.',
    type: 'website',
  },
  sprintos: {
    title: 'SprintOS™ — 7-14 Day Transformation Sprint | Wolsten Studios',
    description: 'SprintOS™ rebuilds brand architecture, digital experience, and growth foundations in 7–14 days. Complete transformation for established businesses ready to scale.',
    type: 'website',
  },
  about: {
    title: 'About Wolsten Studios — Transformation Studio for Founder-Led Businesses',
    description: 'Founded to rebuild the architecture of founder-led businesses through brand strategy, digital systems, and focused execution. Built for clarity, speed, and scale.',
    type: 'website',
  },
  contact: {
    title: 'Contact Wolsten Studios — Submit Inquiry for Business Transformation',
    description: 'Get in touch with Wolsten Studios to discuss your brand, digital, and growth transformation. We respond to all serious inquiries within 48 hours.',
    type: 'website',
  },
  application: {
    title: 'Apply for SprintOS™ Transformation Sprint | Wolsten Studios',
    description: 'Submit your SprintOS™ application. We review all applications within 48 hours and respond to aligned businesses ready for transformation.',
    type: 'website',
  },
  'case-study': {
    title: 'Case Studies — Transformation Projects | Wolsten Studios',
    description: 'Explore Wolsten Studios transformation work with established businesses across energy, professional services, and technology sectors.',
    type: 'article',
  },
  'privacy-policy': {
    title: 'Privacy Policy | Wolsten Studios',
    description: 'Wolsten Studios privacy policy and data handling practices for website visitors and clients.',
    type: 'website',
  },
  nda: {
    title: 'Non-Disclosure Agreement | Wolsten Studios',
    description: 'Wolsten Studios standard non-disclosure agreement for confidential business discussions and transformation projects.',
    type: 'website',
  },
  'client-portal': {
    title: 'Client Portal | Wolsten Studios',
    description: 'Secure client portal to access project updates, deliverables, and collaboration tools from Wolsten Studios.',
    type: 'website',
  },
  'sprint-dashboard': {
    title: 'Sprint Dashboard | Wolsten Studios',
    description: 'Live view of SprintOS™ progress, milestones, and deliverables tracked by Wolsten Studios.',
    type: 'website',
  },
  'buns-and-guns-proposal': {
    title: 'Buns & Guns Proposal | Wolsten Studios',
    description: 'Custom Buns & Guns proposal prepared by Wolsten Studios, including scope, deliverables, and timelines.',
    type: 'website',
  },
  'thank-you': {
    title: 'Thank You | Wolsten Studios',
    description: 'Thanks for reaching out to Wolsten Studios. We will respond to your inquiry shortly.',
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
    
    if (path.startsWith('/sprintos')) {
      config = seoConfigs.sprintos;
    } else if (path.startsWith('/about')) {
      config = seoConfigs.about;
    } else if (path.startsWith('/contact')) {
      config = seoConfigs.contact;
    } else if (path.startsWith('/application')) {
      config = seoConfigs.application;
    } else if (path.startsWith('/case-studies')) {
      config = seoConfigs['case-study'];
    } else if (path.startsWith('/privacy-policy')) {
      config = seoConfigs['privacy-policy'];
    } else if (path.startsWith('/nda')) {
      config = seoConfigs['nda'];
    } else if (path.startsWith('/client-portal')) {
      config = seoConfigs['client-portal'];
    } else if (path.startsWith('/sprint-dashboard')) {
      config = seoConfigs['sprint-dashboard'];
    } else if (path.startsWith('/buns-and-guns-proposal')) {
      config = seoConfigs['buns-and-guns-proposal'];
    } else if (path.startsWith('/thank-you')) {
      config = seoConfigs['thank-you'];
    }

    const normalizedPath = path === '/' ? '' : path.replace(/^\/+/, '');
    const fullUrl = normalizedPath ? `${BASE_URL}/${normalizedPath}` : BASE_URL;

    // Update document title
    document.title = config.title;
    
    // Update meta description
    updateMetaTag('name', 'description', config.description);
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', config.title);
    updateMetaTag('property', 'og:description', config.description);
    updateMetaTag('property', 'og:url', fullUrl);
    updateMetaTag('property', 'og:type', config.type || 'website');
    updateMetaTag('property', 'og:site_name', SITE_NAME);
    updateMetaTag('property', 'og:image', SOCIAL_IMAGE);
    updateMetaTag('property', 'og:image:width', '1200');
    updateMetaTag('property', 'og:image:height', '630');
    
    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', config.title);
    updateMetaTag('name', 'twitter:description', config.description);
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:image', SOCIAL_IMAGE);

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
