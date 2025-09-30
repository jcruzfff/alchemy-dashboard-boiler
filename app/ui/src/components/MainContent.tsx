import React from 'react';
import { Tab } from '../atoms/Tab';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

interface MainContentProps {
  className?: string;
}

export function MainContent({ className = '' }: MainContentProps) {
  return (
    <div className={`absolute content-stretch flex flex-col gap-6 items-start left-55 top-26 w-[1196px] ${className}`}>
      {/* Product Header */}
      <div className="content-stretch flex gap-2.5 items-center relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex gap-3 items-center grow min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
            <div className="font-inter font-semibold leading-0 not-italic relative shrink-0 text-[32px] text-center text-neutral-950 text-nowrap tracking-[-0.64px]">
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
              <div className="font-inter font-normal leading-0 not-italic relative shrink-0 text-sm text-neutral-500 text-nowrap">
                <p className="leading-6 whitespace-pre">API Key</p>
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-2 items-center overflow-clip px-2 py-1 relative rounded-br-lg rounded-tr-lg shrink-0 w-[317px]">
            <div className="basis-0 font-inter font-normal grow leading-0 min-h-px min-w-px not-italic relative shrink-0 text-sm text-neutral-600">
              <p className="leading-6">5omnSigeCkcU6RC6VxS4W</p>
            </div>
            <div className="bg-white box-border content-stretch flex gap-2 items-center px-2 py-1 relative rounded-lg shrink-0">
              <div className="absolute border border-neutral-200 border-solid inset-[-1px] pointer-events-none rounded-lg" />
              <div className="relative shrink-0 size-4">
                <Icon name="copy" size="sm" />
              </div>
              <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-sm text-neutral-600 text-nowrap">
                <p className="leading-5 whitespace-pre">Copy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="content-stretch flex gap-6 items-start relative shrink-0 w-full">
        <div className="absolute border-b border-neutral-200 border-solid inset-0 pointer-events-none" />
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0">
          <div className="absolute border-b-2 border-[#363ff9] border-solid inset-0 pointer-events-none" />
          <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-[#363ff9] text-sm text-nowrap">
            <p className="leading-5 whitespace-pre">Overview</p>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0">
          <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-sm text-neutral-500 text-nowrap">
            <p className="leading-5 whitespace-pre">Quickstart</p>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0">
          <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-sm text-neutral-500 text-nowrap">
            <p className="leading-5 whitespace-pre">Usage & Keys</p>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0">
          <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-sm text-neutral-500 text-nowrap">
            <p className="leading-5 whitespace-pre">Email Login</p>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0">
          <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-sm text-neutral-500 text-nowrap">
            <p className="leading-5 whitespace-pre">Social Login</p>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-0 py-2 relative shrink-0">
          <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-sm text-neutral-500 text-nowrap">
            <p className="leading-5 whitespace-pre">Linked apps</p>
          </div>
        </div>
      </div>
    </div>
  );
}
