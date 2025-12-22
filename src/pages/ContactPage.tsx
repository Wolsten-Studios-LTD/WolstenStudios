import { Navigation } from '../components/Navigation';
import { PageTitle } from '../components/PageTitle';
import { Mail, Linkedin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <PageTitle 
            title="Let's Talk"
            subtitle="Get in touch to discuss your transformation"
          />
          
          <div className="mt-16 space-y-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <a 
                  href="mailto:dan.wolstenholme@wolstenstudios.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#00A5C7] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#008FAF] transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <div className="text-lg group-hover:text-[#00A5C7] transition-colors">
                      dan.wolstenholme@wolstenstudios.com
                    </div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/dan-wolstenholme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#00A5C7] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#008FAF] transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">LinkedIn</div>
                    <div className="text-lg group-hover:text-[#00A5C7] transition-colors">
                      Connect on LinkedIn
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">
                Whether you're ready to start a SprintOS™ transformation or just want to explore what's possible, 
                I'm here to help. Reach out via email or connect with me on LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
