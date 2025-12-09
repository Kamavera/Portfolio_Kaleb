import { motion } from 'framer-motion';

/**
 * Reusable Card component with hover effects
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Enable hover effects
 * @param {boolean} props.tilt - Enable 3D tilt effect on hover
 */
const Card = ({ children, className = '', hover = true, tilt = false, ...props }) => {
  const baseStyles = 'bg-earth-800 rounded-xl border border-earth-600 overflow-hidden';
  const hoverStyles = hover ? 'transition-all duration-150' : '';

  // 3D tilt hover effect with mint glow
  const tiltHover = tilt ? {
    y: -8,
    rotateX: 5,
    rotateY: 5,
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgba(45, 42, 38, 0.4), 0 10px 10px -5px rgba(45, 42, 38, 0.3), 0 0 20px -5px rgba(157, 223, 186, 0.3)',
    borderColor: 'rgba(157, 223, 186, 0.5)',
    transition: { duration: 0.15 }
  } : (hover ? {
    y: -8,
    boxShadow: '0 20px 25px -5px rgba(45, 42, 38, 0.3), 0 10px 10px -5px rgba(45, 42, 38, 0.2)',
    transition: { duration: 0.15 }
  } : {});

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      style={tilt ? { perspective: 1000 } : {}}
      whileHover={tiltHover}
      initial={{ opacity: 0.8, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
