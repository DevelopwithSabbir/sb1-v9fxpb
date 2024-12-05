import React from 'react';
import clsx from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-8 py-3 rounded-full font-semibold transition duration-300';
  
  const variants = {
    primary: 'bg-white text-blue-600 hover:bg-gray-100',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-600',
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;