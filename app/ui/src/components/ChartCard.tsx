'use client';

import React from 'react';
import { LineChartVisualization } from './LineChartVisualization';
import { HorizontalBarChart } from './HorizontalBarChart';

interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface LineConfig {
  dataKey: string;
  stroke: string;
  label: string;
  fill?: string;
  stackId?: string;
}

interface ChartCardProps {
  title: string;
  subtitle: string;
  className?: string;
  width?: string;
  data?: DataPoint[];
  lines?: LineConfig[];
  yAxisFormatter?: (value: number) => string;
  yAxisDomain?: [number, number];
  yAxisTicks?: number[];
  showArea?: boolean;
  chartType?: 'line' | 'horizontalBar';
  barColor?: string;
}

export function ChartCard({ 
  title, 
  subtitle, 
  className = '', 
  width = 'w-[586px]', 
  data,
  lines,
  yAxisFormatter,
  yAxisDomain,
  yAxisTicks,
  showArea,
  chartType = 'line',
  barColor
}: ChartCardProps) {
  return (
    <div className={`bg-[#ffffff] border border-[#e5e5e5] border-solid h-[432px] relative rounded-[8px] shrink-0 ${width} ${className}`}>
      <div className={`content-stretch flex flex-col h-[432px] isolate items-start overflow-clip relative rounded-[inherit] ${width}`}>
        {/* Table header */}
        <div className="h-[68px] relative shrink-0 w-full z-[3]">
          <div className="absolute content-stretch flex h-[25px] items-center left-[24px] top-[24px] w-[538px]">
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] text-nowrap tracking-[-0.4px] whitespace-pre">
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Table head */}
        <div className="content-stretch flex items-start relative shrink-0 w-full z-[2]">
          <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0">
            <div className="bg-[#fafafa] border-[1px_0px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[24px] pr-0 py-[12px] relative shrink-0 w-full z-[1]">
              <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] text-nowrap tracking-[0px] whitespace-pre">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chart Area */}
        <div className="border-[0px_0px_1px] border-[#e5e5e5] border-solid h-[320px] shrink-0 w-full z-[1]">
          {chartType === 'horizontalBar' ? (
            <HorizontalBarChart 
              data={data as Array<{ name: string; value: number; rank: number }>}
              barColor={barColor}
            />
          ) : (
            <LineChartVisualization 
              data={data}
              lines={lines}
              yAxisFormatter={yAxisFormatter}
              yAxisDomain={yAxisDomain}
              yAxisTicks={yAxisTicks}
              showArea={showArea}
            />
          )}
        </div>
      </div>
    </div>
  );
}

