import { Router, useRouter } from './components/Router';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { SprintOSPage } from './pages/SprintOSPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';
import { StalworthCaseStudyPage } from './pages/StalworthCaseStudyPage';
import { ClientPortalPage } from './pages/ClientPortalPage';
import { SprintDashboardPage } from './pages/SprintDashboardPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NDAPage } from './pages/NDAPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { BunsAndGunsProposalPage } from './pages/BunsAndGunsProposalPage';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { SkipToContent } from './components/SkipToContent';
import { useEffect } from 'react';

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

  if (currentPath.startsWith('/buns-and-guns-proposal')) {
    return (
      <div key="buns-and-guns-proposal">
        <BunsAndGunsProposalPage />
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
      <div className="min-h-screen" role="application">
        <SkipToContent />
        <AppContent />
      </div>
    </Router>
  );
}