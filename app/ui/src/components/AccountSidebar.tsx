'use client';

import React from 'react';

interface AccountSidebarProps {
  className?: string;
  activePage?: string;
  onPageChange?: (page: string) => void;
}

export function AccountSidebar({ className = '', activePage = 'Data APIs', onPageChange }: AccountSidebarProps) {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };

  return (
    <div className={`absolute bg-white content-stretch flex h-[calc(100vh-56px)] items-start left-0 top-14 w-55 border-r z-40 ${className}`} style={{borderColor: '#F5F5F5'}}>
      <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0">
        {/* Navigation */}
        <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow isolate items-start min-h-px min-w-px pb-0 pt-4 px-0 relative shrink-0 w-full">
          {/* Search bar */}
          <div className="box-border content-stretch flex flex-col gap-5 items-start px-4 py-0 relative shrink-0 w-full z-[2]">
            <button className="box-border content-stretch cursor-pointer flex flex-col gap-1 items-start overflow-visible p-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                <div className="bg-white h-9 relative rounded-lg shrink-0 w-full">
                  <div className="box-border content-stretch flex gap-2 h-9 items-center overflow-clip px-3 py-2 relative w-full">
                    <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-3.5">
                        <img alt="" className="block max-w-none size-full" src="/icons/MagnifyingGlass-bold.svg" />
                      </div>
                      <div className="basis-0 font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-sm text-neutral-500 text-left">
                        <p className="leading-6">Search</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border border-neutral-200 border-solid inset-[-1px] pointer-events-none rounded-lg" />
                </div>
              </div>
            </button>
          </div>

          {/* SidebarContent */}
          <div className="box-border content-stretch flex flex-col gap-2 items-start px-4 py-0 relative shrink-0 w-full z-[1]">
            {/* Top Group */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" style={{ gap: '4px' }}>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Home' ? 'bg-[#ECF3FF]' : hoveredItem === 'Home' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Home')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Home')}
                >
                  <div className="relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Home.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Home</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Metrics' ? 'bg-[#ECF3FF]' : hoveredItem === 'Metrics' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Metrics')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Metrics')}
                >
                  <div className="relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/metrics.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Metrics</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Apps' ? 'bg-[#ECF3FF]' : hoveredItem === 'Apps' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Apps')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Apps')}
                >
                  <div className="relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Cube-bold.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Apps</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Chains' ? 'bg-[#ECF3FF]' : hoveredItem === 'Chains' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Chains')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Chains')}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Network-bold.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Chains</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Chain Insights' ? 'bg-[#ECF3FF]' : hoveredItem === 'Chain Insights' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Chain Insights')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Chain Insights')}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Lightning-bold.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Chain Insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <div className="h-px w-full" style={{backgroundColor: '#F5F5F5'}} />
              </div>
            </div>

            {/* Main Navigation Group */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" style={{ gap: '4px' }}>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Node' ? 'bg-[#ECF3FF]' : hoveredItem === 'Node' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Node')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Node')}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Node.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Node</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Data APIs' ? 'bg-[#ECF3FF]' : hoveredItem === 'Data APIs' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Data APIs')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Data APIs')}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Data.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Data APIs</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Wallets' ? 'bg-[#ECF3FF]' : hoveredItem === 'Wallets' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Wallets')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Wallets')}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Smart Wallet.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Wallets</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Transactions' ? 'bg-[#ECF3FF]' : hoveredItem === 'Transactions' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Transactions')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Transactions')}
                >
                  <div className="relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/transaction.png" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Transactions</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Rollups' ? 'bg-[#ECF3FF]' : hoveredItem === 'Rollups' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Rollups')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Rollups')}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Rollups.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Rollups</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <div className="h-px w-full" style={{backgroundColor: '#F5F5F5'}} />
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Tools' ? 'bg-[#ECF3FF]' : hoveredItem === 'Tools' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Tools')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Tools')}
                >
                  <div className="relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Tools.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Tools</p>
                  </div>
                  <div className="relative shrink-0 size-3">
                    <img alt="" className="block max-w-none size-full" src="/icons/CaretDown-bold.svg" />
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    activePage === 'Settings' ? 'bg-[#ECF3FF]' : hoveredItem === 'Settings' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Settings')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => onPageChange?.('Settings')}
                >
                  <div className="relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Settings.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Settings</p>
                  </div>
                  <div className="relative shrink-0 size-3">
                    <img alt="" className="block max-w-none size-full" src="/icons/CaretDown-bold.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="box-border content-stretch flex flex-col gap-4 items-end pb-6 pt-0 px-4 relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center relative rounded-md shrink-0 size-7">
            <button className="content-stretch flex items-center justify-center relative rounded-md size-full hover:bg-neutral-100 transition-colors">
              <div className="content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[28px]">
                <div className="relative size-[16px]">
                  <img alt="Close" className="block max-w-none size-full" src="/icons/close.svg" />
                </div>
              </div>
            </button>
          </div>
          <button className="bg-white border border-[#e5e5e5] border-solid box-border content-stretch flex gap-2 h-8 items-center justify-center px-2.5 py-2 relative rounded-lg shrink-0 w-full">
            <div className="relative shrink-0 size-3.5">
              <img alt="" className="block max-w-none size-full" src="/icons/ChatsCircle-bold.svg" />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-xs text-[#525252] text-nowrap whitespace-pre">
              Share feedback
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
