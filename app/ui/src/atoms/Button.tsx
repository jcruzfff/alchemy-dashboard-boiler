import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const variantClasses = {
  primary: 'bg-ui-brand text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500',
  secondary: 'bg-ui-button-secondary text-ui-secondary border border-ui-border hover:bg-ui-button-ghost-hover focus:ring-2 focus:ring-blue-500',
  ghost: 'text-ui-secondary hover:bg-ui-button-ghost-hover focus:ring-2 focus:ring-blue-500',
};

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-ui-label-200',
  lg: 'px-4 py-3 text-lg',
};

export function Button({ 
  children, 
  variant = 'secondary', 
  size = 'md', 
  disabled = false,
  onClick,
  className = ''
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-ui-lg font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];
  
  return (
    <button
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
