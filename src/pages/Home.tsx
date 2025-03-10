import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  FastForward,
  LineChart,
  Lock,
  PauseCircle,
  Zap,
  Search,
  Lightbulb,
  Wrench,
  Sparkles,
  MoveDown,
  Twitter,
  Users,
  UserPlus,
  BarChart3,
  FolderKanban,
  MessageSquareText,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Menu,
  X,
} from 'lucide-react';

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const faqs = [
    {
      question: 'Why choose this over hiring an operations manager?',
      answer:
        'Hiring an in-house operations manager or team can take months and cost well over $100,000 per year, including salaries and benefits. Our AI-driven systems—whether for lead generation, hiring, CRM buildouts, or project management—provide the same level of efficiency at a fraction of the cost, are built within days, and integrate seamlessly with your business.',
    },
    {
      question: 'What are your pricing and payment terms?',
      answer:
        'We charge a one-time fee based on the complexity of your automation system. After deployment, we offer optional maintenance and management services for an additional fee to keep your system optimized and running smoothly. First half of the payment is required upfront before development begins and the other half once the system has been built.',
    },
    {
      question: 'How do I request an automation system?',
      answer:
        "Simply fill our request form on the website with details about your business needs, and we'll schedule a short onboarding call. From there, we design, build, and implement a custom AI system for lead generation, hiring, CRM automation, or content improvement—all tailored to your specific requirements.",
    },
    {
      question: 'Is this actually more cost-effective than hiring in-house?',
      answer:
        'Yes—our AI-driven systems replace tasks that would require full-time employees, saving you thousands per month. Instead of hiring a sales team for lead generation, a recruiter for hiring, or a dedicated project manager, our solutions provide automation that scales with your business at a one-time cost, typically delivered in 3–4 days.',
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our services within the first month, we'll provide a full refund, no questions asked.",
    },
    {
      question: 'How will we stay in touch during the project?',
      answer:
        "We communicate primarily through email and scheduled video calls. You'll receive regular updates at key milestones, and we provide opportunities for feedback before final delivery to ensure the system is exactly what you need.",
    },
    {
      question: 'What types of businesses can benefit from AI automation?',
      answer:
        'Our solutions are ideal for service-based businesses, e-commerce brands, and agencies looking to optimize operations. Whether you need automated lead generation, hiring systems, CRM buildouts, or content workflows, we design AI-powered automation that saves time, increases efficiency, and scales with your business.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
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
                className="h-12 w-12"
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
              className="block bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all text-center"
            >
              Book intro call →
            </a>
          </div>
        </div>
      </nav>

      <section id="hero" className="py-20 bg-[#050f25] relative px-4">
        <div className="absolute inset-x-8 inset-y-4 border border-gray-800 rounded-2xl pointer-events-none bg-gray-900"></div>
        <div className="max-w-[1400px] mx-auto relative">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="inline-block bg-[#1A2634] text-blue-600 px-4 py-2 rounded-full text-sm font-md mb-8">
              AUTOMATE YOUR BUSINESS
            </div>
            <h1 className="text-4xl md:text-6xl mb-8 leading-tight font-montserrat font-bold">
              We build automated growth systems for B2B businesses.
            </h1>
            <p className="text-lg md:text-xl mb-12 text-gray-400">
              Nail your offer, automate client acquisition, and eliminate
              operational bottlenecks—so you can scale to 8 figures faster, with
              less effort and more predictability.
            </p>
            <div className="flex justify-center">
              <a
                href="https://form.typeform.com/to/JeDggrzo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:translate-y-[-2px] inline-block"
              >
                Book intro call →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050f25] relative px-4">
        <div className="absolute inset-x-8 inset-y-4 border border-gray-800 rounded-2xl pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1A2634] text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              OPERATIONS AS A SERVICE
            </div>
            <h2 className="text-4xl font-bold">Why Choose Trosa AI?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#050f25] p-6 rounded-xl border border-gray-800 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-600 p-3 rounded-lg inline-block mb-4 w-12 h-12 flex items-center justify-center">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Complete Flexibility</h3>
              <p className="text-gray-400">
                We believe in delivering value quickly, not locking you into
                long-term contracts. Build what you need, when you need it.
              </p>
            </div>
            <div className="bg-[#050f25] p-6 rounded-xl border border-gray-800 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-600 p-3 rounded-lg inline-block mb-4 w-12 h-12 flex items-center justify-center">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">No Fluff, Just Impact</h3>
              <p className="text-gray-400">
                Stay in the loop without the clutter. We send concise updates
                via Slack and offer weekly strategy sessions to ensure
                alignment.
              </p>
            </div>
            <div className="bg-[#050f25] p-6 rounded-xl border border-gray-800 hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-600 p-3 rounded-lg inline-block mb-4 w-12 h-12 flex items-center justify-center">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Rapid Implementation</h3>
              <p className="text-gray-400">
                Get started immediately. After a quick onboarding call, we'll
                dive in and deliver results within days, not weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050f25] relative px-4">
        <div className="absolute inset-x-8 inset-y-4 bg-gray-900 border border-gray-800 rounded-2xl pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1A2634] text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              SERVICES
            </div>
            <h2 className="text-4xl font-bold">Our Solutions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#050f25] p-6 rounded-xl border border-gray-800 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Users className="text-blue-600 mr-4 flex-shrink-0" size={32} />
                <h3 className="text-2xl font-bold leading-tight">
                  Lead Generation
                </h3>
              </div>
              <p className="text-gray-400">
                Tailored, cost-effective marketing and outreach systems designed
                to propel your business growth seamlessly and on autopilot.
              </p>
            </div>

            <div className="bg-[#050f25] p-6 rounded-xl border border-gray-800 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <UserPlus
                  className="text-blue-600 mr-4 flex-shrink-0"
                  size={32}
                />
                <h3 className="text-2xl font-bold leading-tight">
                  Hiring Systems
                </h3>
              </div>
              <p className="text-gray-400">
                Intelligent, automated workflows that efficiently find, engage,
                and assess candidates, streamlining your recruitment process.
              </p>
            </div>

            <div className="bg-[#050f25] p-6 rounded-xl border border-gray-800 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <BarChart3
                  className="text-blue-600 mr-4 flex-shrink-0"
                  size={32}
                />
                <h3 className="text-2xl font-bold leading-tight">
                  CRM Buildouts
                </h3>
              </div>
              <p className="text-gray-400">
                High-performance sales systems that empower you to monitor,
                refine, and scale growth with the precision of top-tier
                businesses.
              </p>
            </div>

            <div className="bg-[#050f25] p-6 rounded-xl border border-gray-800 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <FolderKanban
                  className="text-blue-600 mr-4 flex-shrink-0"
                  size={32}
                />
                <h3 className="text-2xl font-bold leading-tight">
                  Project Management
                </h3>
              </div>
              <p className="text-gray-400">
                Customized project management solutions trusted by
                industry-leading agencies and SaaS enterprises to streamline
                operations.
              </p>
            </div>

            <div className="bg-[#050f25] p-6 rounded-xl border border-gray-800 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MessageSquareText
                  className="text-blue-600 mr-4 flex-shrink-0"
                  size={32}
                />
                <h3 className="text-2xl font-bold leading-tight">
                  Content Improvement
                </h3>
              </div>
              <p className="text-gray-400">
                Expertise-driven content enhancement that elevates your
                messaging, ensuring it resonates with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050f25] relative px-4">
        <div className="absolute inset-x-8 inset-y-4 rounded-2xl pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div className="max-w-[1400px] mx-auto relative px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1A2634] text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              PROJECT TIMELINE
            </div>
            <h2 className="text-4xl font-bold">Here's how it works</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="relative flex flex-col space-y-16">
                <div className="relative flex items-start">
                  <div className="relative">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute left-1/2 bottom-[-56px] transform -translate-x-1/2">
                      <MoveDown className="w-9 h-9 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-6 pt-2">
                    <h3 className="text-2xl font-bold mb-3">Discovery</h3>
                    <p className="text-gray-400">
                      A quick 30-minute call to understand your needs and goals.
                      This is the only required call, and we can schedule it as
                      early as tomorrow.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="relative">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute left-1/2 bottom-[-56px] transform -translate-x-1/2">
                      <MoveDown className="w-9 h-9 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-6 pt-2">
                    <h3 className="text-2xl font-bold mb-3">Solution Design</h3>
                    <p className="text-gray-400">
                      We map out a custom automated system based on your
                      requirements. You'll have the opportuinity to review and
                      provide feedback before we proceed.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="relative">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute left-1/2 bottom-[-56px] transform -translate-x-1/2">
                      <MoveDown className="w-9 h-9 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-6 pt-2">
                    <h3 className="text-2xl font-bold mb-3">Implementation</h3>
                    <p className="text-gray-400">
                      We build and integrate your AI automated system within
                      your current workflow, ensuring seamless compatibility
                      with your exisiting tools. The process is completely
                      hands-off for you, with updates along the way.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-6 pt-2">
                    <h3 className="text-2xl font-bold mb-3">
                      Launch & Support
                    </h3>
                    <p className="text-gray-400">
                      Your system is read to deploy within days. We provide
                      support to ensure a smooth launch and make any final
                      adjustments as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050f25] relative px-4">
        <div className="absolute inset-x-8 inset-y-4 bg-gray-900 border border-gray-800 rounded-2xl pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1A2634] text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              COMPARISON
            </div>
            <h2 className="text-4xl font-bold">How We Compare</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center bg-blue-600 rounded-t-lg">
                    Trosa AI
                  </th>
                  <th className="p-4 text-center">Free Lancer</th>
                  <th className="p-4 text-center">In-house</th>
                  <th className="p-4 text-center">Others Agencies</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="p-4">Time to hire</td>
                  <td className="p-4 text-center bg-blue-900/20">
                    A few hours!
                  </td>
                  <td className="p-4 text-center">Days/Weeks</td>
                  <td className="p-4 text-center">Weeks/Months</td>
                  <td className="p-4 text- center">Weeks/Months</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">Ease of Use </td>
                  <td className="p-4 text-center bg-blue-900/20">
                    Fully managed
                  </td>
                  <td className="p-4 text-center">Requires oversight</td>
                  <td className="p-4 text-center">Heavy mangement required </td>
                  <td className="p-4 text-center">Lmitied transparency</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">Skill Level</td>
                  <td className="p-4 text-center bg-blue-900/20">
                    Executive-level
                  </td>
                  <td className="p-4 text-center">Novice</td>
                  <td className="p-4 text-center">Good (hopefully)</td>
                  <td className="p-4 text-center">Fliping a coin</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">First Delivery</td>
                  <td className="p-4 text-center bg-blue-900/20">3-4 days!</td>
                  <td className="p-4 text-center">Several weeks</td>
                  <td className="p-4 text-center">Several weeks </td>
                  <td className="p-4 text-center">Several weeks</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4">Support</td>
                  <td className="p-4 text-center bg-blue-900/20">
                    Ongoing Support & Updates{' '}
                  </td>
                  <td className="p-4 text-center">no post-project support</td>
                  <td className="p-4 text-center">
                    Requires internal troubleshooting
                  </td>
                  <td className="p-4 text-center">Expensive, often slow</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050f25] relative px-4">
        <div className="absolute inset-x-8 inset-y-4 bg-[#050f25] border border-gray-800 rounded-2xl pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#1A2634] text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-4xl font-bold">FAQ</h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-[#050f25] rounded-xl hover:bg-[#0a1628] transition-colors duration-300 flex justify-between items-center"
                >
                  <span className="text-xl font-bold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-[#0a1628] rounded-xl mt-2">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
              <span className="ml-2 text-xl font-bold">Trosa Solutions</span>
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
                    href="#hero"
                    onClick={scrollToHero}
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

export default Home;
