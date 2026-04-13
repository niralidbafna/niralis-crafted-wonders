import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-light-gold to-gold text-white hover:shadow-lg hover:brightness-110',
    secondary: 'bg-cream border-2 border-gold text-dark-gray font-semibold hover:bg-gold hover:text-white',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-white',
    gold: 'bg-gold text-white hover:shadow-lg hover:brightness-110',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`
        font-semibold rounded-lg transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
