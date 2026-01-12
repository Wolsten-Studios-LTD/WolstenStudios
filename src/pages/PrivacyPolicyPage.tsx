export function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div style={{ backgroundColor: '#FAFAFC', minHeight: '100vh' }}>
      <main id="main-content">
        <div className="max-w-4xl mx-auto px-8 py-24">
          {/* Header */}
          <div className="mb-16">
            <h1 style={{ 
              fontSize: '3.5rem', 
              color: '#0E0E0E', 
              marginBottom: '16px', 
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>
              Privacy Policy
            </h1>
            <p style={{ color: '#949797', fontSize: '1rem' }}>
              Last updated: {currentDate}
            </p>
          </div>

          {/* Intro */}
          <div className="mb-12">
            <p style={{ color: '#606260', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
              Wolsten Studios (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the privacy, confidentiality, and security of all clients, prospects, and visitors to our website. This policy explains how we collect, use, store, and protect your personal information.
            </p>
            <p style={{ color: '#606260', fontSize: '1.05rem', lineHeight: '1.8' }}>
              We work with founders, leaders, and businesses where confidentiality is essential — particularly during strategic transformation projects. Discretion is a core part of how we operate.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              1. Information We Collect
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              We may collect the following types of information:
            </p>

            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#0E0E0E', 
              marginBottom: '12px', 
              marginTop: '24px',
              fontWeight: 500
            }}>
              1.1 Information you provide directly
            </h3>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Name, email address, phone number</li>
              <li>Business name, role, and project details</li>
              <li>Information shared through enquiry forms</li>
              <li>Information shared during discovery calls, strategy sessions, or project onboarding</li>
              <li>Files, documents, or assets submitted for project work</li>
            </ul>

            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#0E0E0E', 
              marginBottom: '12px', 
              marginTop: '24px',
              fontWeight: 500
            }}>
              1.2 Project-related information
            </h3>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '12px' }}>
              During SprintOS™ engagements, we may collect business-specific information such as:
            </p>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Brand documents and internal materials</li>
              <li>Operational workflows</li>
              <li>Website data and analytics</li>
              <li>Messaging, strategy, or positioning notes</li>
              <li>CRM access (if required and explicitly authorised)</li>
            </ul>

            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#0E0E0E', 
              marginBottom: '12px', 
              marginTop: '24px',
              fontWeight: 500
            }}>
              1.3 Automatically collected information
            </h3>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '12px' }}>
              When visiting our website, we may automatically collect:
            </p>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px' }}>
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Usage data</li>
              <li>Cookies (for analytics, performance, and security purposes)</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              2. How We Use Your Information
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              We use your information to:
            </p>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Respond to enquiries</li>
              <li>Conduct discovery and scoping for potential projects</li>
              <li>Deliver SprintOS™ or other services</li>
              <li>Improve our website, systems, and client experience</li>
              <li>Maintain internal project documentation</li>
              <li>Send essential updates or service-related emails</li>
              <li>Comply with legal or regulatory requirements (if applicable)</li>
            </ul>
            <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', marginBottom: '8px', fontWeight: 500 }}>
              We do not sell your data.<br />
              We do not share your data with third parties for marketing.
            </p>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8' }}>
              Any information shared with collaborators (e.g., trusted technical partners) is only done with your explicit consent and solely for the purpose of completing your project.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              3. Confidentiality & Discretion
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              We understand that many clients operate in sensitive markets, competitive industries, or require confidentiality around strategy, systems, and transformation work.
            </p>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              Wolsten Studios operates under strict confidentiality principles:
            </p>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
              <li>All information shared is treated as private and confidential.</li>
              <li>SprintOS™ project details are not shared publicly without explicit permission.</li>
              <li>Case studies, screenshots, or visuals are only published after receiving written approval.</li>
              <li>If required, we will sign NDAs prior to engagement.</li>
            </ul>
            <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              Your strategic information remains yours.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              4. Data Storage & Security
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '12px' }}>
              We store data using secure, industry-standard platforms such as:
            </p>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Google Workspace</li>
              <li>Notion</li>
              <li>GitHub</li>
              <li>Encrypted cloud storage</li>
            </ul>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '12px' }}>
              We take reasonable steps to protect your information from unauthorised access, loss, or misuse, including:
            </p>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px' }}>
              <li>Secure password protocols</li>
              <li>Role-based access to project material</li>
              <li>Encrypted communication platforms</li>
              <li>Immediate removal of access for completed projects</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              5. How Long We Keep Your Data
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              We only keep your personal or project data for as long as necessary to:
            </p>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Deliver our services</li>
              <li>Maintain internal records</li>
              <li>Meet legal, accounting, or reporting requirements</li>
            </ul>
            <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              You may request deletion of your information at any time.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              6. Your Rights
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              Depending on your jurisdiction (e.g., EU/UK GDPR, Cyprus law), you may have the right to:
            </p>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Access your data</li>
              <li>Request corrections</li>
              <li>Request deletion (&quot;right to be forgotten&quot;)</li>
              <li>Withdraw consent</li>
              <li>Restrict processing</li>
              <li>Request data portability</li>
            </ul>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '8px' }}>
              To exercise any of these rights, email us at:
            </p>
            <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              📩 dan.wolstenholme@wolstenstudios.com
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              7. Third-Party Tools & Integrations
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '12px' }}>
              We may use third-party tools for analytics, project delivery, or communication, including:
            </p>
            <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
              <li>GitHub</li>
              <li>Notion</li>
              <li>Vercel (for hosting)</li>
              <li>Google Analytics</li>
            </ul>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              Where these tools process data, they do so in accordance with their own privacy policies.
            </p>
            <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              We only use reputable, secure tools that comply with GDPR and international privacy standards.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              8. International Transfers
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              As we work with founders across different countries, your data may be processed outside your local jurisdiction.
            </p>
            <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              We ensure any data transfers comply with GDPR and international privacy regulations through approved safeguard mechanisms.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              9. Updates to This Policy
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              We may update this Privacy Policy to reflect changes in our services, systems, or legal obligations.
            </p>
            <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              The &quot;Last Updated&quot; date will reflect any changes.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 style={{ 
              fontSize: '2rem', 
              color: '#0E0E0E', 
              marginBottom: '24px', 
              letterSpacing: '-0.01em' 
            }}>
              10. Contact
            </h2>
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              For privacy enquiries, data requests, or concerns, contact:
            </p>
            <div style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              📩 dan.wolstenholme@wolstenstudios.com<br />
              🌍 wolstenstudios.com
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}