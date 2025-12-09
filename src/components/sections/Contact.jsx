import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, Send } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { contact, sections } from '../../data/portfolio';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    console.log('Form submitted:', formData);

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormStatus(null);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: t(sections.contact.email),
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'text-primary-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View Profile',
      href: contact.github,
      color: 'text-sage-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: contact.linkedin,
      color: 'text-primary-400',
    },
  ];

  return (
    <Section
      id="contact"
      title={t(sections.contact.title)}
      subtitle={t(sections.contact.subtitle)}
      className="bg-earth-900"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cream-100">
              {t(sections.contact.letsConnect)}
            </h3>
            <p className="text-cream-500 mb-6 leading-relaxed">
              {t(sections.contact.intro)}
            </p>
          </div>

          {/* Freelance Services Highlight */}
          <Card hover={false} className="p-6 bg-gradient-to-br from-primary-500/10 to-sage-500/10 border-primary-400/30">
            <h4 className="text-lg font-bold mb-3 text-primary-400">
              {t(sections.contact.freelanceServices)}
            </h4>
            <p className="text-cream-400 text-sm leading-relaxed mb-4">
              {t(sections.contact.freelanceDescription)}
            </p>
            <div className="flex items-center gap-2 text-primary-300 text-sm font-medium">
              <span className="inline-block w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
              {t(sections.contact.availability)}
            </div>
          </Card>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card hover={true} tilt={false} className="p-4">
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <motion.div
                      className={`${method.color} group-hover:scale-110 transition-transform duration-200`}
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <method.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-medium text-cream-100 group-hover:text-primary-400 transition-colors">
                        {method.label}
                      </p>
                      <p className="text-sm text-cream-600">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="pt-4">
            <Button
              href={contact.resume}
              target="_blank"
              variant="primary"
              size="lg"
              className="w-full"
            >
              <Download className="w-5 h-5 mr-2" />
              {t(sections.contact.downloadResume)}
            </Button>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card hover={false} className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-cream-100">
              {t(sections.contact.sendMessage)}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-cream-300"
                >
                  {t(sections.contact.yourName)}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-earth-600 bg-earth-700 text-cream-100 placeholder-cream-600 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-cream-300"
                >
                  {t(sections.contact.yourEmail)}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-earth-600 bg-earth-700 text-cream-100 placeholder-cream-600 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-cream-300"
                >
                  {t(sections.contact.message)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-earth-600 bg-earth-700 text-cream-100 placeholder-cream-600 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-200 resize-none"
                  placeholder={t(sections.contact.messagePlaceholder)}
                />
              </div>

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-primary-500/20 border border-primary-400/50 text-primary-300 rounded-lg"
                >
                  {t(sections.contact.successMessage)}
                </motion.div>
              )}

              <Button type="submit" variant="primary" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                {t(sections.contact.send)}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
