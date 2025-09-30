import React from 'react';
import { Icon } from '../atoms/Icon';

interface SidebarMenuItemProps {
  icon: string;
  label: string;
  hasDropdown?: boolean;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function SidebarMenuItem({ 
  icon, 
  label, 
  hasDropdown = false,
  active = false,
  onClick,
  className = ''
}: SidebarMenuItemProps) {
  const baseClasses = 'flex items-center gap-2 p-2 rounded-ui-sm w-full text-ui-label-200 font-medium transition-colors cursor-pointer focus:outline-none';
  const activeClasses = active 
    ? 'bg-ui-button-ghost-hover text-ui-brand' 
    : 'text-ui-secondary hover:bg-ui-button-ghost-hover hover:text-ui-primary';
  
  return (
    <button
      className={`${baseClasses} ${activeClasses} ${className}`}
      onClick={onClick}
    >
      <Icon name={icon} size="sm" className="flex-shrink-0" />
      <span className="flex-1 text-left truncate">{label}</span>
      {hasDropdown && (
        <Icon name="caret-down" size="sm" className="flex-shrink-0" />
      )}
    </button>
  );
}
