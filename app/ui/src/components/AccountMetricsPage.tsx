'use client';

export function AccountMetricsPage() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[48px] relative size-full">
      <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {/* Page Title */}
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[32px] text-neutral-950 text-nowrap tracking-[-0.64px] whitespace-pre">
            Metrics
          </p>
        </div>
        {/* Content-Area */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {/* Placeholder content */}
        </div>
      </div>
    </div>
  );
}

