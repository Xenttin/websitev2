import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Twitter, Linkedin, Menu, X } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { fetchBlogPosts } from '../lib/blog';

function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      const blogPosts = await fetchBlogPosts();
      setPosts(blogPosts);
      setLoading(false);
    }
    loadPosts();
  }, []);

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
        <div className="max-w-[1400px] mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1A2634] text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              BLOG
            </div>
            <h1 className="text-4xl md:text-6xl mb-8 leading-tight font-montserrat">
              Latest Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the latest trends, strategies, and insights in AI
              automation and business growth.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-[#0a1628] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-blue-600 text-sm">
                        {format(new Date(post.date), 'MMM dd, yyyy')}
                      </span>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-600/20 text-blue-600 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-400">
                        By {post.author}
                      </span>
                      <span className="text-blue-600">Read More →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
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

export default Blog;
