import React from 'react';

const AIStrategyEngine = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#1e0f24] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#40204b] px-4 md:px-10 py-3">
              <div className="flex items-center gap-4 text-white">
                <div className="size-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">AI Strategy Engine <span className="ml-2 text-[10px] bg-primary px-1.5 py-0.5 rounded text-white uppercase tracking-widest">Prod</span></h2>
              </div>
              <div className="flex flex-1 justify-end gap-4 md:gap-8">
                <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div className="text-[#bd8dce] flex border-none bg-[#40204b] items-center justify-center pl-4 rounded-l-xl border-r-0" data-icon="magnifying_glass">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#40204b] focus:border-none h-full placeholder:text-[#bd8dce] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search strategies..." defaultValue=""/>
                  </div>
                </label>
                <div className="flex gap-2">
                  <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 bg-[#40204b] text-white px-3">
                    <span className="material-symbols-outlined" data-icon="settings">settings</span>
                  </button>
                  <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 bg-[#40204b] text-white px-3 relative">
                    <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                    <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
                  </button>
                </div>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-primary/30" data-alt="Professional portrait" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoaOWHvDElc_-VENieHeT4nRKnpFFfvHC8tL5QAmZW9OKGO4uQ9wTzfsP1EbBLLyPaqo1ObHLUUjxrScQ09mu4e85qfybpXVCKzcmqiMp98FCPABoUNRJHPcKcn2ybgZqsZQGF4D-YaB4oOMiaVbuobFVj6ztcjstS2A75wy8PxSVIV0cWpC__GGfEMJzVoF6-N6BNEV6Nk6SW9wt3cBhnY6ACX-ymCJ3W7kot2nP7YN6LhoV2K8gwEuQEt6uCuin5j7x5GwT8ocBI")' }}></div>
              </div>
            </header>
            <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-10">
              <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-[#2a1631] border border-[#40204b]">
                  <h3 className="text-white text-xs font-bold uppercase tracking-widest text-[#bd8dce]">Active Node</h3>
                  <div className="flex items-center gap-3">
                    <div className="size-3 bg-[#0bda7a] rounded-full"></div>
                    <p className="text-white font-mono text-sm">us-east-prod-04</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#bd8dce]">GPU Cluster</span>
                      <span className="text-white">H100 x 8</span>
                    </div>
                    <div className="w-full bg-[#40204b] h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[65%]"></div>
                    </div>
                  </div>
                </div>
                <nav className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary text-white cursor-pointer">
                    <span className="material-symbols-outlined" data-icon="terminal" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                    <p className="text-sm font-medium">Inference Terminal</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-[#bd8dce] hover:bg-[#40204b] rounded-xl cursor-pointer transition-colors">
                    <span className="material-symbols-outlined" data-icon="bar_chart">bar_chart</span>
                    <p className="text-sm font-medium">Strategy Analytics</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-[#bd8dce] hover:bg-[#40204b] rounded-xl cursor-pointer transition-colors">
                    <span className="material-symbols-outlined" data-icon="database">database</span>
                    <p className="text-sm font-medium">Knowledge Base</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-[#bd8dce] hover:bg-[#40204b] rounded-xl cursor-pointer transition-colors">
                    <span className="material-symbols-outlined" data-icon="history">history</span>
                    <p className="text-sm font-medium">History Logs</p>
                  </div>
                </nav>
                <div className="mt-auto p-4 rounded-xl border border-[#40204b] bg-[#2a1631]/50">
                  <h4 className="text-white text-sm font-bold mb-3">Strategy History</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1 border-l-2 border-[#40204b] pl-3">
                      <p className="text-xs text-[#bd8dce]">12:45 PM</p>
                      <p className="text-white text-sm truncate">Q4 Market Expansion Plan</p>
                      <span className="text-[10px] text-[#0bda7a]">Success</span>
                    </div>
                    <div className="flex flex-col gap-1 border-l-2 border-[#40204b] pl-3">
                      <p className="text-xs text-[#bd8dce]">11:20 AM</p>
                      <p className="text-white text-sm truncate">Competitor Delta Analysis</p>
                      <span className="text-[10px] text-[#0bda7a]">Success</span>
                    </div>
                    <div className="flex flex-col gap-1 border-l-2 border-primary pl-3">
                      <p className="text-xs text-[#bd8dce]">09:15 AM</p>
                      <p className="text-white text-sm truncate">Risk Mitigation Framework</p>
                      <span className="text-[10px] text-primary">Archived</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-9 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#40204b] bg-[#2a1631]">
                    <p className="text-[#bd8dce] text-xs font-bold uppercase">Node Latency</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-white text-3xl font-black">42ms</p>
                      <p className="text-[#fa6f38] text-xs font-medium">-4%</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#40204b] bg-[#2a1631]">
                    <p className="text-[#bd8dce] text-xs font-bold uppercase">Throughput</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-white text-3xl font-black">1.2k<span className="text-sm font-normal text-[#bd8dce]">/s</span></p>
                      <p className="text-[#0bda7a] text-xs font-medium">+12%</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#40204b] bg-[#2a1631]">
                    <p className="text-[#bd8dce] text-xs font-bold uppercase">Active Jobs</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-white text-3xl font-black">14</p>
                      <p className="text-[#0bda7a] text-xs font-medium">Stable</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 min-h-[500px] rounded-2xl bg-[#0d070f] border border-[#40204b] overflow-hidden shadow-2xl">
                  <div className="flex items-center justify-between bg-[#1a0c1f] px-6 py-4 border-b border-[#40204b]">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1.5">
                        <div className="size-2.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="size-2.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="size-2.5 rounded-full bg-[#27c93f]"></div>
                      </div>
                      <span className="text-[#bd8dce] text-xs font-mono">inference_stream_v2.log</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 bg-[#0bda7a] rounded-full animate-pulse"></span>
                      <span className="text-[10px] text-[#0bda7a] font-bold uppercase tracking-tighter">Live Connection</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6 font-mono text-sm overflow-y-auto space-y-2 bg-[#0d070f]">
                    <div className="text-[#6b427a]">[08:42:11] <span className="text-[#bd8dce]">INFO:</span> Initializing production node us-east-prod-04...</div>
                    <div className="text-[#6b427a]">[08:42:12] <span className="text-[#bd8dce]">INFO:</span> Model weights loaded (Llama-3-70B-Turbo)</div>
                    <div className="text-[#6b427a]">[08:42:15] <span className="text-[#0bda7a]">READY:</span> Streaming endpoint established.</div>
                    <div className="pt-4 text-white">
                      <span className="text-primary mr-2">➜</span> <span className="text-[#bd8dce]">Executing strategy synthesis...</span>
                    </div>
                    <div className="pl-6 text-[#bd8dce] leading-relaxed">
                      <p className="stream-line">Analyzing 1.4M data points from Q3 market reports...</p>
                      <p className="stream-line">Cross-referencing with global supply chain indices...</p>
                      <p className="stream-line">Identifying high-probability growth vectors in Southeast Asia...</p>
                      <p className="stream-line">Weighting geopolitical risk factors against potential ROI (Threshold: 0.85)...</p>
                      <p className="stream-line">Synthesizing final executive summary...</p>
                      <p className="stream-line text-white">&gt; System awaiting user confirmation for deployment parameters_</p>
                    </div>
                  </div>
                  <div className="p-4 bg-[#1a0c1f] border-t border-[#40204b]">
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <input className="w-full bg-[#0d070f] border border-[#40204b] rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-[#6b427a] font-mono" placeholder="Inject command or prompt suffix..." type="text"/>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                          <span className="material-symbols-outlined text-[#6b427a] cursor-pointer hover:text-white" data-icon="attach_file">attach_file</span>
                          <span className="material-symbols-outlined text-[#6b427a] cursor-pointer hover:text-white" data-icon="mic">mic</span>
                        </div>
                      </div>
                      <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all">
                        <span>EXECUTE</span>
                        <span className="material-symbols-outlined text-sm" data-icon="bolt" data-weight="fill">bolt</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-[#40204b] bg-[#2a1631] p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-bold">Content Generation Flow</h3>
                      <span className="material-symbols-outlined text-[#bd8dce]" data-icon="more_horiz">more_horiz</span>
                    </div>
                    <div className="relative h-32 w-full bg-[#1a0c1f] rounded-lg border border-[#40204b] flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20" data-alt="Technical blueprint grid pattern" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #bd8dce 1px, transparent 0)', backgroundSize: '12px 12px' }}></div>
                      <div className="z-10 flex gap-4 items-center">
                        <div className="size-10 rounded bg-[#40204b] flex items-center justify-center border border-primary/50">
                          <span className="material-symbols-outlined text-primary text-sm" data-icon="auto_awesome">auto_awesome</span>
                        </div>
                        <div className="h-0.5 w-12 bg-primary"></div>
                        <div className="size-10 rounded bg-[#40204b] flex items-center justify-center border border-primary/50">
                          <span className="material-symbols-outlined text-primary text-sm" data-icon="edit_note">edit_note</span>
                        </div>
                        <div className="h-0.5 w-12 bg-[#40204b]"></div>
                        <div className="size-10 rounded bg-[#1a0c1f] flex items-center justify-center border border-[#40204b]">
                          <span className="material-symbols-outlined text-[#bd8dce] text-sm" data-icon="publish">publish</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#bd8dce] text-xs mt-4 leading-relaxed italic">Drafting social media campaign based on Southeast Asia growth vector... 85% complete.</p>
                  </div>
                  <div className="rounded-2xl border border-[#40204b] bg-[#2a1631] p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-bold">Risk Distribution</h3>
                      <span className="material-symbols-outlined text-[#bd8dce]" data-icon="open_in_full">open_in_full</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="relative size-24">
                        <svg className="size-full" viewBox="0 0 36 36">
                          <path className="stroke-[#40204b]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4"></path>
                          <path className="stroke-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="4"></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-lg font-black">75%</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#bd8dce]">Market Fit</span>
                          <span className="text-white">High</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#bd8dce]">Compliance</span>
                          <span className="text-[#fa6f38]">Action Req.</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#bd8dce]">Scalability</span>
                          <span className="text-[#0bda7a]">Optimal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="mt-auto border-t border-[#40204b] px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#bd8dce] text-xs font-mono">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2"><span className="size-2 bg-[#0bda7a] rounded-full"></span> SYSTEM ONLINE</span>
                <span>NODE_VERSION: 2.4.0-STABLE</span>
                <span>API_LATENCY: 14MS</span>
              </div>
              <div className="flex gap-6">
                <a className="hover:text-primary transition-colors" href="#">DOCUMENTATION</a>
                <a className="hover:text-primary transition-colors" href="#">API KEYS</a>
                <a className="hover:text-primary transition-colors" href="#">SUPPORT</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStrategyEngine;
