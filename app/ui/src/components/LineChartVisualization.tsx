'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Area } from 'recharts';

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

interface LineChartVisualizationProps {
  data?: DataPoint[];
  lines?: LineConfig[];
  yAxisFormatter?: (value: number) => string;
  yAxisDomain?: [number, number];
  yAxisTicks?: number[];
  showArea?: boolean;
}

// Custom Tooltip matching Figma design
interface CustomTooltipProps extends TooltipProps<number, string> {
  lines?: LineConfig[];
}

const CustomTooltip = ({ active, payload, lines }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-[8px] bg-[#ffffff] rounded-[6px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] backdrop-blur-[1px] inline-flex flex-col justify-end items-start min-w-[160px]">
        <div className="rounded-[4px] flex flex-col justify-center items-start gap-[8px] w-full">
          {payload.map((entry, index) => {
            const lineConfig = lines?.find(l => l.dataKey === entry.dataKey);
            return (
              <div key={index} className="flex justify-between items-center gap-[16px] w-full">
                <div className="flex justify-start items-center gap-[8px]">
                  <div 
                    className="size-[8px] rounded-full flex-shrink-0" 
                    style={{ backgroundColor: entry.color || lineConfig?.stroke }}
                  />
                  <div className="text-left text-[#525252] text-[12px] font-medium font-['Inter'] leading-[16px] whitespace-nowrap">
                    {lineConfig?.label || entry.dataKey}
                  </div>
                </div>
                <div className="text-right text-[#0a0a0a] text-[12px] font-semibold font-['Inter'] leading-[16px] whitespace-nowrap">
                  {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export function LineChartVisualization({ 
  data, 
  lines,
  yAxisFormatter,
  yAxisDomain,
  yAxisTicks,
  showArea = false
}: LineChartVisualizationProps) {
  // Default sample data matching Figma design
  const defaultData = [
    { name: 'Jan', value: 1400000 },
    { name: 'Feb', value: 1500000 },
    { name: 'Mar', value: 1900000 },
    { name: 'Apr', value: 2200000 },
    { name: 'May', value: 2200000 },
    { name: 'Jun', value: 2300000 },
  ];

  // Default line configuration
  const defaultLines: LineConfig[] = [
    { dataKey: 'value', stroke: '#FF5FD7', label: 'Value', fill: 'url(#colorValue)' }
  ];

  const chartData = data || defaultData;
  const lineConfigs = lines || defaultLines;

  // Default Y-axis formatter
  const defaultYAxisFormatter = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${value}`;
  };

  const yFormatter = yAxisFormatter || defaultYAxisFormatter;

  return (
    <div className="h-full w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 24, right: 32, bottom: 24, left: 24 }}
        >
          {/* Gradient definitions for area fills */}
          <defs>
            {lineConfigs.map((line) => (
              <linearGradient key={line.dataKey} id={`color${line.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={line.stroke} stopOpacity={line.stackId ? 0.8 : 0.1}/>
                <stop offset="50%" stopColor={line.stroke} stopOpacity={line.stackId ? 0.6 : 0.05}/>
                <stop offset="100%" stopColor={line.stroke} stopOpacity={line.stackId ? 0.4 : 0}/>
              </linearGradient>
            ))}
          </defs>

          {/* Grid lines matching Figma */}
          <CartesianGrid 
            strokeDasharray="0" 
            stroke="#F5F5F5" 
            vertical={false}
            horizontalPoints={[24, 61.2, 98.41, 135.62, 172.82, 210.03, 247.23]}
          />
          
          {/* X-Axis with custom styling */}
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: '#a3a3a3', 
              fontSize: 12, 
              fontFamily: "'Inter:Medium', sans-serif",
              fontWeight: 500
            }}
            dy={10}
          />
          
          {/* Y-Axis with custom styling */}
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: '#a3a3a3', 
              fontSize: 12, 
              fontFamily: "'Inter:Medium', sans-serif",
              fontWeight: 500,
              textAnchor: 'end'
            }}
            tickFormatter={yFormatter}
            dx={-8}
            width={44}
            domain={yAxisDomain || [1200000, 2400000]}
            ticks={yAxisTicks || [2400000, 2200000, 2000000, 1800000, 1600000, 1400000, 1200000]}
          />
          
          {/* Custom Tooltip */}
          <Tooltip 
            content={<CustomTooltip lines={lineConfigs} />}
            cursor={{ stroke: '#e5e5e5', strokeWidth: 1, strokeDasharray: '0' }}
          />
          
          {/* Render areas if showArea is true */}
          {showArea && lineConfigs.map((line) => (
            <Area
              key={`area-${line.dataKey}`}
              type="linear"
              dataKey={line.dataKey}
              stroke={line.stroke}
              strokeWidth={2}
              fill={line.fill || `url(#color${line.dataKey})`}
              stackId={line.stackId}
              hide={true}
            />
          ))}

          {/* Render lines */}
          {lineConfigs.map((line) => (
            <Line 
              key={line.dataKey}
              type="linear" 
              dataKey={line.dataKey} 
              stroke={line.stroke} 
              strokeWidth={2}
              dot={{ fill: line.stroke, r: 2.5 }}
              activeDot={{ fill: line.stroke, r: 2.5 }}
              stackId={line.stackId}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

