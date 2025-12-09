import { motion } from 'framer-motion';
import { Code2, Palette, Server, Database, Wrench } from 'lucide-react';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import { skills, sections } from '../../data/portfolio';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    { title: sections.skills.categories.languages, key: 'languages', icon: Code2, color: 'text-primary-400' },
    { title: sections.skills.categories.frontend, key: 'frontend', icon: Palette, color: 'text-sage-400' },
    { title: sections.skills.categories.backend, key: 'backend', icon: Server, color: 'text-primary-400' },
    { title: sections.skills.categories.databases, key: 'databases', icon: Database, color: 'text-sage-400' },
    { title: sections.skills.categories.tools, key: 'tools', icon: Wrench, color: 'text-primary-400' },
  ];

  const levelColors = {
    Advanced: 'success',
    Intermediate: 'primary',
    Beginner: 'warning',
    Avanzado: 'success',
    Intermedio: 'primary',
    Principiante: 'warning',
  };

  // Map skill levels to percentage values for progress bars
  const levelPercentages = {
    Advanced: 90,
    Intermediate: 70,
    Beginner: 40,
    Avanzado: 90,
    Intermedio: 70,
    Principiante: 40,
  };

  // Progress bar colors
  const progressBarColors = {
    Advanced: 'bg-green-500',
    Intermediate: 'bg-primary-500',
    Beginner: 'bg-yellow-500',
    Avanzado: 'bg-green-500',
    Intermedio: 'bg-primary-500',
    Principiante: 'bg-yellow-500',
  };

  return (
    <Section
      id="skills"
      title={t(sections.skills.title)}
      subtitle={t(sections.skills.subtitle)}
      className="bg-earth-900"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0.5, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
          >
            <Card tilt={true} className="p-6 h-full group">
              <div className="flex items-center gap-3 mb-6 relative">
                <motion.div
                  className={`${category.color} p-2 rounded-lg bg-earth-800 border border-earth-700 group-hover:border-primary-400/50 transition-colors duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <category.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-cream-100 relative">
                  {t(category.title)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                </h3>
              </div>

              <div className="space-y-4">
                {skills[category.key].map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group/skill p-3 rounded-lg hover:bg-earth-700/30 transition-all duration-200"
                    initial={{ opacity: 0.6, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.04 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 flex-1">
                        {skill.icon && (
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <skill.icon className="w-5 h-5 text-primary-400 group-hover/skill:text-primary-300 transition-colors" />
                          </motion.div>
                        )}
                        <span className="text-cream-200 font-medium text-sm group-hover/skill:text-cream-100 transition-colors">
                          {typeof skill.name === 'object' ? t(skill.name) : skill.name}
                        </span>
                      </div>

                      <Badge
                        variant={levelColors[t(skill.level)] || 'default'}
                        className="ml-2 text-xs"
                      >
                        {t(skill.level)}
                      </Badge>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-earth-700 rounded-full h-2 overflow-hidden border border-earth-600">
                      <motion.div
                        className={`h-full ${progressBarColors[t(skill.level)] || 'bg-gray-400'} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${levelPercentages[t(skill.level)] || 50}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.04, ease: 'easeOut' }}
                      >
                        {/* Progress bar shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: skillIndex * 0.1 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-cream-600 text-lg max-w-3xl mx-auto leading-relaxed">
          {t(sections.skills.footer)}
        </p>
      </motion.div>
    </Section>
  );
};

export default Skills;
