import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects, sections } from '../../data/portfolio';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <Section
      id="projects"
      title={t(sections.projects.title)}
      subtitle={t(sections.projects.subtitle)}
      className="bg-earth-950"
    >
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0.5, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card tilt={true} className="h-full flex flex-col overflow-hidden">
              {/* Project Image Placeholder with Tech Icons */}
              <div className="h-64 bg-gradient-to-br from-primary-500 to-sage-500 flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-earth-950/20 rounded-full blur-2xl"></div>

                <div className="flex gap-4 flex-wrap justify-center p-4 relative z-10">
                  {project.techIcons.map((Icon, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 0.7, scale: 1 }}
                      whileHover={{ opacity: 1, scale: 1.1, rotate: 5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <Icon className="w-16 h-16 text-earth-950" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-cream-100">
                    {t(project.title)}
                  </h3>

                  <p className="text-cream-500 mb-4 text-base leading-relaxed">
                    {t(project.shortDescription)}
                  </p>

                  {/* Client Impact */}
                  <motion.div
                    className="mb-6 p-4 bg-primary-500/10 rounded-lg border-l-4 border-primary-500 relative overflow-hidden"
                    whileHover={{ borderLeftWidth: '6px' }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary-400/5 rounded-bl-full"></div>

                    <p className="text-sm font-semibold text-primary-400 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                      {t(sections.projects.clientImpact)}
                    </p>
                    <p className="text-sm text-cream-600 leading-relaxed">
                      {t(project.clientImpact)}
                    </p>
                  </motion.div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-sage-400 mb-3 flex items-center gap-2">
                      <span className="w-1 h-4 bg-sage-400 rounded-full"></span>
                      {t(sections.projects.techStack)}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="primary">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  {project.highlights && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-sage-400 mb-3 flex items-center gap-2">
                        <span className="w-1 h-4 bg-sage-400 rounded-full"></span>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {t(project.highlights).slice(0, 4).map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="text-sm text-cream-600 flex items-start leading-relaxed group/item"
                          >
                            <span className="text-primary-400 mr-2 group-hover/item:scale-125 transition-transform inline-block">✓</span>
                            <span className="group-hover/item:text-cream-500 transition-colors">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    variant="primary"
                    size="md"
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t(sections.projects.liveDemo)}
                  </Button>
                  {project.githubUrl === null && (
                    <div className="flex-1 flex items-center justify-center px-4 py-3 bg-earth-700 rounded-lg text-sm text-cream-600 border border-earth-600">
                      🔒 {t(sections.projects.privateRepo)}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
