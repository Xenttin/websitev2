import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Menu, X } from 'lucide-react';

function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-[#050f25] relative p-4">
        <div className="absolute inset-x-8 inset-y-4 bg-[#050f25] border border-gray-800 rounded-2xl pointer-events-none"></div>
        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex items-center h-20 mx-4">
            <Link to="/" className="flex items-center ml-8">
              <Rocket className="text-blue-600 h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Trosa</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-auto p-2 text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              <div className="flex items-center justify-center space-x-8">
                <a href="https://x.com/TrosaSolutions" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-bold">Twitter</a>
                <a href="https://www.linkedin.com/company/trosa-solutions" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-bold">LinkedIn</a>
                <Link to="/contact" className="text-gray-300 hover:text-white font-bold">Contact Us</Link>
                <Link to="/blog" className="text-gray-300 hover:text-white font-bold">Blog</Link>
              </div>
            </div>

            {/* Book intro call button */}
            <div className="hidden md:block ml-8">
              <a 
                href="https://form.typeform.com/to/JeDggrzo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:translate-y-[-2px] inline-block"
              >
                Book intro call →
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 bg-[#050f25] border border-gray-800 rounded-lg mt-2 py-4 px-6 space-y-4 shadow-lg z-50`}>
            <a href="https://x.com/TrosaSolutions" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white font-bold py-2">Twitter</a>
            <a href="https://www.linkedin.com/company/trosa-solutions" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white font-bold py-2">LinkedIn</a>
            <Link to="/contact" className="block text-gray-300 hover:text-white font-bold py-2">Contact Us</Link>
            <Link to="/blog" className="block text-gray-300 hover:text-white font-bold py-2">Blog</Link>
            <a 
              href="https://form.typeform.com/to/JeDggrzo"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-white hover:text-blue-600 transition-all text-center"
            >
              Book intro call →
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="text-gray-300 space-y-8">
          <p className="text-sm text-gray-400">Last Updated: 2025/02/21</p>

          <p>
            This Privacy Policy explains how Trosa Solutions ("Company," "we," "us," or "our") collects, uses, and discloses your information when you use our website and services. It also outlines your privacy rights and how the law protects you.
          </p>

          <p>
            By using our services, you agree to the collection and use of your information in accordance with this Privacy Policy.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Interpretation and Definitions</h2>
            
            <h3 className="text-xl font-semibold text-white">Interpretation</h3>
            <p>
              Words with capitalized initial letters have defined meanings under the following conditions. These definitions apply regardless of singular or plural use.
            </p>

            <h3 className="text-xl font-semibold text-white">Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account – A unique profile created for you to access and use our services.</li>
              <li>Company – Refers to Trosa Solutions.</li>
              <li>Cookies – Small files placed on your device that track browsing history and preferences.</li>
              <li>Device – Any internet-connected device such as a computer, tablet, or smartphone.</li>
              <li>Personal Data – Any information that can be used to identify an individual.</li>
              <li>Service – Refers to our website and AI automation services.</li>
              <li>Service Provider – Any third party that processes data on behalf of the Company.</li>
              <li>Usage Data – Data automatically collected when using the Service, such as IP address, browser type, and time spent on pages.</li>
              <li>You – The individual or company using our services.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Data Collection and Usage</h2>
            
            <h3 className="text-xl font-semibold text-white">Personal Data We Collect</h3>
            <p>When you use our services, we may ask for certain personally identifiable information, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details related to automation services</li>
            </ul>

            <h3 className="text-xl font-semibold text-white">Usage Data</h3>
            <p>
              We automatically collect data about how you interact with our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on them</li>
              <li>Device and operating system details</li>
            </ul>
            <p>This data helps us analyze website performance and improve our services.</p>

            <h3 className="text-xl font-semibold text-white">Cookies and Tracking Technologies</h3>
            <p>
              We use Cookies and similar tracking technologies to enhance your experience. You can choose to disable cookies in your browser settings, but this may affect functionality.
            </p>
            <p>We use:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential Cookies – Necessary for basic website functions</li>
              <li>Preference Cookies – Remember your settings and choices</li>
              <li>Analytics Cookies – Help us analyze traffic and improve the website</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. How We Use Your Data</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our service</li>
              <li>Improve and customize our solutions</li>
              <li>Communicate with you about service updates or inquiries</li>
              <li>Ensure security and prevent fraud</li>
              <li>Analyze trends to enhance performance</li>
            </ul>
            <p>We do not sell or rent your personal data to third parties.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Sharing Your Information</h2>
            <p>We may share your data in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With Service Providers – To assist with website analytics, email services, and customer support</li>
              <li>For Legal Compliance – If required by law or to protect our business rights</li>
              <li>For Business Transfers – In the event of a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for service delivery, legal compliance, or security purposes. You may request deletion of your data at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. International Data Transfers</h2>
            <p>
              Your information may be stored and processed outside of your country. We take security measures to protect your data in accordance with applicable privacy laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Security Measures</h2>
            <p>
              We use industry-standard security protocols to protect your personal data. However, no online transmission is 100% secure. We encourage users to take necessary precautions to protect their information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">8. Your Rights and Choices</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Correct any inaccurate or incomplete data</li>
              <li>Request Deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p>For any privacy-related requests, contact us at privacy@trosa.ai</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for their content or privacy practices. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as needed. Any changes will be posted here, and we encourage you to review it periodically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">11. Contact Information</h2>
            <p>For questions about this Privacy Policy, contact us at:</p>
            <p>📧 privacy@trosa.ai</p>
            <p>🌍 www.trosa.ai</p>
          </section>
        </div>
      </div>

      <footer className="py-16 bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex justify-between items-start mb-16">
            <Link to="/" className="flex items-center">
              <Rocket className="text-blue-600 h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Trosa Solutions</span>
            </Link>
            
            <div className="flex space-x-4">
              <a href="https://x.com/TrosaSolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/trosa-solutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-white font-bold mb-6">General</h3>
              <ul className="space-y-4">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Solutions</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://form.typeform.com/to/JeDggrzo"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI-powered lead generation systems
                  </a>
                </li>
                <li>
                  <a 
                    href="https://form.typeform.com/to/JeDggrzo"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Business process automation solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400">© Copyright 2025. All rights reserved by Trosa AI Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;