import React from 'react';
import { Icon } from '../atoms/Icon';
import { Badge } from '../atoms/Badge';
import { Avatar } from '../atoms/Avatar';

interface TopNavProps {
  className?: string;
  onLogoClick?: () => void;
  showAppBreadcrumb?: boolean;
}

export function TopNav({ className = '', onLogoClick, showAppBreadcrumb = false }: TopNavProps) {
  return (
    <div className={`absolute bg-white box-border content-stretch flex flex-col items-center justify-center left-0 overflow-clip pl-4 pr-8 py-3 top-0 w-full h-14 border-b border-neutral-200 z-50 ${className}`}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        {/* Left Content */}
        <div className="content-stretch flex gap-2 items-center relative shrink-0">
          {/* App-level */}
          <div className="content-stretch flex gap-2 items-center relative shrink-0">
            <button 
              onClick={onLogoClick}
              className="box-border content-stretch flex gap-2 h-8 items-center justify-center pl-0 pr-2.5 py-2 relative rounded-lg shrink-0 cursor-pointer hover:bg-neutral-100 transition-colors"
            >
              <div className="h-5 relative shrink-0 w-6">
                <img alt="Alchemy Logo" className="block max-w-none size-full" src="/icons/Logo.svg" />
              </div>
            </button>
          </div>

          {/* Team Info - Always shown */}
          <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-2.5 py-2 relative rounded-lg shrink-0">
            <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
            <div className="relative shrink-0 size-4">
              <img alt="" className="block max-w-none size-full" src="/icons/Users-bold.svg" />
            </div>
            <div className="font-medium-inter leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap">
              <p className="leading-[20px] whitespace-pre">Alchemy's team</p>
            </div>
            <div className="box-border content-stretch flex gap-1 items-center px-2 py-px relative rounded-full shrink-0">
              <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] size-full">
                <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="font-medium-inter leading-[0] not-italic relative shrink-0 text-[12px] text-center text-neutral-950 text-nowrap">
                  <p className="leading-[18px] whitespace-pre">Free</p>
                </div>
              </div>
            </div>
          </div>

          {/* App Breadcrumb - Only shown at app level */}
          {showAppBreadcrumb && (
            <>
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
            </>
          )}
        </div>

        {/* Right Content */}
        <div className="content-stretch flex gap-3 items-center justify-end relative shrink-0 w-[566px]">
          {/* Feedback Button */}
          <div className="bg-white box-border content-stretch flex gap-2 h-8 items-center justify-center px-2.5 py-2 relative rounded-sm shrink-0">
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
  );
}
