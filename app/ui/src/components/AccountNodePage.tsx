'use client';

const mockNodeData = [
  { id: 1, name: 'Node-ETH-Mainnet-01', chain: 'Ethereum Mainnet', status: 'Active', uptime: '99.9%', requests: '1.2M', lastSync: '2 min ago' },
  { id: 2, name: 'Node-Polygon-01', chain: 'Polygon', status: 'Active', uptime: '99.8%', requests: '856K', lastSync: '1 min ago' },
  { id: 3, name: 'Node-Optimism-01', chain: 'Optimism', status: 'Active', uptime: '99.7%', requests: '645K', lastSync: '3 min ago' },
  { id: 4, name: 'Node-Arbitrum-01', chain: 'Arbitrum', status: 'Active', uptime: '99.9%', requests: '923K', lastSync: '1 min ago' },
  { id: 5, name: 'Node-Base-01', chain: 'Base', status: 'Active', uptime: '99.6%', requests: '534K', lastSync: '4 min ago' },
  { id: 6, name: 'Node-ETH-Sepolia-01', chain: 'Ethereum Sepolia', status: 'Maintenance', uptime: '98.2%', requests: '234K', lastSync: '15 min ago' },
];

export function AccountNodePage() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[48px] relative size-full">
      <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {/* Page Title */}
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[32px] text-neutral-950 text-nowrap tracking-[-0.64px] whitespace-pre">
            Node
          </p>
        </div>
        {/* Content-Area */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {/* Table Container */}
          <div className="bg-white border border-[#e5e5e5] rounded-[8px] relative shrink-0 w-full overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-left p-[16px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#383838] tracking-[-0.28px]">
                    Node Name
                  </th>
                  <th className="text-left p-[16px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#383838] tracking-[-0.28px]">
                    Chain
                  </th>
                  <th className="text-left p-[16px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#383838] tracking-[-0.28px]">
                    Status
                  </th>
                  <th className="text-left p-[16px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#383838] tracking-[-0.28px]">
                    Uptime
                  </th>
                  <th className="text-left p-[16px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#383838] tracking-[-0.28px]">
                    Requests (30d)
                  </th>
                  <th className="text-left p-[16px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#383838] tracking-[-0.28px]">
                    Last Sync
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockNodeData.map((node) => (
                  <tr key={node.id} className="border-b border-[#e5e5e5] hover:bg-[#f9f9f9] transition-colors">
                    <td className="p-[16px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#383838]">
                      {node.name}
                    </td>
                    <td className="p-[16px] font-['Inter:Regular',sans-serif] text-[14px] text-[#383838]">
                      {node.chain}
                    </td>
                    <td className="p-[16px]">
                      <span
                        className={`inline-flex items-center gap-[6px] px-[12px] py-[4px] rounded-[12px] font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[18px] ${
                          node.status === 'Active'
                            ? 'bg-[#363ff9]/10 text-[#363ff9]'
                            : 'bg-[#f59e0b]/10 text-[#f59e0b]'
                        }`}
                      >
                        <span className={`size-[6px] rounded-full ${node.status === 'Active' ? 'bg-[#363ff9]' : 'bg-[#f59e0b]'}`} />
                        {node.status}
                      </span>
                    </td>
                    <td className="p-[16px] font-['Inter:Regular',sans-serif] text-[14px] text-[#383838]">
                      {node.uptime}
                    </td>
                    <td className="p-[16px] font-['Inter:Regular',sans-serif] text-[14px] text-[#383838]">
                      {node.requests}
                    </td>
                    <td className="p-[16px] font-['Inter:Regular',sans-serif] text-[14px] text-[#888888]">
                      {node.lastSync}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

