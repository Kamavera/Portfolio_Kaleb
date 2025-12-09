import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { contact, navigation, sections } from '../data/portfolio';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: contact.github, label: 'GitHub' },
    { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
  ];

  const navLinks = [
    { name: navigation.home, href: '#home' },
    { name: navigation.about, href: '#about' },
    { name: navigation.projects, href: '#projects' },
    { name: navigation.skills, href: '#skills' },
    { name: navigation.experience, href: '#experience' },
    { name: navigation.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-earth-950 text-cream-100 py-12 px-4 sm:px-6 lg:px-8 border-t border-earth-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-2xl font-bold">
            KM<span className="text-primary-400">.</span>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-earth-800 hover:bg-primary-500 hover:text-earth-950 text-cream-200 transition-all duration-300 transform hover:scale-110 border border-earth-600 hover:border-primary-400"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream-600 hover:text-primary-400 transition-colors duration-200 relative group"
              >
                {t(link.name)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-earth-700 to-transparent"></div>

          <div className="text-center space-y-2">
            <p className="text-cream-600 text-sm">
              &copy; {currentYear} Kaleb E. Martínez Rivera. All rights reserved.
            </p>
            <p className="text-cream-600 text-xs">
              {t(sections.footer.student)}
            </p>
            <p className="text-cream-700 text-xs flex items-center justify-center gap-1">
              {t(sections.footer.builtWith)} <Heart className="w-3 h-3 text-primary-400 fill-primary-400" /> {t(sections.footer.and)} React + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
