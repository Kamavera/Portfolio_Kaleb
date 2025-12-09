import { motion } from 'framer-motion';

/**
 * Section wrapper component for main page sections
 * @param {Object} props - Component props
 * @param {string} props.id - Section ID for navigation
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS classes
 */
const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-normal text-sage-400">/</span>
                <h2 className="text-4xl sm:text-5xl font-bold text-cream-100">
                  {title}
                </h2>
              </div>
            )}
            {title && (
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mb-4" />
            )}
            {subtitle && (
              <p className="text-lg sm:text-xl text-cream-500 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
