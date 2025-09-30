import React from 'react';
import { Icon } from '../atoms/Icon';
import { Badge } from '../atoms/Badge';
import { Avatar } from '../atoms/Avatar';

interface TopNavProps {
  className?: string;
}

export function TopNav({ className = '' }: TopNavProps) {
  return (
    <div className={`absolute box-border content-stretch flex flex-col items-center justify-center left-0 overflow-clip pl-4 pr-8 py-3 top-0 w-full ${className}`}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        {/* Left Content */}
        <div className="content-stretch flex gap-2 items-center relative shrink-0">
          {/* App-level */}
          <div className="content-stretch flex gap-2 items-center relative shrink-0">
            <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center pl-0 pr-2.5 py-2 relative rounded-lg shrink-0">
              <div className="h-5 relative shrink-0 w-6">
                <Icon name="logo" size="md" />
              </div>
            </div>
          </div>

          {/* Button-TopNav */}
          <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-2.5 py-2 relative rounded-lg shrink-0">
            <div className="relative shrink-0 size-4">
              <Icon name="users" size="sm" />
            </div>
            <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-sm text-neutral-600 text-nowrap">
              <p className="leading-5 whitespace-pre">Alchemy's team</p>
            </div>
            <div className="bg-neutral-100 box-border content-stretch flex gap-1 items-center px-2 py-px relative rounded-full shrink-0">
              <Badge variant="gray">Free</Badge>
            </div>
          </div>

          {/* CaretRight */}
          <div className="relative shrink-0 size-3">
            <Icon name="caret-right" size="sm" />
          </div>

          {/* Button-TopNav */}
          <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-2.5 py-2 relative rounded-lg shrink-0">
            <div className="relative shrink-0 size-4">
              <Icon name="cube" size="sm" />
            </div>
            <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-sm text-neutral-600 text-nowrap">
              <p className="leading-5 whitespace-pre">My first app</p>
            </div>
            <div className="relative shrink-0 size-4">
              <Icon name="caret-up-down" size="sm" />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="content-stretch flex gap-3 items-center justify-end relative shrink-0 w-[566px]">
          {/* Feedback Button */}
          <div className="bg-white box-border content-stretch flex gap-2 h-8 items-center justify-center px-2.5 py-2 relative rounded-lg shrink-0">
            <div className="relative shrink-0 size-3.5">
              <Icon name="chats" size="sm" />
            </div>
            <div className="font-inter font-medium leading-0 not-italic relative shrink-0 text-xs text-neutral-600 text-nowrap">
              <p className="leading-4 whitespace-pre">Feedback</p>
            </div>
          </div>

          {/* Avatar */}
          <div className="content-stretch flex gap-3 items-center relative shrink-0">
            <div className="relative rounded-full shrink-0 size-8">
              <Avatar size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
