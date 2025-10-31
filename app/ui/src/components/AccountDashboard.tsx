'use client';

import React from 'react';
import { AccountSidebar } from './AccountSidebar';
import { TopNav } from './TopNav';
import { AccountHomePage } from './AccountHomePage';
import { AccountMetricsPage } from './AccountMetricsPage';
import { AccountAppsPage } from './AccountAppsPage';
import { AccountChainsPage } from './AccountChainsPage';
import { AccountChainInsightsPage } from './AccountChainInsightsPage';
import { AccountNodePage } from './AccountNodePage';
import { AccountDataAPIsPage } from './AccountDataAPIsPage';
import { AccountWalletsPage } from './AccountWalletsPage';
import { AccountTransactionsPage } from './AccountTransactionsPage';
import { AccountRollupsPage } from './AccountRollupsPage';
import { AccountToolsPage } from './AccountToolsPage';
import { AccountSettingsPage } from './AccountSettingsPage';

interface AccountDashboardProps {
  className?: string;
  onNavigateToApp?: () => void;
}

export function AccountDashboard({ className = '', onNavigateToApp }: AccountDashboardProps) {
  const [activePage, setActivePage] = React.useState<string>('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <AccountHomePage />;
      case 'Metrics':
        return <AccountMetricsPage />;
      case 'Apps':
        return <AccountAppsPage onSelectApp={onNavigateToApp} />;
      case 'Chains':
        return <AccountChainsPage />;
      case 'Chain Insights':
        return <AccountChainInsightsPage />;
      case 'Node':
        return <AccountNodePage />;
      case 'Data APIs':
        return <AccountDataAPIsPage />;
      case 'Wallets':
        return <AccountWalletsPage />;
      case 'Transactions':
        return <AccountTransactionsPage />;
      case 'Rollups':
        return <AccountRollupsPage />;
      case 'Tools':
        return <AccountToolsPage />;
      case 'Settings':
        return <AccountSettingsPage />;
      default:
        return <AccountDataAPIsPage />;
    }
  };

  return (
    <div className={`bg-neutral-50 relative w-screen h-screen overflow-hidden ${className}`}>
      {/* Top Navigation */}
      <TopNav showAppBreadcrumb={false} />
      
      {/* Sidebar - Account Level */}
      <AccountSidebar 
        activePage={activePage} 
        onPageChange={setActivePage}
      />
      
      {/* Main Content Area */}
      <div className="absolute left-55 top-14 right-0 bottom-0 overflow-auto bg-neutral-50 z-10">
        {renderPage()}
      </div>
    </div>
  );
}
