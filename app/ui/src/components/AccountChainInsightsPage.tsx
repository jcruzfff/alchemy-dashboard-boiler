'use client';

import React from 'react';
import { StatCard } from './StatCard';
import { ChartCard } from './ChartCard';

export function AccountChainInsightsPage() {
  const [activeTab, setActiveTab] = React.useState<string>('Overview');
  
  const tabs = ['Overview', 'Developer Growth', 'API Usage', 'Chain Flow', 'Geography', 'Institutions'];

  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[48px] pb-[48px] relative w-full min-h-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        {/* Page Header */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-full">
            {/* Title and Description */}
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-[320px] not-italic relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] relative shrink-0 text-[24px] text-[#0a0a0a] tracking-[-0.48px] w-full">
                Chain Analytics Dashboard
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[#525252] w-full">
                Comprehensive analytics for blockchain development
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="content-stretch flex gap-[8px] isolate items-center relative shrink-0">
              {/* Export Data Button */}
              <button className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 z-[2] hover:bg-[#fafafa] transition-colors">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[#525252] text-nowrap whitespace-pre">
                  Export Data
                </p>
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="block max-w-none size-full" src="/icons/arrowup-icon.svg" />
                </div>
              </button>
              
              {/* Refresh Button */}
              <button className="bg-[#363ff9] box-border content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 z-[1] hover:bg-[#2d34d4] transition-colors">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="block max-w-none size-full" src="/icons/refresh-icon.svg" />
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[#ffffff] text-nowrap whitespace-pre">
                  Refresh
                </p>
              </button>
            </div>
          </div>
          
          {/* Tab Bar */}
          <div className="border-[0px_0px_1px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[8px] relative shrink-0 ${
                  activeTab === tab 
                    ? 'border-[0px_0px_2px] border-[#363ff9] border-solid' 
                    : ''
                }`}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
                  activeTab === tab ? 'text-[#363ff9]' : 'text-[#737373] hover:text-[#525252]'
                }`}>
                  {tab}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards Row */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          <StatCard
            label="Total Developers on Chain"
            value="47,736"
            subtext="2,847 new this month"
            percentage="18%"
          />
          <StatCard
            label="Unique Teams Building"
            value="8,247"
            subtext="394 teams added this month"
            percentage="12%"
          />
          <StatCard
            label="API Calls (30d)"
            value="2.3B"
            subtext="76.7M daily average"
            percentage="25%"
          />
          <StatCard
            label="Onchain Transactions"
            value="847M"
            subtext="28.2M this month via Alchemy"
            percentage="31%"
          />
        </div>

        {/* Charts Row 1 - Developer Growth & API Call Volume */}
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <ChartCard
            title="New Developers by Month"
            subtitle="Net new API key registrations (monthly cadence)"
            className="flex-1"
            width="w-full"
            data={[
              { name: 'Jan', newDevs: 847 },
              { name: 'Feb', newDevs: 1124 },
              { name: 'Mar', newDevs: 1589 },
              { name: 'Apr', newDevs: 1923 },
              { name: 'May', newDevs: 2347 },
              { name: 'Jun', newDevs: 2847 },
            ]}
            lines={[
              { dataKey: 'newDevs', stroke: '#363ff9', label: 'New Developers' }
            ]}
            yAxisFormatter={(value: number) => {
              if (value >= 1000) {
                return `${(value / 1000).toFixed(1)}K`;
              }
              return value.toString();
            }}
            yAxisDomain={[0, 3000]}
            yAxisTicks={[3000, 2500, 2000, 1500, 1000, 500, 0]}
            showArea={true}
          />
          <ChartCard
            title="Compute Units Consumed"
            subtitle="Total API usage across all pricing tiers"
            className="flex-1"
            width="w-full"
            data={[
              { name: 'Week 1', free: 1200000000, growth: 3500000000, scale: 2800000000, enterprise: 6500000000 },
              { name: 'Week 2', free: 1500000000, growth: 4200000000, scale: 3300000000, enterprise: 7800000000 },
              { name: 'Week 3', free: 1800000000, growth: 5100000000, scale: 4100000000, enterprise: 9200000000 },
              { name: 'Week 4', free: 2100000000, growth: 5800000000, scale: 4700000000, enterprise: 10800000000 },
              { name: 'Week 5', free: 2500000000, growth: 6900000000, scale: 5500000000, enterprise: 12400000000 },
              { name: 'Week 6', free: 2800000000, growth: 7800000000, scale: 6200000000, enterprise: 14200000000 },
            ]}
            lines={[
              { dataKey: 'free', stroke: '#d4d4d4', label: 'Free Tier', stackId: 'stack' },
              { dataKey: 'growth', stroke: '#ec4899', label: 'Growth Tier', stackId: 'stack' },
              { dataKey: 'scale', stroke: '#7c3aed', label: 'Scale Tier', stackId: 'stack' },
              { dataKey: 'enterprise', stroke: '#363ff9', label: 'Enterprise', stackId: 'stack' }
            ]}
            yAxisFormatter={(value: number) => {
              if (value >= 1000000000) {
                return `${(value / 1000000000).toFixed(1)}B`;
              }
              if (value >= 1000000) {
                return `${(value / 1000000).toFixed(0)}M`;
              }
              return value.toString();
            }}
            yAxisDomain={[0, 35000000000]}
            yAxisTicks={[35000000000, 30000000000, 25000000000, 20000000000, 15000000000, 10000000000, 5000000000, 0]}
            showArea={true}
          />
        </div>

        {/* Charts Row 2 - Transaction Volume & Success Rate */}
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <ChartCard
            title="Alchemy-Powered Transaction Share"
            subtitle="Percent of network transactions handled via Alchemy apps"
            className="basis-0 grow min-h-px min-w-px"
            width="w-full"
          />
        </div>

        {/* Charts Row 3 - Developers Chain Migration Flow */}
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <ChartCard
            title="Multi-Chain Developer Adoption"
            subtitle="Developers active on two or more chains (monthly share)"
            className="basis-0 grow min-h-px min-w-px"
            width="w-full"
          />
        </div>

        {/* Charts Row 4 - Global Developer Distribution & Fortune 1000 */}
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <ChartCard
            title="Global Developer Distribution"
            subtitle="Developer footprint by region and solution type"
            className="flex-1"
            width="w-full"
          />
          <ChartCard
            title="Top Builders Using Alchemy"
            subtitle="Most active developers by API usage volume (monthly)"
            className="flex-1"
            width="w-full"
            chartType="horizontalBar"
            barColor="#363ff9"
            data={[
              { rank: 1, name: 'Uniswap', value: 450000000 },
              { rank: 2, name: 'OpenSea', value: 380000000 },
              { rank: 3, name: 'MetaMask', value: 320000000 },
              { rank: 4, name: 'Aave', value: 280000000 },
              { rank: 5, name: 'Compound', value: 240000000 },
              { rank: 6, name: '1inch', value: 190000000 },
              { rank: 7, name: 'Curve', value: 150000000 },
              { rank: 8, name: 'SushiSwap', value: 125000000 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

