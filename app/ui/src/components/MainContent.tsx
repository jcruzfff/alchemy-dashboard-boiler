'use client';

import React from 'react';
import { WalletsHeader } from './WalletsHeader';

interface MainContentProps {
  className?: string;
  activePage?: string;
}

export function MainContent({ className = '', activePage = 'Smart Wallets' }: MainContentProps) {
  const [activeTab, setActiveTab] = React.useState<string>('Overview');

  return (
    <div className={`absolute right-0 bottom-0 overflow-auto ${className}`} style={{left: '220px', top: '56px', width: 'calc(100vw - 220px)', height: 'calc(100vh - 56px)'}}>
      {/* Main Container - matches Figma structure */}
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[48px] relative size-full">
        {/* Content Container */}
        <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
          
          {/* Page Tab Header */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            {activePage === 'Smart Wallets' && (
              <WalletsHeader 
                activeTab={activeTab} 
                onTabChange={setActiveTab}
              />
            )}
          </div>

          {/* Content-Area - This is where all dynamic content goes */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            {activePage === 'Smart Wallets' && activeTab === 'Overview' && (
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                {/* Stats Cards Grid */}
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  {/* Total transactions card */}
                  <div className="basis-0 bg-white border border-neutral-200 border-solid box-border content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px px-[24px] py-[16px] relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap tracking-[-0.32px] whitespace-pre">
                          Total transactions
                        </p>
                        <div className="shrink-0 size-[20px]" data-name="arrow-right" />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[236.5px]">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[24px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">
                        12,847
                      </p>
                      <div className="content-stretch flex items-start relative shrink-0">
                        <div className="bg-green-50 box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-green-700 text-nowrap whitespace-pre">
                            4%
                          </p>
                          <div className="relative shrink-0 size-[12px]">
                            <img alt="" className="block max-w-none size-full" src="/icons/ArrowUpRight-green.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Successful transactions card */}
                  <div className="basis-0 bg-white border border-neutral-200 border-solid box-border content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px px-[24px] py-[16px] relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap tracking-[-0.32px] whitespace-pre">
                          Successful transactions
                        </p>
                      </div>
                      <div className="shrink-0 size-[20px]" data-name="arrow-right" />
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[236.5px]">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[24px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">
                        11,923
                      </p>
                      <div className="content-stretch flex items-start relative shrink-0">
                        <div className="bg-green-50 box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-green-700 text-nowrap whitespace-pre">
                            32%
                          </p>
                          <div className="relative shrink-0 size-[12px]">
                            <img alt="" className="block max-w-none size-full" src="/icons/ArrowUpRight-green.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Failed transactions card */}
                  <div className="basis-0 bg-white border border-neutral-200 border-solid box-border content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px px-[24px] py-[16px] relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap tracking-[-0.32px] whitespace-pre">
                          Failed transactions
                        </p>
                        <div className="shrink-0 size-[20px]" data-name="arrow-right" />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[236.5px]">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[24px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">
                        924
                      </p>
                      <div className="content-stretch flex items-start relative shrink-0">
                        <div className="bg-green-50 box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-green-700 text-nowrap whitespace-pre">
                            32%
                          </p>
                          <div className="relative shrink-0 size-[12px]">
                            <img alt="" className="block max-w-none size-full" src="/icons/ArrowUpRight-green.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Average amount card */}
                  <div className="basis-0 bg-white border border-neutral-200 border-solid box-border content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px px-[24px] py-[16px] relative rounded-[12px] shrink-0">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[16px] text-center text-neutral-950 text-nowrap tracking-[-0.32px] whitespace-pre">
                          Average amount
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[236.5px]">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[24px] text-neutral-950 text-nowrap tracking-[-0.48px] whitespace-pre">
                        $847.52
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="bg-white border border-neutral-200 border-solid content-stretch flex flex-col isolate items-center justify-end relative rounded-[8px] shrink-0 w-full">
                  <div className="bg-[rgba(187,187,187,0.05)] border-[#eeeeee] border-[0px_0px_1px] border-solid box-border content-stretch flex flex-col h-[58px] items-start justify-between p-[16px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full z-[3]">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.25] not-italic relative shrink-0 text-[#383838] text-[14px] text-nowrap whitespace-pre">
                          Daily active users
                        </p>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="bg-[rgba(239,239,239,0)] box-border content-stretch flex gap-[4px] items-center px-[6px] py-[4px] relative rounded-[100px] shrink-0">
                          <div className="relative shrink-0 size-[14px]">
                            <div className="absolute flex inset-[40%_30%] items-center justify-center">
                              <div className="flex-none h-[3.2px] rotate-[180deg] w-[6.4px]">
                                <div className="relative size-full">
                                  <div className="absolute inset-[-17.86%_-8.93%]" style={{ "--stroke-0": "rgba(56, 56, 56, 1)" } as React.CSSProperties}>
                                    <img alt="" className="block max-w-none size-full" src="/icons/CaretDown-bold.svg" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#383838] text-[12px] text-nowrap whitespace-pre">
                            All devices
                          </p>
                        </div>
                        <div className="bg-[rgba(239,239,239,0)] box-border content-stretch flex gap-[4px] items-center px-[6px] py-[4px] relative rounded-[100px] shrink-0">
                          <div className="relative shrink-0 size-[14px]">
                            <div className="absolute flex inset-[40%_30%] items-center justify-center">
                              <div className="flex-none h-[3.2px] rotate-[180deg] w-[6.4px]">
                                <div className="relative size-full">
                                  <div className="absolute inset-[-17.86%_-8.93%]" style={{ "--stroke-0": "rgba(56, 56, 56, 1)" } as React.CSSProperties}>
                                    <img alt="" className="block max-w-none size-full" src="/icons/CaretDown-bold.svg" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#383838] text-[12px] text-nowrap whitespace-pre">
                            90 days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-[16px] items-start p-[16px] relative shrink-0 w-full z-[2]">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-full">
                      <div className="h-64 bg-neutral-50 rounded-lg flex items-center justify-center">
                     
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-center flex flex-wrap gap-[12px] items-center justify-center pb-[16px] pt-[8px] px-[16px] relative rounded-[24px] shrink-0 w-full z-[1]">
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <div className="bg-[#040ff2] shrink-0 size-[10px]" />
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#383838] text-[12px] text-center text-nowrap whitespace-pre">
                        Desktop
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <div className="bg-[#e151b8] shrink-0 size-[10px]" />
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#383838] text-[12px] text-center text-nowrap whitespace-pre">
                        Mobile
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activePage === 'Smart Wallets' && activeTab === 'Users' && (
              <div className="bg-white rounded-lg border border-neutral-200 p-6">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Users</h2>
                <p className="text-neutral-600">User management content will go here.</p>
              </div>
            )}
            
            {activePage === 'Smart Wallets' && activeTab === 'Assets' && (
              <div className="bg-white rounded-lg border border-neutral-200 p-6">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Assets</h2>
                <p className="text-neutral-600">Asset management content will go here.</p>
              </div>
            )}
            
            {/* Other pages content */}
            {activePage !== 'Smart Wallets' && (
              <div className="bg-white rounded-lg border border-neutral-200 p-6">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">{activePage}</h2>
                <p className="text-neutral-600">Content for {activePage} will go here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


