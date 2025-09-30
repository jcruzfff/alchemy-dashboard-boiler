'use client';

import React from 'react';

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

function Badges({ labelName = "Label", color = "Outlined" }: { labelName?: string; color?: "Gray" | "Outlined" }) {
  const element = <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />;
  const element1 = (
    <div className="font-medium-inter leading-[0] not-italic relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap">
      <p className="leading-[18px] whitespace-pre">{labelName}</p>
    </div>
  );
  if (color === "Gray") {
    return (
      <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] size-full">
        {element}
        {element1}
      </div>
    );
  }
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] size-full">
      {element}
      {element1}
    </div>
  );
}

function Avatar({ size = "sm" }: { size?: "sm" }) {
  const element = <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[200px] size-full" src="/icons/Logo.svg" />;
  if (size === "sm") {
    return (
      <div className="relative rounded-[200px] size-full">
        {element}
      </div>
    );
  }
  return (
    <div className="overflow-clip relative rounded-[200px] size-full">
      {element}
    </div>
  );
}

export default function SmartWalletsOverview() {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set([]));
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>('Overview');

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
    <div className="bg-neutral-50 relative min-h-screen w-full">
      {/* Top Navigation - Exact Figma Implementation */}
      <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-center left-0 overflow-clip pl-4 pr-8 py-3 top-0 w-full h-14 border-b border-neutral-200">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-2 items-center relative shrink-0">
            {/* App-level */}
            <div className="content-stretch flex gap-2 items-center relative shrink-0">
              <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center pl-0 pr-2.5 py-2 relative rounded-lg shrink-0">
                <div className="h-5 relative shrink-0 w-6">
                  <img alt="" className="block max-w-none size-full" src="/icons/Logo.svg" />
                </div>
              </div>
            </div>

            {/* Button-TopNav */}
            <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-2.5 py-2 relative rounded-lg shrink-0">
              <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="relative shrink-0 size-4">
                <img alt="" className="block max-w-none size-full" src="/icons/Users-bold.svg" />
              </div>
              <div className="font-medium-inter leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap">
                <p className="leading-[20px] whitespace-pre">Alchemy's team</p>
              </div>
              <div className="box-border content-stretch flex gap-1 items-center px-2 py-px relative rounded-full shrink-0">
                <Badges labelName="Free" color="Gray" />
              </div>
            </div>

            {/* CaretRight */}
            <div className="relative shrink-0 size-3">
              <img alt="CaretRight" className="block max-w-none size-full" src="/icons/CaretRight-bold.svg" />
            </div>

            {/* Button-TopNav */}
            <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-2.5 py-2 relative rounded-lg shrink-0">
              <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="relative shrink-0 size-4">
                <img alt="" className="block max-w-none size-full" src="/icons/Cube-bold.svg" />
              </div>
              <div className="font-medium-inter leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap">
                <p className="leading-[20px] whitespace-pre">My first app</p>
              </div>
              <div className="relative shrink-0 size-4">
                <img alt="" className="block max-w-none size-full" src="/icons/CaretUpDown-bold.svg" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="content-stretch flex gap-3 items-center justify-end relative shrink-0 w-[566px]">
            {/* Feedback Button */}
            <div className="bg-white box-border content-stretch flex gap-2 h-8 items-center justify-center px-2.5 py-2 relative rounded-lg shrink-0">
              <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
              <div className="relative shrink-0 size-3.5">
                <img alt="" className="block max-w-none size-full" src="/icons/ChatsCircle-bold.svg" />
              </div>
              <div className="font-medium-inter leading-[0] not-italic relative shrink-0 text-[12px] text-neutral-600 text-nowrap">
                <p className="leading-[18px] whitespace-pre">Feedback</p>
              </div>
            </div>

            {/* Avatar */}
            <div className="content-stretch flex gap-3 items-center relative shrink-0">
              <div className="relative rounded-full shrink-0 size-8">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[200px] size-full" src="/icons/Avatar.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Responsive */}
      <div className="absolute bg-white content-stretch flex h-[calc(100vh-56px)] items-start left-0 top-14 w-55 border-r" style={{borderColor: '#F5F5F5'}}>
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

      {/* Main Content Area - Responsive */}
      <div className="absolute content-stretch flex flex-col gap-6 items-start left-55 top-26 right-0 bottom-0 overflow-auto">
        <div className="w-full px-6">
          {/* Product Header */}
          <div className="content-stretch flex gap-2.5 items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex gap-3 items-center grow min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                <div className="font-semibold-inter leading-[0] not-italic relative shrink-0 text-[32px] text-center text-neutral-950 text-nowrap tracking-[-0.64px]">
                  <p className="leading-[1.24] whitespace-pre">Smart Wallets</p>
                </div>
              </div>
            </div>
            
            {/* API Key Section */}
            <div className="bg-white content-stretch flex items-center relative rounded-lg shrink-0">
              <div className="absolute border border-neutral-200 border-solid inset-[-1px] pointer-events-none rounded-lg" />
              <div className="flex flex-row items-center self-stretch">
                <div className="bg-neutral-50 box-border content-stretch flex h-full items-center px-3 py-1 relative rounded-bl-lg rounded-tl-lg shrink-0">
                  <div className="absolute border-r border-neutral-200 border-solid inset-0 pointer-events-none rounded-bl-lg rounded-tl-lg" />
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-sm text-neutral-500 text-nowrap">
                    <p className="leading-6 whitespace-pre">API Key</p>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center overflow-clip px-2 py-1 relative rounded-br-lg rounded-tr-lg shrink-0 w-[317px]">
                <div className="basis-0 font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-sm text-neutral-600">
                  <p className="leading-6">5omnSigeCkcU6RC6VxS4W</p>
                </div>
                <div className="bg-white box-border content-stretch flex gap-2 items-center px-2 py-1 relative rounded-lg shrink-0">
                  <div className="absolute border border-neutral-200 border-solid inset-[-1px] pointer-events-none rounded-lg" />
                  <div className="relative shrink-0 size-4">
                    <img alt="" className="block max-w-none size-full" src="/icons/Copy-bold.svg" />
                  </div>
                  <div className="font-medium-inter leading-[0] not-italic relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-5 whitespace-pre">Copy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="content-stretch flex gap-6 items-start relative shrink-0 w-full mt-6">
            <div className="absolute border-b border-neutral-200 border-solid inset-0 pointer-events-none" />
            
            {/* Overview Tab */}
            <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0 cursor-pointer" onClick={() => setActiveTab('Overview')}>
              {activeTab === 'Overview' && <div className="absolute border-b-2 border-[#363ff9] border-solid inset-0 pointer-events-none" />}
              <div className={`font-medium-inter leading-[0] not-italic relative shrink-0 text-sm text-nowrap ${activeTab === 'Overview' ? 'text-[#363ff9]' : 'text-neutral-500'}`}>
                <p className="leading-5 whitespace-pre">Overview</p>
              </div>
            </div>
            
            {/* Quickstart Tab */}
            <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0 cursor-pointer" onClick={() => setActiveTab('Quickstart')}>
              {activeTab === 'Quickstart' && <div className="absolute border-b-2 border-[#363ff9] border-solid inset-0 pointer-events-none" />}
              <div className={`font-medium-inter leading-[0] not-italic relative shrink-0 text-sm text-nowrap ${activeTab === 'Quickstart' ? 'text-[#363ff9]' : 'text-neutral-500'}`}>
                <p className="leading-5 whitespace-pre">Quickstart</p>
              </div>
            </div>
            
            {/* Usage & Keys Tab */}
            <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0 cursor-pointer" onClick={() => setActiveTab('Usage & Keys')}>
              {activeTab === 'Usage & Keys' && <div className="absolute border-b-2 border-[#363ff9] border-solid inset-0 pointer-events-none" />}
              <div className={`font-medium-inter leading-[0] not-italic relative shrink-0 text-sm text-nowrap ${activeTab === 'Usage & Keys' ? 'text-[#363ff9]' : 'text-neutral-500'}`}>
                <p className="leading-5 whitespace-pre">Usage & Keys</p>
              </div>
            </div>
            
            {/* Email Login Tab */}
            <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0 cursor-pointer" onClick={() => setActiveTab('Email Login')}>
              {activeTab === 'Email Login' && <div className="absolute border-b-2 border-[#363ff9] border-solid inset-0 pointer-events-none" />}
              <div className={`font-medium-inter leading-[0] not-italic relative shrink-0 text-sm text-nowrap ${activeTab === 'Email Login' ? 'text-[#363ff9]' : 'text-neutral-500'}`}>
                <p className="leading-5 whitespace-pre">Email Login</p>
              </div>
            </div>
            
            {/* Social Login Tab */}
            <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0 cursor-pointer" onClick={() => setActiveTab('Social Login')}>
              {activeTab === 'Social Login' && <div className="absolute border-b-2 border-[#363ff9] border-solid inset-0 pointer-events-none" />}
              <div className={`font-medium-inter leading-[0] not-italic relative shrink-0 text-sm text-nowrap ${activeTab === 'Social Login' ? 'text-[#363ff9]' : 'text-neutral-500'}`}>
                <p className="leading-5 whitespace-pre">Social Login</p>
              </div>
            </div>
            
            {/* Linked apps Tab */}
            <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0 cursor-pointer" onClick={() => setActiveTab('Linked apps')}>
              {activeTab === 'Linked apps' && <div className="absolute border-b-2 border-[#363ff9] border-solid inset-0 pointer-events-none" />}
              <div className={`font-medium-inter leading-[0] not-italic relative shrink-0 text-sm text-nowrap ${activeTab === 'Linked apps' ? 'text-[#363ff9]' : 'text-neutral-500'}`}>
                <p className="leading-5 whitespace-pre">Linked apps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full px-6 pb-6">
          <div className="bg-white rounded-lg border border-neutral-200 p-6 h-full">
            {activeTab === 'Overview' && (
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Overview content will go here</h2>
                <p className="text-neutral-600">This is the Overview tab content.</p>
              </div>
            )}
            {activeTab === 'Quickstart' && (
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Quickstart content will go here</h2>
                <p className="text-neutral-600">This is the Quickstart tab content.</p>
              </div>
            )}
            {activeTab === 'Usage & Keys' && (
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Usage & Keys content will go here</h2>
                <p className="text-neutral-600">This is the Usage & Keys tab content.</p>
              </div>
            )}
            {activeTab === 'Email Login' && (
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Email Login content will go here</h2>
                <p className="text-neutral-600">This is the Email Login tab content.</p>
              </div>
            )}
            {activeTab === 'Social Login' && (
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Social Login content will go here</h2>
                <p className="text-neutral-600">This is the Social Login tab content.</p>
              </div>
            )}
            {activeTab === 'Linked apps' && (
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Linked apps content will go here</h2>
                <p className="text-neutral-600">This is the Linked apps tab content.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}