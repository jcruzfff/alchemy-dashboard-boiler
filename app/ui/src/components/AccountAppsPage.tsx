'use client';

interface AccountAppsPageProps {
  onSelectApp?: (appName: string) => void;
}

export function AccountAppsPage({ onSelectApp }: AccountAppsPageProps) {
  const apps = [
    { name: 'My first app', description: 'Production app', icon: '/icons/Cube-bold.svg' },
    { name: 'Development app', description: 'Testing environment', icon: '/icons/Cube-bold.svg' },
    { name: 'Staging app', description: 'Staging environment', icon: '/icons/Cube-bold.svg' },
  ];

  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[48px] relative size-full">
      <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {/* Page Title */}
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[32px] text-neutral-950 text-nowrap tracking-[-0.64px] whitespace-pre">
            Apps
          </p>
        </div>
        {/* Content-Area */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {apps.map((app) => (
            <button
              key={app.name}
              onClick={() => onSelectApp?.(app.name)}
              className="bg-white border border-neutral-200 box-border content-stretch flex gap-4 items-center p-6 relative rounded-lg shrink-0 w-full hover:border-neutral-300 hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="relative shrink-0 size-12">
                <img alt="" className="block max-w-none size-full" src={app.icon} />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic text-[16px] text-neutral-950">
                  {app.name}
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic text-[14px] text-neutral-600">
                  {app.description}
                </p>
              </div>
              <div className="ml-auto relative shrink-0 size-4">
                <img alt="" className="block max-w-none size-full" src="/icons/CaretRight-bold.svg" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
