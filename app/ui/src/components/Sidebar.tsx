import React from 'react';
import { Input } from '../atoms/Input';
import { SidebarMenuItem } from '../molecules/SidebarMenuItem';
import { Icon } from '../atoms/Icon';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  return (
    <div className={`absolute bg-white content-stretch flex h-[970px] items-start left-0 top-14 w-55 ${className}`}>
      <div className="absolute border-r border-zinc-100 inset-0 pointer-events-none" />
      <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0">
        {/* Navigation */}
        <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow isolate items-start min-h-px min-w-px pb-0 pt-4 px-0 relative shrink-0 w-full">
          {/* Search bar */}
          <div className="box-border content-stretch flex flex-col gap-5 items-start px-4 py-0 relative shrink-0 w-full z-[2]">
            <button className="box-border content-stretch cursor-pointer flex flex-col gap-1 items-start overflow-visible p-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                <div className="bg-white h-9 relative rounded-lg shrink-0 w-full">
                  <div className="box-border content-stretch flex gap-2 h-9 items-center overflow-clip px-3 py-2 relative w-full">
                    <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-3.5">
                        <Icon name="magnifying-glass" size="sm" />
                      </div>
                      <div className="basis-0 font-inter font-normal grow leading-0 min-h-px min-w-px not-italic relative shrink-0 text-sm text-neutral-500">
                        <p className="leading-6">Search</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border border-neutral-200 border-solid inset-[-1px] pointer-events-none rounded-lg" />
                </div>
              </div>
            </button>
          </div>

          {/* SidebarContent */}
          <div className="box-border content-stretch flex flex-col gap-2 items-start px-4 py-0 relative shrink-0 w-full z-[1]">
            {/* App Dashboard Group */}
            <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full">
                  <div className="relative shrink-0 size-4">
                    <Icon name="lightning" size="sm" />
                  </div>
                  <div className="basis-0 font-inter font-medium grow leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">App Dashboard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <div className="h-px bg-neutral-200 w-full" />
              </div>
            </div>

            {/* Main Navigation Group */}
            <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <Icon name="node" size="sm" />
                  </div>
                  <div className="basis-0 font-inter font-medium grow leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Node</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <Icon name="data" size="sm" />
                  </div>
                  <div className="basis-0 font-inter font-medium grow leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Data</p>
                  </div>
                  <div className="relative shrink-0 size-3">
                    <Icon name="caret-down" size="sm" />
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <Icon name="smart-wallet" size="sm" />
                  </div>
                  <div className="basis-0 font-inter font-medium grow leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Wallets</p>
                  </div>
                  <div className="relative shrink-0 size-3">
                    <Icon name="caret-down" size="sm" />
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <Icon name="rollups" size="sm" />
                  </div>
                  <div className="basis-0 font-inter font-medium grow leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Rollups</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full">
                  <div className="relative shrink-0 size-4">
                    <Icon name="tools" size="sm" />
                  </div>
                  <div className="basis-0 font-inter font-medium grow leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Tools</p>
                  </div>
                  <div className="relative shrink-0 size-3">
                    <Icon name="caret-down" size="sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <div className="h-px bg-neutral-200 w-full" />
              </div>
            </div>

            {/* Settings Group */}
            <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full">
                  <div className="relative shrink-0 size-4">
                    <Icon name="key" size="sm" />
                  </div>
                  <div className="basis-0 font-inter font-medium grow leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Security</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full">
                  <div className="relative shrink-0 size-4">
                    <Icon name="network" size="sm" />
                  </div>
                  <div className="basis-0 font-inter font-medium grow leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Networks</p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2 items-center p-2 relative rounded-sm shrink-0 w-full">
                  <div className="relative shrink-0 size-4">
                    <Icon name="settings" size="sm" />
                  </div>
                  <div className="basis-0 font-inter font-medium grow leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-neutral-600 text-nowrap">
                    <p className="leading-6 overflow-ellipsis overflow-hidden">Apps settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="box-border content-stretch flex flex-col gap-4 items-end pb-6 pt-0 px-4 relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center relative rounded-md shrink-0 size-7">
            <button className="content-stretch flex items-center justify-center relative rounded-md size-full">
              <div className="flex h-5 items-center justify-center relative shrink-0 w-5">
                <div className="flex-none rotate-[270deg]">
                  <div className="relative size-5">
                    <Icon name="header-button" size="sm" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
