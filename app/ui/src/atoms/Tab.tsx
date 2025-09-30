import React from 'react';

interface TabProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tab({ 
  children, 
  active = false, 
  onClick,
  className = ''
}: TabProps) {
  const baseClasses = 'px-0 py-2 text-ui-label-200 font-medium cursor-pointer transition-colors focus:outline-none';
  const activeClasses = active 
    ? 'text-ui-brand border-b-2 border-ui-brand' 
    : 'text-ui-tertiary hover:text-ui-secondary';
  
  return (
    <button
      className={`${baseClasses} ${activeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
