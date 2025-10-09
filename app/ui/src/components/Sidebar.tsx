'use client';

import React from 'react';

interface SidebarProps {
  className?: string;
  activePage?: string;
  onPageChange?: (page: string) => void;
}

// Icon components using real SVG files
function LightningBold() {
  return (
    <img alt="" className="block max-w-none size-full" src="/icons/Lightning-bold.svg" />
  );
}

function Node() {
  return (
    <img alt="" className="block max-w-none size-full" src="/icons/Node.svg" />
  );
}

function Data() {
  return (
    <img alt="" className="block max-w-none size-full" src="/icons/Data.svg" />
  );
}

function SmartWallet() {
  return (
    <img alt="" className="block max-w-none size-full" src="/icons/Smart Wallet.svg" />
  );
}

function Rollups() {
  return (
    <img alt="" className="block max-w-none size-full" src="/icons/Rollups.svg" />
  );
}

function Tools() {
  return (
    <img alt="" className="block max-w-none size-full" src="/icons/Tools.svg" />
  );
}

function KeyBold() {
  return (
    <img alt="" className="block max-w-none size-full" src="/icons/Key-bold.svg" />
  );
}

function NetworkBold() {
  return (
    <img alt="" className="block max-w-none size-full" src="/icons/Network-bold.svg" />
  );
}

function CaretDownBold() {
  return (
    <img alt="" className="block max-w-none size-full" src="/icons/CaretDown-bold.svg" />
  );
}

function SidebarHeaderButtonAppCentric() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[6px] size-full">
      <div className="flex h-[20px] items-center justify-center relative shrink-0 w-[20px]">
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[20px]">
            <img alt="" className="block max-w-none size-full" src="/icons/Header Button (app-centric).svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ className = '', activePage = 'Smart Wallets', onPageChange }: SidebarProps) {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set(['Wallets']));
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
    <div className={`absolute bg-white content-stretch flex h-[calc(100vh-56px)] items-start left-0 top-14 w-55 border-r ${className}`} style={{borderColor: '#F5F5F5'}}>
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
            {/* App Dashboard Group */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" style={{ gap: '4px' }}>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    hoveredItem === 'App Dashboard' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('App Dashboard')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative shrink-0 size-4">
                    <LightningBold />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">App Dashboard</p>
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
                    hoveredItem === 'Node' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Node')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <Node />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Node</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    hoveredItem === 'Data' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Data')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => toggleExpanded('Data')}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <Data />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Data</p>
                  </div>
                  <div className="relative shrink-0 size-3">
                    <CaretDownBold />
                  </div>
                </div>
                
                {/* Data Dropdown */}
                {expandedItems.has('Data') && (
                  <div className="w-full pl-6 mt-1 relative">
                    {/* Vertical line positioned in the middle of the Data icon */}
                    <div className="absolute left-[15px] top-0 w-px h-full bg-[#F5F5F5]"></div>
                    <div className="space-y-1">
                      {['NFT API', 'Token API', 'Transfers API', 'Smart Websockets', 'Webhooks', 'Subgraphs'].map((item, index) => (
                        <div 
                          key={item}
                          className={`px-2 py-1 text-sm text-neutral-600 cursor-pointer transition-colors rounded-sm h-[29px] flex items-center ${
                            hoveredItem === item ? 'bg-[#ECF3FF]' : ''
                          }`}
                          onMouseEnter={() => setHoveredItem(item)}
                          onMouseLeave={() => setHoveredItem(null)}
                          style={{ marginBottom: '4px' }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    hoveredItem === 'Wallets' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Wallets')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => toggleExpanded('Wallets')}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <SmartWallet />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Wallets</p>
                  </div>
                  <div className="relative shrink-0 size-3">
                    <CaretDownBold />
                  </div>
                </div>
                
                {/* Wallets Dropdown */}
                {expandedItems.has('Wallets') && (
                  <div className="w-full pl-6 mt-1 relative">
                    {/* Vertical line positioned in the middle of the Wallets icon */}
                    <div className="absolute left-[15px] top-0 w-px h-full bg-[#F5F5F5]"></div>
                    <div className="space-y-1">
                      {['Smart Wallets', 'Gas Manager', 'Portfolio API', 'Swaps', 'Funding'].map((item, index) => (
                        <div 
                          key={item}
                          className={`px-2 py-1 text-sm cursor-pointer transition-colors rounded-sm h-[29px] flex items-center ${
                            activePage === item ? 'bg-[#ECF3FF] text-neutral-950' : 
                            hoveredItem === item ? 'bg-[#ECF3FF] text-neutral-600' : 
                            'text-neutral-600'
                          }`}
                          onMouseEnter={() => setHoveredItem(item)}
                          onMouseLeave={() => setHoveredItem(null)}
                          onClick={() => onPageChange?.(item)}
                          style={{ marginBottom: '4px' }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    hoveredItem === 'Rollups' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Rollups')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <Rollups />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Rollups</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    hoveredItem === 'Tools' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Tools')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => toggleExpanded('Tools')}
                >
                  <div className="relative shrink-0 size-4">
                    <Tools />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Tools</p>
                  </div>
                  <div className="relative shrink-0 size-3">
                    <CaretDownBold />
                  </div>
                </div>
                
                {/* Tools Dropdown */}
                {expandedItems.has('Tools') && (
                  <div className="w-full pl-6 mt-1 relative">
                    {/* Vertical line positioned in the middle of the Tools icon */}
                    <div className="absolute left-[15px] top-0 w-px h-full bg-[#F5F5F5]"></div>
                    <div className="space-y-1">
                      {['Request Logs', 'Alerts', 'Mempool', 'Sandbox'].map((item, index) => (
                        <div 
                          key={item}
                          className={`px-2 py-1 text-sm text-neutral-600 cursor-pointer transition-colors rounded-sm h-[29px] flex items-center ${
                            hoveredItem === item ? 'bg-[#ECF3FF]' : ''
                          }`}
                          onMouseEnter={() => setHoveredItem(item)}
                          onMouseLeave={() => setHoveredItem(null)}
                          style={{ marginBottom: '4px' }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <div className="h-px w-full" style={{backgroundColor: '#F5F5F5'}} />
              </div>
            </div>

            {/* Settings Group */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" style={{ gap: '4px' }}>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[29px] ${
                    hoveredItem === 'Security' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Security')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative shrink-0 size-4">
                    <KeyBold />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Security</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    hoveredItem === 'Networks' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Networks')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative shrink-0 size-4">
                    <NetworkBold />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Networks</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div 
                  className={`box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full cursor-pointer transition-colors h-[37px] ${
                    hoveredItem === 'Apps settings' ? 'bg-[#ECF3FF]' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem('Apps settings')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Settings.svg" />
                  </div>
                  <div className="basis-0 font-medium-inter grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Apps settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="box-border content-stretch flex flex-col gap-4 items-end pb-6 pt-0 px-4 relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center relative rounded-md shrink-0 size-7">
            <button className="content-stretch flex items-center justify-center relative rounded-md size-full">
              <SidebarHeaderButtonAppCentric />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
