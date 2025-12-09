import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { useLanguage } from '../../contexts/LanguageContext';
import { experience, education, sections } from '../../data/portfolio';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <Section
      id="experience"
      title={t(sections.experience?.title || { en: 'Experience & Education', es: 'Experiencia y Educación' })}
      subtitle={t(sections.experience?.subtitle || { en: 'My professional journey and academic background', es: 'Mi trayectoria profesional y formación académica' })}
      className="bg-earth-950 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-400/20 via-sage-400/20 to-transparent hidden md:block"></div>

        {/* Professional Experience */}
        <div className="mb-16">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12 md:mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:flex items-center justify-center">
                <div className="w-12 h-12 bg-earth-900 rounded-full border-4 border-primary-400 flex items-center justify-center z-10">
                  <Briefcase className="w-5 h-5 text-primary-400" />
                </div>
              </div>

              {/* Content Card */}
              <div className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'}`}>
                <Card tilt={true} className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary-500/20 rounded-lg border border-primary-500/30 md:hidden">
                      <Briefcase className="w-5 h-5 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-cream-100">
                          {t(exp.position)}
                        </h3>
                        <Badge variant="primary" className="text-xs">
                          {t(exp.type)}
                        </Badge>
                      </div>
                      <p className="text-lg text-primary-400 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-cream-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {t(exp.location)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {t(exp.duration)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-cream-500 mb-4 leading-relaxed">
                    {t(exp.description)}
                  </p>

                  {/* Responsibilities */}
                  {exp.responsibilities && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-sage-400 mb-2 flex items-center gap-2">
                        <span className="w-1 h-4 bg-sage-400 rounded-full"></span>
                        Key Responsibilities
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {t(exp.responsibilities).map((resp, idx) => (
                          <li key={idx} className="text-sm text-cream-600 flex items-start">
                            <span className="text-primary-400 mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills */}
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="default" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Timeline dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden md:flex items-center justify-center">
            <div className="w-12 h-12 bg-earth-900 rounded-full border-4 border-sage-400 flex items-center justify-center z-10">
              <GraduationCap className="w-5 h-5 text-sage-400" />
            </div>
          </div>

          {/* Content Card */}
          <div className="md:w-[calc(50%-3rem)] md:mr-auto md:pr-12">
            <Card tilt={true} className="p-6">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-sage-500/20 rounded-lg border border-sage-500/30 md:hidden">
                  <GraduationCap className="w-5 h-5 text-sage-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-cream-100">
                      {t(education.degree)}
                    </h3>
                    <Badge variant="success" className="text-xs">
                      {t(education.status)}
                    </Badge>
                  </div>
                  <p className="text-lg text-sage-400 font-semibold mb-1">
                    {t(education.institution)}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-cream-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {t(education.location)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {t(education.graduation)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="space-y-4">
                {/* Programming Courses */}
                <div>
                  <h4 className="text-sm font-semibold text-primary-400 mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary-400 rounded-full"></span>
                    Programming & Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {t(education.coursework.programming).map((course, idx) => (
                      <Badge key={idx} variant="primary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Systems Courses */}
                <div>
                  <h4 className="text-sm font-semibold text-sage-400 mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 bg-sage-400 rounded-full"></span>
                    Systems & Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {t(education.coursework.systems).slice(0, 5).map((course, idx) => (
                      <Badge key={idx} variant="default" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;
