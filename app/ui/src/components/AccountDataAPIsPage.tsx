'use client';

export function AccountDataAPIsPage() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full overflow-auto">
      <div className="box-border content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] overflow-clip p-[32px] relative shrink-0 w-full">
        {/* Hero Section */}
        <div className="content-stretch flex gap-[90px] items-center relative shrink-0 w-full">
          {/* Left Column */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[547px]">
            {/* Top */}
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              {/* Heading */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="relative shrink-0 size-[40px]">
                  <img alt="" className="block max-w-none size-full" src="/icons/token-api-icon.svg" />
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] relative shrink-0 text-[40px] text-[#0a0a0a] tracking-[-0.8px] w-full">
                    Data APIs
                  </p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[#525252] w-full">
                    Multi-chain APIs for market data, ownership, portfolio and real-time notifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom - Select App Card */}
            <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] not-italic relative shrink-0 text-[16px] text-[#0a0a0a] tracking-[-0.32px] w-full">
                Select an app to begin
              </p>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                {/* Select */}
                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid relative rounded-[8px] shrink-0 w-full">
                    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-full">
                      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] text-nowrap">
                        My first app
                      </p>
                      <div className="relative shrink-0 size-[14px]">
                        <img alt="" className="block max-w-none size-full" src="/icons/CaretDown-bold.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Get Started Button */}
                <div className="bg-[#363ff9] box-border content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#2d35d9] transition-colors">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[#ffffff] text-nowrap whitespace-pre">
                    Get started
                  </p>
                  <div className="relative shrink-0 size-[16px]">
                    <img alt="" className="block max-w-none size-full" src="/icons/ArrowRight-bold.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="box-border content-stretch flex flex-col gap-[15.283px] h-[330px] items-start overflow-clip px-[18.34px] py-[12.226px] relative rounded-[8px] shrink-0 w-[579px]" style={{ backgroundImage: "url('/images/data-hero-image.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>

        {/* Why use Data APIs Section */}
        <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.64px] w-full">
              <p className="leading-[1.24]">Why use Data APIs?</p>
            </div>
          </div>

          <div className="content-stretch flex gap-[0px] items-start max-w-[1280px] relative shrink-0 w-full">
            {/* Left Column - Features */}
            <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative self-stretch shrink-0 w-[637px]">
              {/* Feature 1 */}
              <div className="content-stretch flex gap-[16px] items-center min-w-[240px] relative shrink-0 w-[576px]">
                <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid relative rounded-[8px] shrink-0 size-[36px]">
                  <div className="overflow-clip relative rounded-[inherit] size-[36px]">
                    <div className="absolute left-[6px] size-[24px] top-[6px]">
                      <img alt="" className="block max-w-none size-full" src="/icons/image-icon.svg" />
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] tracking-[-0.4px] w-full">
                    <p className="leading-[1.24]">Broader NFT coverage (2B+ indexed)</p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="content-stretch flex gap-[16px] items-center min-w-[240px] relative shrink-0 w-[576px]">
                <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid relative rounded-[8px] shrink-0 size-[36px]">
                  <div className="overflow-clip relative rounded-[inherit] size-[36px]">
                    <div className="absolute left-[6px] size-[24px] top-[6px]">
                      <img alt="" className="block max-w-none size-full" src="/icons/coin-icon.svg" />
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] tracking-[-0.4px] w-full">
                    <p className="leading-[1.24]">Rich token data (100M+ tokens, prices, holders)</p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="content-stretch flex gap-[16px] items-center min-w-[240px] relative shrink-0 w-[576px]">
                <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid relative rounded-[8px] shrink-0 size-[36px]">
                  <div className="overflow-clip relative rounded-[inherit] size-[36px]">
                    <div className="absolute left-[6px] size-[24px] top-[6px]">
                      <img alt="" className="block max-w-none size-full" src="/icons/arrows-icon.svg" />
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] tracking-[-0.4px] w-full">
                    <p className="leading-[1.24]">{`Transfers across 20+ chains with <1s discovery`}</p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="content-stretch flex gap-[16px] items-center min-w-[240px] relative shrink-0 w-[576px]">
                <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid relative rounded-[8px] shrink-0 size-[36px]">
                  <div className="overflow-clip relative rounded-[inherit] size-[36px]">
                    <div className="absolute left-[6px] size-[24px] top-[6px]">
                      <img alt="" className="block max-w-none size-full" src="/icons/broadcast-icon.svg" />
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] tracking-[-0.4px] w-full">
                    <p className="leading-[1.24]">Real-time events via Webhooks and Smart Websockets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="border border-[#e5e5e5] border-solid relative rounded-[8px] shrink-0 w-[576px]">
              <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] w-[576px]">
                <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[8px] shrink-0 w-full">
                  {/* Top Row */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="basis-0 bg-[#fafafa] border-[0px_1px_1px_0px] border-[#e5e5e5] border-solid box-border content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px not-italic p-[16px] relative shrink-0 text-center">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] relative shrink-0 text-[40px] text-[#0a0a0a] tracking-[-0.8px] w-full">
                        2B+
                      </p>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[#525252] w-full">
                        NFTs indexed
                      </p>
                    </div>
                    <div className="basis-0 bg-[#fafafa] border-[0px_0px_1px] border-[#e5e5e5] border-solid box-border content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px not-italic p-[16px] relative shrink-0 text-center">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] relative shrink-0 text-[40px] text-[#0a0a0a] tracking-[-0.8px] w-full">
                        100M+
                      </p>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[#525252] w-full">
                        Tokens indexed
                      </p>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="basis-0 bg-[#fafafa] border-[0px_1px_0px_0px] border-[#e5e5e5] border-solid box-border content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px not-italic p-[16px] relative shrink-0 text-center">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] relative shrink-0 text-[40px] text-[#0a0a0a] tracking-[-0.8px] w-full">
                        20+
                      </p>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[#525252] w-full">
                        Chains supported
                      </p>
                    </div>
                    <div className="basis-0 bg-[#fafafa] box-border content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px not-italic p-[16px] relative shrink-0 text-center">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] relative shrink-0 text-[40px] text-[#0a0a0a] tracking-[-0.8px] w-full">
                        99.99%
                      </p>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-[#525252] w-full">
                        Uptime
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Wrap - API Cards Section - 48px gap */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {/* Top Row */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-px items-stretch relative shrink-0 w-full">
              {/* Explore Card */}
              <div className="basis-0 bg-[#fafafa] border-[1px_1px_0px] border-[#e5e5e5] border-solid flex flex-col grow min-h-px min-w-px relative rounded-tl-[8px] shrink-0">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full h-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-900 tracking-[-0.48px] w-full">
                      <p className="leading-[1.24]">Explore the Data APIs</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666666] text-[18px] w-full">
                      <p className="leading-[28px]">Powerful APIs for NFTs, tokens, transfers, and real-time data.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* NFT API Card */}
              <div className="basis-0 bg-[#fafafa] border-[1px_1px_0px_0px] border-[#e5e5e5] border-solid flex flex-col grow min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] w-full h-full">
                  <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] text-nowrap tracking-[-0.4px]">
                        <p className="leading-[1.24] whitespace-pre">NFT API</p>
                      </div>
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#525252] w-full">
                        <p className="leading-[20px]">Collections, ownership, spam detection, and metadata.</p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex h-[112px] items-end justify-center pb-0 pt-[16px] px-0 relative shrink-0 w-full">
                    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[79px] overflow-clip top-[16px] w-[268px]">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                          <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                        </div>
                        <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                          <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                        </div>
                        <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                          <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                        <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                          <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                        </div>
                        <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                          <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                        </div>
                        <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                          <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                        </div>
                        <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                          <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Token API Card */}
              <div className="basis-0 bg-[#fafafa] border-[1px_1px_0px_0px] border-[#e5e5e5] border-solid flex flex-col grow min-h-px min-w-px relative rounded-tr-[8px] shrink-0">
                  <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] text-nowrap tracking-[-0.4px]">
                          <p className="leading-[1.24] whitespace-pre">Token API</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#525252] w-full">
                          <p className="leading-[20px]">The multi-chain API for fungible tokens, prices, owners, metadata, and more.</p>
                        </div>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex h-[112px] items-end justify-center pb-0 pt-[16px] px-0 relative shrink-0 w-full">
                      <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[79px] overflow-clip top-[16px] w-[268px]">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-px items-stretch relative shrink-0 w-full">
              {/* Transfers API Card */}
              <div className="basis-0 bg-[#fafafa] border border-[#e5e5e5] border-solid flex flex-col grow min-h-px min-w-px relative rounded-bl-[8px] shrink-0">
                  <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] text-nowrap tracking-[-0.4px]">
                          <p className="leading-[1.24] whitespace-pre">Transfers API</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#525252] w-full">
                          <p className="leading-[20px]">{`Fetch a wallet's transfer history in a single request on 50+ networks.`}</p>
                        </div>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex h-[112px] items-end justify-center pb-0 pt-[16px] px-0 relative shrink-0 w-full">
                      <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[79px] overflow-clip top-[16px] w-[268px]">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Webhooks Card */}
              <div className="basis-0 bg-[#fafafa] border-[1px_1px_1px_0px] border-[#e5e5e5] border-solid flex flex-col grow min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] text-nowrap tracking-[-0.4px]">
                          <p className="leading-[1.24] whitespace-pre">Webhooks</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#525252] w-full">
                          <p className="leading-[20px]">Fast, consistent push notifications for on-chain events.</p>
                        </div>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex h-[112px] items-end justify-center pb-0 pt-[16px] px-0 relative shrink-0 w-full">
                      <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[79px] overflow-clip top-[16px] w-[268px]">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Smart Websockets Card */}
              <div className="basis-0 bg-[#fafafa] border-[1px_1px_1px_0px] border-[#e5e5e5] border-solid flex flex-col grow min-h-px min-w-px relative rounded-br-[8px] shrink-0">
                  <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[#0a0a0a] text-nowrap tracking-[-0.4px]">
                          <p className="leading-[1.24] whitespace-pre">Smart Websockets</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#525252] w-full">
                          <p className="leading-[20px]">Scalable, customizable, and easy to set up notifications for onchain actions you care about.</p>
                        </div>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex h-[112px] items-end justify-center pb-0 pt-[16px] px-0 relative shrink-0 w-full">
                      <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[45.83px] overflow-clip top-[16px] w-[268px]">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                          <div className="bg-[#ffffff] border border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]">
                            <img alt="" className="block max-w-none size-[24px]" src="/icons/image-icon.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

