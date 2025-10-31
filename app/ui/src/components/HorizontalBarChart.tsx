'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, TooltipProps } from 'recharts';

interface BarDataPoint {
  name: string;
  value: number;
  rank: number;
}

interface HorizontalBarChartProps {
  data?: BarDataPoint[];
  barColor?: string;
}

// Custom Tooltip matching design system
const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-[8px] bg-[#ffffff] rounded-[6px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] backdrop-blur-[1px] inline-flex flex-col justify-end items-start min-w-[140px]">
        <div className="rounded-[4px] flex flex-col justify-center items-start gap-[4px] w-full">
          <div className="text-left text-[#0a0a0a] text-[12px] font-semibold font-['Inter'] leading-[16px]">
            {payload[0].payload.name}
          </div>
          <div className="text-left text-[#525252] text-[11px] font-medium font-['Inter'] leading-[14px]">
            {typeof payload[0].value === 'number' 
              ? `${(payload[0].value / 1000000).toFixed(1)}M API calls`
              : payload[0].value}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function HorizontalBarChart({ data, barColor = '#363ff9' }: HorizontalBarChartProps) {
  // Default sample data
  const defaultData: BarDataPoint[] = [
    { rank: 1, name: 'Uniswap', value: 450000000 },
    { rank: 2, name: 'OpenSea', value: 380000000 },
    { rank: 3, name: 'MetaMask', value: 320000000 },
    { rank: 4, name: 'Aave', value: 280000000 },
    { rank: 5, name: 'Compound', value: 240000000 },
    { rank: 6, name: '1inch', value: 190000000 },
    { rank: 7, name: 'Curve', value: 150000000 },
    { rank: 8, name: 'SushiSwap', value: 125000000 },
  ];

  const chartData = data || defaultData;

  return (
    <div className="h-full w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 16, right: 24, bottom: 16, left: 80 }}
        >
          {/* Grid lines */}
          <CartesianGrid 
            strokeDasharray="0" 
            stroke="#F5F5F5" 
            horizontal={false}
          />
          
          {/* Y-Axis (builder names) */}
          <YAxis 
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: '#525252', 
              fontSize: 12, 
              fontFamily: "'Inter:Medium', sans-serif",
              fontWeight: 500
            }}
            width={76}
          />
          
          {/* X-Axis (API call values) */}
          <XAxis 
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: '#a3a3a3', 
              fontSize: 12, 
              fontFamily: "'Inter:Medium', sans-serif",
              fontWeight: 500
            }}
            tickFormatter={(value) => {
              if (value >= 1000000) {
                return `${(value / 1000000).toFixed(0)}M`;
              }
              return value.toString();
            }}
          />
          
          {/* Custom Tooltip */}
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{ fill: '#f5f5f5' }}
          />
          
          {/* Bars with gradient effect */}
          <Bar 
            dataKey="value" 
            fill={barColor}
            radius={[0, 4, 4, 0]}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={barColor}
                opacity={1 - (index * 0.08)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

