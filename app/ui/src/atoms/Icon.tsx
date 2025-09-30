import React from 'react';

interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const iconMap: Record<string, string> = {
  'lightning': '/icons/Lightning-bold.svg',
  'node': '/icons/Node.svg',
  'data': '/icons/Data.svg',
  'smart-wallet': '/icons/Smart Wallet.svg',
  'rollups': '/icons/Rollups.svg',
  'tools': '/icons/Tools.svg',
  'key': '/icons/Key-bold.svg',
  'network': '/icons/Network-bold.svg',
  'settings': '/icons/Settings.svg',
  'users': '/icons/Users-bold.svg',
  'cube': '/icons/Cube-bold.svg',
  'chats': '/icons/ChatsCircle-bold.svg',
  'caret-down': '/icons/CaretDown-bold.svg',
  'caret-up-down': '/icons/CaretUpDown-bold.svg',
  'caret-right': '/icons/CaretRight-bold.svg',
  'copy': '/icons/Copy-bold.svg',
  'magnifying-glass': '/icons/MagnifyingGlass-bold.svg',
  'logo': '/icons/Logo.svg',
  'header-button': '/icons/Header Button (app-centric).svg',
};

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5', 
  lg: 'w-6 h-6',
};

export function Icon({ name, size = 'md', className = '' }: IconProps) {
  const iconPath = iconMap[name];
  const sizeClass = sizeMap[size];
  
  if (!iconPath) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <img
      src={iconPath}
      alt={name}
      className={`${sizeClass} ${className}`}
    />
  );
}
