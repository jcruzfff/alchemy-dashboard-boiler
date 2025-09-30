import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

export function Avatar({ 
  src = '/icons/Logo.svg', 
  alt = 'Avatar', 
  size = 'sm',
  className = ''
}: AvatarProps) {
  const sizeClass = sizeClasses[size];
  
  return (
    <div className={`relative rounded-full overflow-hidden ${sizeClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
