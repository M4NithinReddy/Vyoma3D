import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { hoverScale, tapScale } from '../lib/animations';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, disabled, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900';

    const variants = {
      primary: 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 focus-visible:ring-orange-500',
      secondary: 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 focus-visible:ring-violet-500',
      outline: 'border-2 border-violet-500/50 text-violet-400 hover:border-violet-500 hover:bg-violet-500/10 focus-visible:ring-violet-500',
      ghost: 'text-gray-300 hover:text-white hover:bg-white/10 focus-visible:ring-gray-500'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled ? hoverScale : {}}
        whileTap={!disabled ? tapScale : {}}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
