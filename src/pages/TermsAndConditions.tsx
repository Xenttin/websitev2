import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Menu, X } from 'lucide-react';

function TermsAndConditions() {
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
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="text-gray-300 space-y-8">
          <p className="text-sm text-gray-400">Last Updated: 2025/02/21</p>

          <p>
            Welcome to Torsa AI Solutions. By accessing and using our website (www.trosa.ai), you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Definitions and Interpretation</h2>
            <p>For the purpose of these Terms and Conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Company ("we," "us," "our") refers to Torsa AI Solutions.</li>
              <li>Website refers to www.trosa.ai, owned and operated by Torsa AI Solutions.</li>
              <li>Service refers to the AI automation solutions, including but not limited to AI-powered virtual receptionists, chatbot development, business process automation, and workflow optimization.</li>
              <li>User ("you," "your") refers to any individual or entity accessing our website or services.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Acceptance of Terms</h2>
            <p>
              By using our website, you agree to abide by these Terms and Conditions and our Privacy Policy. You must be 18 years or older to use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. AI Automation Services</h2>
            <p>Torsa AI Solutions provides AI-driven automation services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI virtual receptionists for businesses</li>
              <li>Chatbot development for customer support</li>
              <li>Business process automation solutions</li>
              <li>AI-powered appointment scheduling</li>
              <li>Workflow automation tools</li>
            </ul>
            <p>
              Our AI systems assist businesses by automating repetitive tasks and improving efficiency. However, we do not guarantee that our AI solutions will work without error or replace human decision-making.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Payment and Refund Policy</h2>
            <p>
              All payments made for our services are non-refundable unless explicitly stated in a service contract. Prices are subject to change without prior notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability shall not exceed the amount paid by you for the service or $100, whichever is lower.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Intellectual Property Rights</h2>
            <p>
              All content, trademarks, and intellectual property on our website, including AI models, designs, and software, are owned by Torsa AI Solutions and may not be copied, modified, or distributed without our written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of these third-party sites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">8. Termination of Access</h2>
            <p>
              We reserve the right to suspend or terminate your access to our website and services at any time if we determine that you have violated these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">9. "As Is" and "As Available" Disclaimer</h2>
            <p>
              Our AI automation services are provided "as is" and "as available" without warranties of any kind. We do not guarantee that our services will be error-free, uninterrupted, or suitable for any specific purpose.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">10. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms and Conditions are governed by the laws of the United States. Any disputes shall be resolved through negotiation before pursuing legal action.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">11. Changes to Terms and Conditions</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Continued use of our services after modifications constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">12. Contact Us</h2>
            <p>For any questions about these Terms and Conditions, please contact us at:</p>
            <p>📧 legal@trosa.ai</p>
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
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

export default TermsAndConditions;