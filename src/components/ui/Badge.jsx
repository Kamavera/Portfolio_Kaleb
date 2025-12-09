/**
 * Badge component for displaying tags, skills, and labels
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} props.variant - Badge color variant
 * @param {React.ReactNode} props.icon - Optional icon to display
 * @param {string} props.className - Additional CSS classes
 */
const Badge = ({
  children,
  variant = 'default',
  icon: Icon,
  className = '',
}) => {
  const variants = {
    default: 'bg-earth-700 text-cream-200 border border-earth-600',
    primary: 'bg-primary-500/20 text-primary-300 border border-primary-500/40',
    success: 'bg-green-500/20 text-green-300 border border-green-500/40',
    warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40',
    error: 'bg-red-500/20 text-red-300 border border-red-500/40',
    purple: 'bg-purple-500/20 text-purple-300 border border-purple-500/40',
    blue: 'bg-blue-500/20 text-blue-300 border border-blue-500/40',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};

export default Badge;
