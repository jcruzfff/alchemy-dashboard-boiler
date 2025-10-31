'use client';

import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
  percentage: string;
  className?: string;
}

export function StatCard({ label, value, subtext, percentage, className = '' }: StatCardProps) {
  return (
    <div className={`bg-white border border-[#e5e5e5] border-solid h-[154px] relative rounded-[8px] shrink-0 flex-1 ${className}`}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[14px] text-[#525252] text-nowrap top-[16px] whitespace-pre">
        {label}
      </p>
      <div className="absolute content-stretch flex gap-[39px] items-center left-[24px] top-[120px] w-[239px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-[#737373] text-nowrap whitespace-pre">
          {subtext}
        </p>
      </div>
      <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[72px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[32px] text-neutral-950 text-nowrap tracking-[-0.64px] whitespace-pre">
          {value}
        </p>
        <div className="bg-[#f0fdf4] box-border content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-[#15803d] text-center text-nowrap whitespace-pre">
            {percentage}
          </p>
          <div className="relative shrink-0 size-[12px]">
            <div className="absolute inset-[20.31%_20.31%_20.31%_20.3%]">
              <img alt="" className="block max-w-none size-full" src="/icons/ArrowUpRight-green.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

