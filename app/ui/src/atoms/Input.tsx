import React from 'react';
import { Icon } from './Icon';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  icon?: string;
  className?: string;
  disabled?: boolean;
}

export function Input({ 
  placeholder = '', 
  value = '', 
  onChange,
  icon,
  className = '',
  disabled = false
}: InputProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full h-9 px-3 py-2 bg-ui-background border border-ui-border rounded-ui-lg text-ui-paragraph-200 placeholder-ui-tertiary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Icon name={icon} size="sm" className="text-ui-icon-secondary" />
          </div>
        )}
      </div>
    </div>
  );
}
