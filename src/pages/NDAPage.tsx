export function NDAPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div style={{ backgroundColor: '#FAFAFC', minHeight: '100vh' }}>
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
            Confidentiality & Non-Disclosure Agreement
          </h1>
          <p style={{ color: '#949797', fontSize: '1rem' }}>
            Last updated: {currentDate}
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12">
          <p style={{ color: '#606260', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
            This Confidentiality & Non-Disclosure Agreement (&quot;Agreement&quot;) is between:
          </p>
          <p style={{ color: '#0E0E0E', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '8px', fontWeight: 500 }}>
            Wolsten Studios (&quot;Consultant&quot;)<br />
            and<br />
            You / Your Company (&quot;Client&quot;)
          </p>
          <p style={{ color: '#606260', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Together, &quot;the Parties&quot;.
          </p>
          <p style={{ color: '#606260', fontSize: '1.05rem', lineHeight: '1.8' }}>
            This Agreement outlines how confidential information will be handled during all discussions, discovery calls, consultations, and any SprintOS™ transformation work.
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
            1. Definition of Confidential Information
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            &quot;Confidential Information&quot; includes any non-public information shared by either party, including but not limited to:
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Business plans, strategy, and positioning</li>
            <li>Financial information and revenue</li>
            <li>Brand assets, messaging, and internal documents</li>
            <li>Client lists, processes, and operational systems</li>
            <li>Access to CRM, tools, or internal platforms</li>
            <li>Website analytics, performance data, or IP</li>
            <li>Any material shared verbally, visually, or in writing</li>
          </ul>
          <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
            Confidential Information also includes insights, frameworks, or methodologies shared by Wolsten Studios during consultations or delivery.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#0E0E0E', 
            marginBottom: '24px', 
            letterSpacing: '-0.01em' 
          }}>
            2. Obligations of the Parties
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Both parties agree to:
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Keep all Confidential Information strictly confidential</li>
            <li>Not disclose it to outside parties without written permission</li>
            <li>Use the information only for the purpose of evaluating or delivering the project</li>
            <li>Take reasonable steps to protect the information from unauthorised access</li>
          </ul>
          <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
            Both parties operate under a professional duty of discretion.
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
            3. Project Materials & Deliverables
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            During SprintOS™ or related work, the Client may provide sensitive assets. Wolsten Studios agrees:
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Not to share project details publicly without approval</li>
            <li>Not to publish screenshots, results, or case studies without written permission</li>
            <li>To treat all transformation work as confidential unless explicitly cleared for release</li>
          </ul>
          <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
            If Client approves a case study or public mention, only the agreed-upon information will be used.
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
            4. Exclusions
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Information is not considered confidential if it:
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px' }}>
            <li>Is already publicly available</li>
            <li>Was known to the receiving party prior to disclosure</li>
            <li>Is independently developed without access to the other party&apos;s confidential information</li>
            <li>Is required to be disclosed by law or government order (with notice provided)</li>
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
            5. Ownership of Information
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Each party retains full ownership of its own Confidential Information.
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>SprintOS™ methodologies, frameworks, and intellectual property remain the exclusive property of Wolsten Studios.</li>
            <li>Client brand assets, systems, and content remain the exclusive property of the Client.</li>
          </ul>
          <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
            Nothing in this Agreement transfers ownership of intellectual property.
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
            6. Term and Duration
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            This Agreement becomes effective immediately upon:
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Visiting the website</li>
            <li>Booking a call</li>
            <li>Engaging in any consultation</li>
            <li>Beginning any SprintOS™ discovery session</li>
            <li>Starting any form of project engagement</li>
          </ul>
          <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', marginBottom: '8px', fontWeight: 500 }}>
            Confidentiality obligations last for five (5) years from the date of disclosure.
          </p>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8' }}>
            For certain assets (e.g., proprietary systems or trade secrets), obligations may continue indefinitely.
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
            7. No Publicity Without Permission
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Wolsten Studios will not:
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Announce the Client as a customer</li>
            <li>Publicly reference the partnership</li>
            <li>Publish visuals, screenshots, or outcomes</li>
            <li>Share the SprintOS™ work publicly</li>
          </ul>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '8px' }}>
            unless explicit written permission is provided.
          </p>
          <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
            This protects high-level founders, private companies, regulated businesses, and anyone who needs complete discretion.
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
            8. Return or Destruction of Materials
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Upon request, each party will:
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Delete confidential materials</li>
            <li>Revoke access credentials</li>
            <li>Remove shared files or assets</li>
            <li>Confirm deletion in writing</li>
          </ul>
          <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
            Wolsten Studios routinely deletes unused access after project completion for security.
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
            9. Liability
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '8px' }}>
            Both parties agree to act in good faith.
          </p>
          <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
            Neither party is liable for incidental or indirect damages resulting from disclosure unless caused by intentional misconduct.
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
            10. Governing Law
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '8px' }}>
            This Agreement is governed by the laws of:
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Cyprus, where Wolsten Studios is based, or</li>
            <li>The Client&apos;s jurisdiction, if mutually agreed.</li>
          </ul>
        </section>

        {/* Section 11 */}
        <section className="mb-12">
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#0E0E0E', 
            marginBottom: '24px', 
            letterSpacing: '-0.01em' 
          }}>
            11. Acceptance
          </h2>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
            By:
          </p>
          <ul style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>booking a call,</li>
            <li>sharing information,</li>
            <li>participating in discovery,</li>
            <li>or engaging Wolsten Studios in any capacity,</li>
          </ul>
          <p style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', marginBottom: '8px', fontWeight: 500 }}>
            the Client acknowledges and agrees to this Confidentiality & Non-Disclosure Agreement.
          </p>
          <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8' }}>
            No physical signature is required.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <div 
            className="p-8"
            style={{ 
              backgroundColor: '#FAFAFC',
              border: '1px solid #EBEBEF',
              borderRadius: '8px',
            }}
          >
            <p style={{ color: '#606260', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
              For questions about this agreement, contact:
            </p>
            <div style={{ color: '#0E0E0E', fontSize: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              📩 dan.wolstenholme@wolstenstudios.com<br />
              🌍 wolstenstudios.com
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}