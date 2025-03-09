import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    budget: '',
    problem: '',
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          budget: formData.budget,
          problem: formData.problem,
        },
      ]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your submission! We will contact you soon.',
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        budget: '',
        problem: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message:
          'There was an error submitting your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <img
                src="/trosasologo.png"
                alt="Trosa Logo"
                className="h-8 w-8"
              />
              <span className="ml-3 text-xl font-bold">Trosa Solutions</span>
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
                <a
                  href="https://x.com/TrosaSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white font-bold"
                >
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/company/trosa-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white font-bold"
                >
                  LinkedIn
                </a>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white font-bold"
                >
                  Contact Us
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white font-bold"
                >
                  Blog
                </Link>
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
          <div
            className={`md:hidden ${
              isMenuOpen ? 'block' : 'hidden'
            } absolute left-0 right-0 bg-[#050f25] border border-gray-800 rounded-lg mt-2 py-4 px-6 space-y-4 shadow-lg z-50`}
          >
            <a
              href="https://x.com/TrosaSolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white font-bold py-2"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/trosa-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white font-bold py-2"
            >
              LinkedIn
            </a>
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-white font-bold py-2"
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              className="block text-gray-300 hover:text-white font-bold py-2"
            >
              Blog
            </Link>
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

      <section className="py-20 bg-[#050f25] relative px-4">
        <div className="absolute inset-x-8 inset-y-4 border border-gray-800 rounded-2xl pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#1A2634] text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
                CONTACT US
              </div>
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <p className="text-xl text-gray-400 mt-4">
                Tell us about your project and we'll help you transform your
                business with AI automation.
              </p>
            </div>

            {submitStatus.message && (
              <div
                className={`mb-8 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-900/50 text-green-300'
                    : 'bg-red-900/50 text-red-300'
                }`}
              >
                {' '}
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white"
                >
                  <option value="">Select a budget range</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="problem"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Tell us about your problem/issue
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  required
                  value={formData.problem}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white resize-none"
                  placeholder="Describe your business challenges and what you're looking to achieve..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:translate-y-[-2px] inline-flex items-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex justify-between items-start mb-16">
            <Link to="/" className="flex items-center">
              <img
                src="/trosasologo.png"
                alt="Trosa Logo"
                className="h-8 w-8"
              />
              <span className="ml-3 text-xl font-bold">Trosa Solutions</span>
            </Link>

            <div className="flex space-x-4">
              <a
                href="https://x.com/TrosaSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/trosa-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-white font-bold mb-6">General</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
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
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © Copyright 2025. All rights reserved by Trosa Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
