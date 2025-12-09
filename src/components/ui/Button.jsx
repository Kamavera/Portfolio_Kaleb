import { motion } from 'framer-motion';

/**
 * Reusable Button component with different variants
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button style variant: 'primary', 'secondary', 'outline', 'ghost'
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.href - If provided, renders as anchor tag
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-earth-950 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary-500 text-earth-950 hover:bg-primary-400 focus:ring-primary-400 shadow-mint hover:shadow-earth-lg font-semibold',
    secondary: 'bg-terracotta-500 text-cream-100 hover:bg-terracotta-600 focus:ring-terracotta-400 shadow-earth hover:shadow-earth-lg',
    outline: 'border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-earth-950 focus:ring-primary-400 backdrop-blur-sm',
    ghost: 'text-cream-200 hover:bg-earth-800 hover:text-primary-400 focus:ring-earth-700',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target, rel: rel || (target === '_blank' ? 'noopener noreferrer' : undefined) } : {};

  return (
    <Component
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...linkProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
