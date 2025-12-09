import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Target } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { about, sections } from '../../data/portfolio';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: GraduationCap,
      title: sections.about.highlights.education.title,
      description: sections.about.highlights.education.description,
    },
    {
      icon: Code2,
      title: sections.about.highlights.technical.title,
      description: sections.about.highlights.technical.description,
    },
    {
      icon: Briefcase,
      title: sections.about.highlights.experience.title,
      description: sections.about.highlights.experience.description,
    },
    {
      icon: Target,
      title: sections.about.highlights.career.title,
      description: sections.about.highlights.career.description,
    },
  ];

  return (
    <Section
      id="about"
      title={t(sections.about.title)}
      subtitle={t(sections.about.subtitle)}
      className="bg-earth-900 relative"
    >
      {/* Professional Photo Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-16"
      >
        <div className="relative">
          {/* Photo placeholder with mint border */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-500/20 to-sage-500/20 border-4 border-primary-400/50 flex items-center justify-center overflow-hidden shadow-mint">
            {/* Placeholder content */}
            <div className="w-full h-full bg-gradient-to-br from-earth-800 to-earth-700 flex items-center justify-center">
              <span className="text-6xl font-bold text-primary-400/30">KM</span>
            </div>
          </div>

          {/* Decorative ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary-400/20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <motion.div
          initial={{ opacity: 0.5, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cream-100">
              {t(sections.about.whoIAm)}
            </h3>
            <p className="text-lg text-cream-500 leading-relaxed">
              {t(about.intro)}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-cream-100">
              {t(sections.about.myBackground)}
            </h3>
            <p className="text-lg text-cream-500 leading-relaxed">
              {t(about.background)}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cream-100">
              {t(sections.about.whatImLearning)}
            </h3>
            <p className="text-lg text-cream-500 leading-relaxed">
              {t(about.learning)}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-cream-100">
              {t(sections.about.whatImSeeking)}
            </h3>
            <p className="text-lg text-cream-500 leading-relaxed">
              {t(about.seeking)}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card tilt={true} className="p-6 h-full">
              <div className="flex flex-col h-full">
                <motion.div
                  className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 border border-primary-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-6 h-6 text-primary-400" />
                </motion.div>
                <h4 className="text-lg font-semibold mb-2 text-cream-100">
                  {t(item.title)}
                </h4>
                <p className="text-cream-600 text-sm leading-relaxed flex-1">
                  {t(item.description)}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default About;
