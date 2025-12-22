import { Navigation } from '../components/Navigation';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { colors, spacing } from '../config/theme';

export function ApplicationPage() {
  const [formData, setFormData] = useState({
    // Contact
    fullName: '',
    email: '',
    role: '',
    phone: '',

    // Company
    companyName: '',
    website: '',
    businessDescription: '',

    // Fit + Scope
    misalignment: '',
    sprintType: '',
    successOutcome: '',
    timeframe: '',

    // Qualification
    investmentReady: '',
    confirmDecisionMaker: false,

    // Honeypot (anti-spam)
    companyFax: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Honeypot: if filled, quietly succeed (bots)
      if (formData.companyFax?.trim()) {
        window.location.pathname = '/thank-you';
        return;
      }

      const response = await fetch('https://formspree.io/f/manraeko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          subject: 'New SprintOS™ Application',

          // Contact
          fullName: formData.fullName,
          email: formData.email,
          role: formData.role,
          phone: formData.phone,

          // Company
          companyName: formData.companyName,
          website: formData.website,
          businessDescription: formData.businessDescription,

          // Fit + Scope
          misalignment: formData.misalignment,
          sprintType: formData.sprintType,
          successOutcome: formData.successOutcome,
          timeframe: formData.timeframe,

          // Qualification
          investmentReady: formData.investmentReady,
          confirmDecisionMaker: formData.confirmDecisionMaker ? 'Yes' : 'No',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.location.pathname = '/thank-you';
      } else {
        setError('There was an issue submitting your application. Please try again in a moment.');
      }
    } catch {
      setError('There was an issue submitting your application. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div style={{ backgroundColor: colors.background.light, minHeight: '100vh' }}>
        <Navigation />
        <section className={`${spacing.section.px} pt-40 pb-32`}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="mb-8 flex justify-center">
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 165, 199, 0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckCircle2 size={40} style={{ color: colors.cyan.primary }} />
                </div>
              </div>

              <h1
                className="mb-6"
                style={{
                  color: colors.text.primary,
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  fontWeight: 300,
                }}
              >
                Application received
              </h1>

              <p
                className="mb-8"
                style={{
                  color: colors.text.secondary,
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  maxWidth: '620px',
                  margin: '0 auto 2rem',
                }}
              >
                We review applications within 48 hours. If there's alignment, we'll invite you to a short scoping call.
              </p>

              <p
                style={{
                  color: colors.text.tertiary,
                  fontSize: '0.938rem',
                  lineHeight: '1.7',
                  fontStyle: 'italic',
                }}
              >
                Limited availability — only a small number of sprints are accepted per quarter.
              </p>

              <div className="mt-12">
                <a
                  href="/"
                  style={{
                    display: 'inline-block',
                    color: colors.cyan.primary,
                    fontSize: '0.938rem',
                    textDecoration: 'none',
                    borderBottom: `1px solid ${colors.cyan.primary}`,
                  }}
                >
                  Return to homepage
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    color: colors.text.primary,
    backgroundColor: colors.background.light,
    border: '1px solid #DADADA',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  const labelBase: React.CSSProperties = {
    display: 'block',
    color: colors.text.primary,
    fontSize: '1rem',
    fontWeight: 500,
    marginBottom: '1rem',
  };

  return (
    <div style={{ backgroundColor: colors.background.light, minHeight: '100vh' }} id="application-page">
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className={`${spacing.section.px} pt-40 pb-16 max-w-3xl mx-auto relative`}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <p
              className="mb-4"
              style={{
                color: colors.text.secondary,
                fontSize: '0.813rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              TRANSFORMATION SPRINT APPLICATION
            </p>

            <h1
              className="mb-6"
              style={{
                color: colors.text.primary,
                fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.025em',
                fontWeight: 300,
              }}
            >
              Apply for SprintOS™
            </h1>

            <p
              style={{
                color: colors.text.secondary,
                fontSize: '1.125rem',
                lineHeight: '1.7',
                maxWidth: '720px',
                marginBottom: '1.5rem',
              }}
            >
              This is a short qualification form. If there's alignment, we'll respond within 48 hours and invite you to a scoping call.
            </p>

            {/* Minimal expectations box */}
            <div
              className="p-6"
              style={{
                backgroundColor: colors.background.white,
                border: `1px solid ${colors.border.light}`,
                borderLeft: `3px solid ${colors.cyan.primary}`,
              }}
            >
              <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7', marginBottom: '0.5rem' }}>
                We look for:
              </p>
              <ul style={{ color: colors.text.secondary, fontSize: '0.938rem', lineHeight: '1.8', marginLeft: '1rem' }}>
                <li>Real business with real momentum</li>
                <li>Decision-maker access</li>
                <li>Clear misalignment to solve</li>
                <li>Readiness to execute, not "explore"</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Form */}
        <section className={`${spacing.section.px} pb-32`}>
          <div className="max-w-3xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              className="p-12"
              style={{
                backgroundColor: colors.background.white,
                border: `1px solid ${colors.border.light}`,
              }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Section: Contact */}
              <div className="mb-12">
                <p
                  style={{
                    color: colors.text.secondary,
                    fontSize: '0.813rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                  }}
                >
                  Contact
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" style={labelBase}>
                      1. Your name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      style={inputBase}
                      onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={labelBase}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      style={inputBase}
                      onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                    />
                  </div>

                  <div>
                    <label htmlFor="role" style={labelBase}>
                      Role / title
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      placeholder="Founder / CEO / Director"
                      style={inputBase}
                      onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" style={labelBase}>
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder="+44 / +357 / etc."
                      style={inputBase}
                      onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                    />
                  </div>
                </div>
              </div>

              {/* Section: Company */}
              <div className="mb-12">
                <p
                  style={{
                    color: colors.text.secondary,
                    fontSize: '0.813rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                  }}
                >
                  Company
                </p>

                <div className="mb-10">
                  <label htmlFor="companyName" style={labelBase}>
                    2. Company name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    style={inputBase}
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                  />

                  <label htmlFor="website" style={{ ...labelBase, marginTop: '1.5rem' }}>
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                    placeholder="https://"
                    style={inputBase}
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                  />
                </div>

                <div className="mb-10">
                  <label htmlFor="businessDescription" style={labelBase}>
                    3. What do you do in one sentence?
                  </label>
                  <textarea
                    id="businessDescription"
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    required
                    rows={3}
                    style={{ ...inputBase, resize: 'vertical' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                  />
                </div>
              </div>

              {/* Section: Fit */}
              <div className="mb-12">
                <p
                  style={{
                    color: colors.text.secondary,
                    fontSize: '0.813rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                  }}
                >
                  Fit & scope
                </p>

                <div className="mb-10">
                  <label htmlFor="misalignment" style={labelBase}>
                    4. What feels misaligned right now?
                  </label>
                  <textarea
                    id="misalignment"
                    name="misalignment"
                    value={formData.misalignment}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe the gap between where the business is and how it currently presents."
                    style={{ ...inputBase, resize: 'vertical' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                  />
                </div>

                <div className="mb-10">
                  <label htmlFor="sprintType" style={labelBase}>
                    5. Which do you need?
                  </label>
                  <select
                    id="sprintType"
                    name="sprintType"
                    value={formData.sprintType}
                    onChange={handleChange}
                    required
                    style={{
                      ...inputBase,
                      cursor: 'pointer',
                      color: formData.sprintType ? colors.text.primary : colors.text.tertiary,
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                  >
                    <option value="">Select an option</option>
                    <option value="SprintOS Lite™">SprintOS Lite™ (6-day brand reset)</option>
                    <option value="SprintOS™">SprintOS™ (7–14 day full transformation)</option>
                    <option value="Unsure">Unsure — need guidance</option>
                  </select>
                </div>

                <div className="mb-10">
                  <label htmlFor="successOutcome" style={labelBase}>
                    6. What outcome would make this sprint a success?
                  </label>
                  <textarea
                    id="successOutcome"
                    name="successOutcome"
                    value={formData.successOutcome}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Be specific. What must be true at the end of the sprint?"
                    style={{ ...inputBase, resize: 'vertical' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                  />
                </div>

                <div className="mb-10">
                  <label htmlFor="timeframe" style={labelBase}>
                    7. Timeframe to start
                  </label>
                  <select
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    required
                    style={{
                      ...inputBase,
                      cursor: 'pointer',
                      color: formData.timeframe ? colors.text.primary : colors.text.tertiary,
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                  >
                    <option value="">Select an option</option>
                    <option value="Immediately">Immediately</option>
                    <option value="2-4 weeks">2–4 weeks</option>
                    <option value="1-2 months">1–2 months</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              {/* Section: Qualification */}
              <div className="mb-12">
                <p
                  style={{
                    color: colors.text.secondary,
                    fontSize: '0.813rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                  }}
                >
                  Qualification
                </p>

                <div className="mb-10">
                  <label htmlFor="investmentReady" style={labelBase}>
                    8. Are you prepared to invest €5k–€35k depending on scope?
                  </label>
                  <select
                    id="investmentReady"
                    name="investmentReady"
                    value={formData.investmentReady}
                    onChange={handleChange}
                    required
                    style={{
                      ...inputBase,
                      cursor: 'pointer',
                      color: formData.investmentReady ? colors.text.primary : colors.text.tertiary,
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = colors.cyan.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#DADADA')}
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="mb-10 p-6" style={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border.light}` }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '1rem',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      name="confirmDecisionMaker"
                      checked={formData.confirmDecisionMaker}
                      onChange={handleChange}
                      required
                      style={{
                        width: '20px',
                        height: '20px',
                        marginTop: '2px',
                        cursor: 'pointer',
                        accentColor: colors.cyan.primary,
                      }}
                    />
                    <span style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7' }}>
                      I confirm I'm the decision-maker (or have direct access to the decision-maker)
                    </span>
                  </label>
                </div>
              </div>

              {/* Honeypot field (hidden) */}
              <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                <label htmlFor="companyFax">Company fax</label>
                <input
                  type="text"
                  id="companyFax"
                  name="companyFax"
                  value={formData.companyFax}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Microcopy */}
              <div
                className="mb-10 p-6"
                style={{
                  backgroundColor: 'rgba(0, 165, 199, 0.05)',
                  border: '1px solid rgba(0, 165, 199, 0.2)',
                  borderLeft: `3px solid ${colors.cyan.primary}`,
                }}
              >
                <p style={{ color: colors.text.primary, fontSize: '0.938rem', lineHeight: '1.7' }}>
                  We respond within 48 hours if there's alignment. If accepted, we'll schedule a short scoping call and confirm timeline + scope.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div
                  className="mb-6 p-4"
                  style={{
                    backgroundColor: '#FEF2F2',
                    border: '1px solid #FCA5A5',
                    color: '#991B1B',
                  }}
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 px-10 py-5"
                style={{
                  backgroundColor: isSubmitting ? colors.text.tertiary : colors.background.dark,
                  color: colors.background.white,
                  fontSize: '1rem',
                  letterSpacing: '0.02em',
                  fontWeight: 500,
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  width: '100%',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
                }}
                whileHover={!isSubmitting ? { y: -2, boxShadow: '0 6px 24px rgba(0, 0, 0, 0.18)' } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                {isSubmitting ? 'Submitting…' : 'Submit application'}
                {!isSubmitting && <ArrowRight size={20} />}
              </motion.button>
            </motion.form>

            {/* No email footer / no alternative contact block by request */}
          </div>
        </section>
      </main>
    </div>
  );
}