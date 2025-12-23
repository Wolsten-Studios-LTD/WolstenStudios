import { Navigation } from '../components/Navigation';
import { PageTitle } from '../components/PageTitle';
import { Send, CheckCircle } from 'lucide-react';
import { LinkedInLogo } from '../components/logos/LinkedInLogo';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/mvgoybwd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'New Contact Form Submission',
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', company: '', message: '' });
      } else {
        setErrorMessage('Something went wrong. Please try again in a moment.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Unable to send your message right now. Please check your connection and retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <PageTitle 
            title="Let's Talk"
            subtitle="Get in touch to discuss your transformation"
          />
          
          <div className="mt-16 grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="mb-2">Message Received</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll respond within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div 
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      role="alert"
                      aria-live="polite"
                    >
                      {errorMessage}
                    </div>
                  )}
                  
                  <div>
                    <label 
                      htmlFor="fullName" 
                      className="block text-sm text-[#151419] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5C7] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm text-[#151419] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5C7] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="company" 
                      className="block text-sm text-[#151419] mb-2"
                    >
                      Company / Role
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5C7] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm text-[#151419] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A5C7] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-[#00A5C7] text-white rounded-lg hover:bg-[#008FAF] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Response Time */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="mb-3">Response Time</h3>
                <p className="text-sm text-gray-600">
                  We respond to all inquiries within <strong>48 hours</strong> during business days.
                </p>
              </div>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/110592070/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-[#00A5C7] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#E8F3FF] group-hover:bg-[#0A66C2] transition-colors">
                  <LinkedInLogo className="w-6 h-6 text-[#0A66C2] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Follow us</div>
                  <div className="group-hover:text-[#0A66C2] transition-colors">
                    Wolsten Studios
                  </div>
                </div>
              </a>

              {/* Application CTA */}
              <div className="bg-[#00A5C7] border border-[#00A5C7] rounded-lg p-6 text-white">
                <h3 className="mb-2">Ready to Transform?</h3>
                <p className="text-sm mb-4 opacity-95">
                  Skip the queue and apply directly for SprintOS™.
                </p>
                <a
                  href="/application"
                  className="inline-block px-4 py-2 bg-white text-[#00A5C7] rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Start Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
