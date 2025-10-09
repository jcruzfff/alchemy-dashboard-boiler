'use client';

import React from 'react';

interface WalletsHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export function WalletsHeader({ activeTab, onTabChange, className = '' }: WalletsHeaderProps) {
  const handleCopyApiKey = () => {
    navigator.clipboard.writeText('5omnSigeCkcU6RC6VxS4W');
    // You could add a toast notification here
  };

  return (
    <div className={`content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full ${className}`}>
      {/* Page header */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
            {/* Left - Title */}
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-[320px] relative shrink-0">
              <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[32px] text-neutral-950 tracking-[-0.64px] w-full">
                Wallets
              </p>
            </div>
            
            {/* API Key */}
            <div className="bg-white border border-neutral-200 border-solid content-stretch flex items-center relative rounded-[8px] shrink-0">
              <div className="flex flex-row items-center self-stretch">
                <div className="bg-neutral-50 border-[0px_1px_0px_0px] border-neutral-200 border-solid box-border content-stretch flex h-full items-center px-[12px] py-[4px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0">
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap whitespace-pre">
                    API Key
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[8px] py-[4px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[317px]">
                <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-neutral-600">
                  5omnSigeCkcU6RC6VxS4W
                </p>
                <div className="bg-white border border-neutral-200 border-solid box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-neutral-50 transition-colors" onClick={handleCopyApiKey}>
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[10.938%]">
                      <img alt="" className="block max-w-none size-full" src="/icons/Copy-bold.svg" />
                    </div>
                  </div>
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap whitespace-pre">
                    Copy
                  </p>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="content-stretch flex gap-[8px] isolate items-center relative shrink-0">
              <div className="bg-white border border-neutral-200 border-solid box-border content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 z-[2] cursor-pointer hover:bg-neutral-50 transition-colors">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap whitespace-pre">
                  Action
                </p>
                <div className="relative shrink-0 size-[16px]">
                  <div className="absolute inset-[20.31%_20.31%_20.31%_20.3%]">
                    <img alt="" className="block max-w-none size-full" src="/icons/ArrowUpRight-bold.svg" />
                  </div>
                </div>
              </div>
              <div className="bg-[#363ff9] box-border content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 z-[1] cursor-pointer hover:bg-blue-700 transition-colors">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                  Action
                </p>
                <div className="relative shrink-0 size-[16px]">
                  <div className="absolute inset-[20.31%_20.31%_20.31%_20.3%]">
                    <img alt="" className="block max-w-none size-full brightness-0 invert" src="/icons/ArrowUpRight-bold.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tab bar */}
        <div className="border-[0px_0px_1px] border-neutral-200 border-solid box-border content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
          <div 
            className={`box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[8px] relative shrink-0 cursor-pointer ${
              activeTab === 'Overview' ? 'border-[#363ff9] border-[0px_0px_2px] border-solid' : ''
            }`}
            onClick={() => onTabChange('Overview')}
          >
            <p className={`font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
              activeTab === 'Overview' ? 'text-[#363ff9]' : 'text-neutral-500'
            }`}>
              Overview
            </p>
          </div>
          <div 
            className={`box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[8px] relative shrink-0 cursor-pointer ${
              activeTab === 'Users' ? 'border-[#363ff9] border-[0px_0px_2px] border-solid' : ''
            }`}
            onClick={() => onTabChange('Users')}
          >
            <p className={`font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
              activeTab === 'Users' ? 'text-[#363ff9]' : 'text-neutral-500'
            }`}>
              Users
            </p>
          </div>
          <div 
            className={`box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[8px] relative shrink-0 cursor-pointer ${
              activeTab === 'Assets' ? 'border-[#363ff9] border-[0px_0px_2px] border-solid' : ''
            }`}
            onClick={() => onTabChange('Assets')}
          >
            <p className={`font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
              activeTab === 'Assets' ? 'text-[#363ff9]' : 'text-neutral-500'
            }`}>
              Assets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}