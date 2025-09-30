import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gray' | 'outlined';
  className?: string;
}

const variantClasses = {
  gray: 'bg-neutral-100 text-neutral-950',
  outlined: 'bg-white text-neutral-950 border border-neutral-200',
};

export function Badge({ 
  children, 
  variant = 'outlined',
  className = ''
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium px-2 py-px text-xs';
  const variantClass = variantClasses[variant];
  
  return (
    <span className={`${baseClasses} ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
