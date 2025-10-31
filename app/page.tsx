'use client';

import { useState } from 'react';
import { Dashboard } from './ui/src/components/Dashboard';
import { AccountDashboard } from './ui/src/components/AccountDashboard';

export default function Home() {
  const [isAccountLevel, setIsAccountLevel] = useState(true);

  return isAccountLevel ? (
    <AccountDashboard onNavigateToApp={() => setIsAccountLevel(false)} />
  ) : (
    <Dashboard onNavigateToAccount={() => setIsAccountLevel(true)} />
  );
}
