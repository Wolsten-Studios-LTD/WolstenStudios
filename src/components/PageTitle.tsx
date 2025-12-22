import { useEffect } from 'react';
import { useRouter } from './Router';

export function PageTitle() {
  const { currentPath } = useRouter();

  useEffect(() => {
    // Set title immediately on mount
    updateTitle(currentPath);
  }, []);

  useEffect(() => {
    // Update title whenever route changes
    updateTitle(currentPath);
  }, [currentPath]);

  const updateTitle = (path: string) => {
    let title = 'Wolsten Studios | Premium Transformation Studio';
    let description = 'Premium transformation studio building brands, systems, and digital experiences for founder-led businesses. €500k-€20m revenue. €15k-€35k positioning.';

    if (path.startsWith('/sprintos')) {
      title = 'SprintOS™ | Wolsten Studios';
      description = '7-14 day transformation sprints rebuilding your brand, website, and growth engine. For established businesses ready for their next stage.';
    } else if (path.startsWith('/about')) {
      title = 'About | Wolsten Studios';
      description = 'Meet the team behind Wolsten Studios, the premium transformation studio for founder-led businesses.';
    } else if (path.startsWith('/contact')) {
      title = 'Contact | Wolsten Studios';
      description = 'Get in touch with Wolsten Studios to discuss your business transformation.';
    } else if (path.startsWith('/application')) {
      title = 'Apply for SprintOS™ | Wolsten Studios';
      description = 'Submit your application for a SprintOS™ transformation sprint. We review applications within 48 hours.';
    } else if (path.startsWith('/case-studies')) {
      title = 'Case Study | Wolsten Studios';
      description = 'Explore our transformation work with established businesses.';
    } else if (path.startsWith('/privacy-policy')) {
      title = 'Privacy Policy | Wolsten Studios';
      description = 'Wolsten Studios privacy policy and data handling practices.';
    }

    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    // Force update by also setting it via a timeout (in case of race conditions)
    setTimeout(() => {
      document.title = title;
    }, 0);
  };

  return null;
}