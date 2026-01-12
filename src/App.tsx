import { Router, useRouter } from './components/Router';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { SkipToContent } from './components/SkipToContent';
import { lazy, Suspense, useEffect } from 'react';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ApplicationPage = lazy(() => import('./pages/ApplicationPage').then((module) => ({ default: module.ApplicationPage })));
const SprintOSPage = lazy(() => import('./pages/SprintOSPage').then((module) => ({ default: module.SprintOSPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then((module) => ({ default: module.CaseStudiesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const StalworthCaseStudyPage = lazy(() =>
  import('./pages/StalworthCaseStudyPage').then((module) => ({ default: module.StalworthCaseStudyPage }))
);
const ClientPortalPage = lazy(() =>
  import('./pages/ClientPortalPage').then((module) => ({ default: module.ClientPortalPage }))
);
const SprintDashboardPage = lazy(() =>
  import('./pages/SprintDashboardPage').then((module) => ({ default: module.SprintDashboardPage }))
);
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((module) => ({ default: module.PrivacyPolicyPage }))
);
const NDAPage = lazy(() => import('./pages/NDAPage').then((module) => ({ default: module.NDAPage })));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage').then((module) => ({ default: module.ThankYouPage })));

function AppContent() {
  const { currentPath } = useRouter();

  // Route matching
  if (currentPath.startsWith('/thank-you')) {
    return (
      <div key="thank-you">
        <ThankYouPage />
        <Footer />
      </div>
    );
  }

  if (currentPath.startsWith('/about')) {
    return (
      <div key="about">
        <AboutPage />
        <Footer />
      </div>
    );
  }

  if (currentPath.startsWith('/sprintos')) {
    return (
      <div key="sprintos">
        <SprintOSPage />
        <Footer />
      </div>
    );
  }

  if (currentPath === '/case-studies/stalworth') {
    return (
      <div key="case-study-stalworth">
        <StalworthCaseStudyPage />
        <Footer />
      </div>
    );
  }

  if (currentPath.startsWith('/case-studies')) {
    return (
      <div key="case-studies">
        <CaseStudiesPage />
        <Footer />
      </div>
    );
  }

  if (currentPath.startsWith('/contact')) {
    return (
      <div key="contact">
        <ContactPage />
        <Footer />
      </div>
    );
  }

  if (currentPath.startsWith('/client-portal')) {
    return (
      <div key="client-portal">
        <ClientPortalPage />
      </div>
    );
  }

  if (currentPath.startsWith('/sprint-dashboard')) {
    return (
      <div key="sprint-dashboard">
        <SprintDashboardPage />
      </div>
    );
  }

  if (currentPath.startsWith('/privacy-policy')) {
    return (
      <div key="privacy-policy">
        <PrivacyPolicyPage />
        <Footer />
      </div>
    );
  }

  if (currentPath.startsWith('/nda')) {
    return (
      <div key="nda">
        <NDAPage />
        <Footer />
      </div>
    );
  }

  if (currentPath.startsWith('/application')) {
    return (
      <div key="application">
        <ApplicationPage />
        <Footer />
      </div>
    );
  }

  // Default to HomePage
  return (
    <div key="home">
      <HomePage />
      <Footer />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <Router>
      <SEO />
      <div className="min-h-screen">
        <SkipToContent />
        <Suspense
          fallback={
            <div
              className="flex items-center justify-center py-16"
              role="status"
              aria-live="polite"
              style={{ color: '#4B5563', fontSize: '0.95rem' }}
            >
              <p>Loading content…</p>
            </div>
          }
        >
          <AppContent />
        </Suspense>
      </div>
    </Router>
  );
}
