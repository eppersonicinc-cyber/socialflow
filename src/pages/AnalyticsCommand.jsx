import React from 'react';

const AnalyticsCommand = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#221311] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#472724] px-10 py-3">
              <div className="flex items-center gap-4 text-white">
                <div className="size-4">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Analytics Command</h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <div className="flex gap-2">
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#472724] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#472724] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span className="material-symbols-outlined">settings</span>
                  </button>
                </div>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9gKWL7PGHEAyTRYear1BE_9b6ALmuPCGH7Jf6XNpVTgvjVo2OeU9AAKNNMRYBgNbTKhx9L6gQ6Tlkcp-Zau2klnwEDFlXYiNIAuAEk5oTN1BBQR4RDUp3HyPxXfYjJUJWvhSabXNNPzU0_OLEhr-i4cu4U-u27d79CsYd4YIksguU2JqBbHeg7UqJcziErsJLKF8dFcw3xwZ89iaarD8MWMBxYmD0Z66_0_vJ3aJOr9lkpZ5Owv3a7dkhSEvC3VU-DL4xRBQFHwz_")' }}></div>
              </div>
            </header>
            <div className="flex flex-col lg:flex-row h-full min-h-[700px] bg-[#221311]">
              <div className="w-full lg:w-64 border-r border-[#472724] p-4 flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="flex items-center justify-center bg-primary rounded-full size-10">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white text-base font-medium leading-normal">PROD Environment</h1>
                    <p className="text-[#c89893] text-sm font-normal leading-normal">Live Data Pipeline</p>
                  </div>
                </div>
                <nav className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#472724] rounded-xl transition-colors">
                    <span className="material-symbols-outlined text-white">dashboard</span>
                    <p className="text-white text-sm font-medium leading-normal">Dashboard</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#472724] border-l-4 border-primary">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                    <p className="text-white text-sm font-medium leading-normal">Analytics</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#472724] rounded-xl transition-colors">
                    <span className="material-symbols-outlined text-white">rss_feed</span>
                    <p className="text-white text-sm font-medium leading-normal">Streams</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#472724] rounded-xl transition-colors">
                    <span className="material-symbols-outlined text-white">settings_input_component</span>
                    <p className="text-white text-sm font-medium leading-normal">Connections</p>
                  </div>
                </nav>
              </div>
              <main className="flex-1 p-4 lg:p-8 text-white">
                <div className="pb-6">
                  <div className="flex border-b border-[#653834] gap-8">
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-white pb-[13px] transition-colors" href="#">
                      <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">Global Reach Monitor</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#c89893] pb-[13px] hover:text-white transition-colors" href="#">
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">Health & APIs</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#c89893] pb-[13px] hover:text-white transition-colors" href="#">
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">AI Core Insights</p>
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 mb-8">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="size-3 bg-[#0bda0f] rounded-full animate-pulse"></span>
                      <p className="text-[#0bda0f] text-xs font-bold uppercase tracking-widest">Live: WebSocket Connected</p>
                    </div>
                    <h2 className="text-white tracking-tight text-3xl font-bold leading-tight">Global Reach Monitor</h2>
                    <p className="text-[#c89893] text-sm font-normal">Active sync with Firebase Realtime Database and Cloud Streams.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-[#472724] p-3 rounded-xl border border-[#653834]">
                      <p className="text-[#c89893] text-[10px] uppercase font-bold mb-1">Total Latency</p>
                      <p className="text-white text-xl font-bold font-mono">24ms</p>
                    </div>
                    <div className="bg-[#472724] p-3 rounded-xl border border-[#653834]">
                      <p className="text-[#c89893] text-[10px] uppercase font-bold mb-1">Active Buffers</p>
                      <p className="text-white text-xl font-bold font-mono">1.2GB</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="col-span-1 md:col-span-2 bg-[#2d1a18] border border-[#472724] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[#c89893] text-sm font-medium">Real-time Global Engagement</p>
                      <span className="text-[#0bda0f] bg-[#0bda0f1a] px-2 py-1 rounded-full text-xs font-bold">+12% vs last hr</span>
                    </div>
                    <div className="flex items-end gap-4 mb-6">
                      <p className="text-white text-5xl font-bold tracking-tighter">42,841</p>
                      <div className="pb-1">
                        <span className="material-symbols-outlined text-[#0bda0f] text-sm">trending_up</span>
                      </div>
                    </div>
                    <div className="w-full h-32">
                      <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 400 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 80C20 75 40 85 60 60C80 35 100 45 120 40C140 35 160 55 180 30C200 5 220 20 240 45C260 70 280 65 300 85C320 105 340 50 360 20C380 -10 400 15 420 10" fill="none" stroke="#ec5b13" strokeLinecap="round" strokeWidth="3"></path>
                        <path d="M0 80C20 75 40 85 60 60C80 35 100 45 120 40C140 35 160 55 180 30C200 5 220 20 240 45C260 70 280 65 300 85C320 105 340 50 360 20C380 -10 400 15 420 10V100H0V80Z" fill="url(#main_grad)"></path>
                        <defs>
                          <linearGradient id="main_grad" x1="0" x2="0" y1="0" y2="100" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#ec5b13" stopOpacity="0.3"></stop>
                            <stop offset="1" stopColor="#ec5b13" stopOpacity="0"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-[#2d1a18] border border-[#472724] rounded-2xl p-6">
                    <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Network API Health</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-[#0bda0f]"></div>
                          <span className="text-sm font-medium">Meta Graph API</span>
                        </div>
                        <span className="text-[#c89893] text-xs font-mono">OAuth 2.0 OK</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-[#0bda0f]"></div>
                          <span className="text-sm font-medium">X (Twitter) v2</span>
                        </div>
                        <span className="text-[#c89893] text-xs font-mono">OAuth 2.0 OK</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-yellow-400"></div>
                          <span className="text-sm font-medium">TikTok Pixels</span>
                        </div>
                        <span className="text-[#c89893] text-xs font-mono">Syncing...</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-[#0bda0f]"></div>
                          <span className="text-sm font-medium">LinkedIn V2</span>
                        </div>
                        <span className="text-[#c89893] text-xs font-mono">OAuth 2.0 OK</span>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#472724]">
                        <button className="w-full py-2 bg-[#472724] hover:bg-[#5a322e] rounded-lg text-xs font-bold transition-colors">MANAGE ENDPOINTS</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 bg-[#2d1a18] border border-primary/30 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <span className="material-symbols-outlined text-6xl">psychology</span>
                    </div>
                    <h3 className="text-white text-sm font-bold flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-primary text-lg">auto_awesome</span>
                      AI Insights Core
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-[#221311] p-4 rounded-xl border-l-2 border-primary">
                        <p className="text-xs text-primary font-bold mb-1">ANOMALY DETECTED</p>
                        <p className="text-sm text-white leading-relaxed">Engagement in APAC region is 24% higher than historical Sunday averages. Suggesting dynamic ad spend boost.</p>
                      </div>
                      <div className="p-2">
                        <p className="text-xs text-[#c89893] mb-2 uppercase font-bold">Predictive Forecast</p>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold">88.4k</span>
                          <span className="text-xs text-[#0bda0f]">Peak reach expected in 4h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 bg-[#2d1a18] border border-[#472724] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white text-sm font-bold uppercase tracking-wider">Live Activity Stream</h3>
                      <span className="text-[#c89893] text-xs font-mono">Last updated: Just now</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="text-[#c89893] border-b border-[#472724]">
                            <th className="pb-3 font-medium">Event Type</th>
                            <th className="pb-3 font-medium">Source</th>
                            <th className="pb-3 font-medium">Location</th>
                            <th className="pb-3 font-medium text-right">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#472724]">
                          <tr className="group">
                            <td className="py-4 font-mono text-xs flex items-center gap-2">
                              <span className="size-1.5 rounded-full bg-primary"></span>
                              PURCHASE_COMPLETED
                            </td>
                            <td className="py-4 text-[#c89893]">Facebook_Ads_UK</td>
                            <td className="py-4">London, GB</td>
                            <td className="py-4 text-right font-bold text-white">$142.00</td>
                          </tr>
                          <tr className="group">
                            <td className="py-4 font-mono text-xs flex items-center gap-2">
                              <span className="size-1.5 rounded-full bg-blue-400"></span>
                              CONVERSION_START
                            </td>
                            <td className="py-4 text-[#c89893]">Organic_Search</td>
                            <td className="py-4">New York, US</td>
                            <td className="py-4 text-right font-bold text-white">--</td>
                          </tr>
                          <tr className="group">
                            <td className="py-4 font-mono text-xs flex items-center gap-2">
                              <span className="size-1.5 rounded-full bg-primary"></span>
                              PURCHASE_COMPLETED
                            </td>
                            <td className="py-4 text-[#c89893]">Instagram_Shop</td>
                            <td className="py-4">Berlin, DE</td>
                            <td className="py-4 text-right font-bold text-white">$89.50</td>
                          </tr>
                          <tr className="group">
                            <td className="py-4 font-mono text-xs flex items-center gap-2">
                              <span className="size-1.5 rounded-full bg-gray-500"></span>
                              PAGE_VIEW_EXTENDED
                            </td>
                            <td className="py-4 text-[#c89893]">Direct_Traffic</td>
                            <td className="py-4">Tokyo, JP</td>
                            <td className="py-4 text-right font-bold text-white">--</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <footer className="mt-auto px-10 py-6 border-t border-[#472724] flex items-center justify-between text-[#c89893] text-xs">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">verified</span> Data Pipeline Encrypted (AES-256)</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">dns</span> Node Cluster: AWS-US-EAST-1</span>
              </div>
              <div className="flex gap-4">
                <p>© 2024 Analytics Command Inc.</p>
                <a className="hover:underline" href="#">System Status</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCommand;
