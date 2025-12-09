import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { navigation, contact } from '../data/portfolio';

/**
 * Navigation component with scroll detection, mobile menu, and language toggle
 */
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Detect scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: navigation.home, href: '#home' },
    { name: navigation.about, href: '#about' },
    { name: navigation.projects, href: '#projects' },
    { name: navigation.skills, href: '#skills' },
    { name: navigation.experience, href: '#experience' },
    { name: navigation.portfolio, href: '#portfolio' },
    { name: navigation.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-earth-900/90 backdrop-blur-lg shadow-earth border-b border-earth-700'
          : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold text-cream-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            KM<span className="text-primary-400">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream-300 hover:text-primary-400 transition-colors duration-200 font-medium relative group"
              >
                {t(link.name)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Divider */}
            <div className="h-6 w-px bg-earth-700"></div>

            {/* Social Icons */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-earth-800 hover:bg-primary-500 text-cream-200 hover:text-earth-950 transition-all duration-200 border border-earth-600 hover:border-primary-400"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-earth-800 hover:bg-primary-500 text-cream-200 hover:text-earth-950 transition-all duration-200 border border-earth-600 hover:border-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="p-2 rounded-lg bg-earth-800 hover:bg-primary-500 text-cream-200 hover:text-earth-950 transition-all duration-200 border border-earth-600 hover:border-primary-400"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-earth-800 hover:bg-earth-700 transition-colors duration-200 flex items-center gap-1 border border-earth-600"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4 text-cream-200" />
              <span className="text-sm font-medium text-cream-200">
                {language.toUpperCase()}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-earth-800 text-xs font-medium text-cream-200 border border-earth-600"
              aria-label="Toggle language"
            >
              {language.toUpperCase()}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-earth-800 text-cream-200 border border-earth-600"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-earth-900/95 backdrop-blur-lg border-t border-earth-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-lg font-medium text-cream-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {t(link.name)}
                </a>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex gap-3 pt-4 border-t border-earth-700">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-earth-800 hover:bg-primary-500 text-cream-200 hover:text-earth-950 transition-all duration-200 border border-earth-600"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-earth-800 hover:bg-primary-500 text-cream-200 hover:text-earth-950 transition-all duration-200 border border-earth-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="p-3 rounded-lg bg-earth-800 hover:bg-primary-500 text-cream-200 hover:text-earth-950 transition-all duration-200 border border-earth-600"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
