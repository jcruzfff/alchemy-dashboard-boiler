'use client';

import React from 'react';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';

interface DashboardProps {
  className?: string;
  onNavigateToAccount?: () => void;
}

export function Dashboard({ className = '', onNavigateToAccount }: DashboardProps) {
  const [activePage, setActivePage] = React.useState<string>('Smart Wallets');


  return (
    <div className={`bg-neutral-50 relative size-full ${className}`}>
      {/* Top Navigation */}
      <TopNav onLogoClick={onNavigateToAccount} showAppBreadcrumb={true} />
      
      {/* Sidebar */}
      <Sidebar 
        activePage={activePage} 
        onPageChange={setActivePage}
      />
      
      {/* Main Content Area */}
      <MainContent activePage={activePage} />
    </div>
  );
}
