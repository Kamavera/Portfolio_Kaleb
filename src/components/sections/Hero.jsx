import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { contact, sections } from '../../data/portfolio';
import { useTypewriter } from '../../utils/useTypewriter';

/**
 * Hero/Landing section with animated introduction (Bilingual)
 */
const Hero = () => {
  const { t } = useLanguage();
  const typewriterText = t(sections.hero.typewriterText);
  const typedName = useTypewriter(typewriterText, 50, 500);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-earth-950 via-earth-900 to-earth-950 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large mint circle - top right */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sage circle - bottom left */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-sage-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.05, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small floating accents */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary-400/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-sage-400/30 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name with Typewriter Effect */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-400 mb-4"
        >
          {typedName}
          <span className="inline-block w-1 h-12 sm:h-14 lg:h-16 ml-1 bg-primary-400 animate-pulse" />
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-200 mb-3"
        >
          {t(sections.hero.title)}
        </motion.h2>

        {/* Subtitle - University */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-sage-400 font-medium mb-8"
        >
          {t(sections.hero.subtitle)}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-cream-500 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {t(sections.hero.tagline)}{' '}
          <span className="text-primary-400 font-semibold relative">
            {t(sections.hero.taglineHighlight)}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500/50 via-primary-400/80 to-primary-500/50 rounded-full"></span>
          </span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-cream-600 mb-12 max-w-2xl mx-auto"
        >
          {t(sections.hero.description)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button href="#projects" size="lg">
            {t(sections.hero.cta.projects)}
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            {t(sections.hero.cta.contact)}
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-earth-800 text-cream-200 hover:bg-primary-500 hover:text-earth-950 transition-all duration-300 transform hover:scale-110 border border-earth-600 hover:border-primary-400"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-earth-800 text-cream-200 hover:bg-primary-500 hover:text-earth-950 transition-all duration-300 transform hover:scale-110 border border-earth-600 hover:border-primary-400"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="p-3 rounded-full bg-earth-800 text-cream-200 hover:bg-primary-500 hover:text-earth-950 transition-all duration-300 transform hover:scale-110 border border-earth-600 hover:border-primary-400"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#about"
            className="text-cream-600 hover:text-primary-400 transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-8 h-8" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
