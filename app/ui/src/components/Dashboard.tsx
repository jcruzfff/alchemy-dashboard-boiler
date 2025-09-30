import React from 'react';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';

interface DashboardProps {
  className?: string;
}

export function Dashboard({ className = '' }: DashboardProps) {
  return (
    <div className={`bg-neutral-50 relative size-full ${className}`}>
      {/* Top Navigation */}
      <TopNav />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <MainContent />
    </div>
  );
}
