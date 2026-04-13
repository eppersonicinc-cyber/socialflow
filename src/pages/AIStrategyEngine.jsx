import React from 'react';
import { useAIStrategyData, useAIStrategyLogs } from '../hooks/useAIStrategyData';

const AIStrategyEngine = () => {
  const { data: status, isLoading: isStatusLoading, error: statusError } = useAIStrategyData();
  const { data: logs, isLoading: isLogsLoading } = useAIStrategyLogs();

  if (isStatusLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#1e0f24] text-white font-mono">
        <div className="flex flex-col items-center gap-4">
          <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="animate-pulse">INITIALIZING PRODUCTION NODE...</p>
        </div>
      </div>
    );
  }

  if (statusError) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#1e0f24] text-white font-mono p-10">
        <div className="border border-red-500 bg-red-500/10 p-8 rounded-xl max-w-md text-center">
          <span className="material-symbols-outlined text-red-500 text-5xl mb-4">error</span>
          <h2 className="text-xl font-bold mb-2">CONNECTION FAILURE</h2>
          <p className="text-[#bd8dce] text-sm mb-6">{statusError.message || 'Critical: Production connection refused.'}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
          >
            RETRY CONNECTION
          </button>
        </div>
      </div>
    );
  }

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
                    <div className="text-[#bd8dce] flex border-none bg-[#40204b] items-center justify-center pl-4 rounded-l-xl border-r-0">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#40204b] focus:border-none h-full placeholder:text-[#bd8dce] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search strategies..."/>
                  </div>
                </label>
                <div className="flex gap-2">
                  <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 bg-[#40204b] text-white px-3">
                    <span className="material-symbols-outlined">settings</span>
                  </button>
                  <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 bg-[#40204b] text-white px-3 relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
                  </button>
                </div>
                {status?.user?.avatar && (
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-primary/30" style={{ backgroundImage: `url("${status.user.avatar}")` }}></div>
                )}
              </div>
            </header>
            <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-10">
              <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-[#2a1631] border border-[#40204b]">
                  <h3 className="text-white text-xs font-bold uppercase tracking-widest text-[#bd8dce]">Active Node</h3>
                  <div className="flex items-center gap-3">
                    <div className={`size-3 rounded-full ${status?.node?.online ? 'bg-[#0bda7a]' : 'bg-red-500'}`}></div>
                    <p className="text-white font-mono text-sm">{status?.node?.id || 'NO_ACTIVE_NODE'}</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#bd8dce]">GPU Cluster</span>
                      <span className="text-white">{status?.node?.cluster || 'N/A'}</span>
                    </div>
                    <div className="w-full bg-[#40204b] h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full transition-all duration-500" style={{ width: `${status?.node?.load || 0}%` }}></div>
                    </div>
                  </div>
                </div>
                <nav className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary text-white cursor-pointer">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                    <p className="text-sm font-medium">Inference Terminal</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-[#bd8dce] hover:bg-[#40204b] rounded-xl cursor-pointer transition-colors">
                    <span className="material-symbols-outlined">bar_chart</span>
                    <p className="text-sm font-medium">Strategy Analytics</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-[#bd8dce] hover:bg-[#40204b] rounded-xl cursor-pointer transition-colors">
                    <span className="material-symbols-outlined">database</span>
                    <p className="text-sm font-medium">Knowledge Base</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-[#bd8dce] hover:bg-[#40204b] rounded-xl cursor-pointer transition-colors">
                    <span className="material-symbols-outlined">history</span>
                    <p className="text-sm font-medium">History Logs</p>
                  </div>
                </nav>
                <div className="mt-auto p-4 rounded-xl border border-[#40204b] bg-[#2a1631]/50">
                  <h4 className="text-white text-sm font-bold mb-3">Strategy History</h4>
                  <div className="space-y-4">
                    {(status?.history || []).map((item, idx) => (
                      <div key={idx} className={`flex flex-col gap-1 border-l-2 pl-3 ${item.status === 'Success' ? 'border-[#40204b]' : 'border-primary'}`}>
                        <p className="text-xs text-[#bd8dce]">{item.time}</p>
                        <p className="text-white text-sm truncate">{item.name}</p>
                        <span className={`text-[10px] ${item.status === 'Success' ? 'text-[#0bda7a]' : 'text-primary'}`}>{item.status}</span>
                      </div>
                    ))}
                    {status?.history?.length === 0 && (
                       <p className="text-xs text-[#bd8dce] italic">Telemetry synchronized. No historical data found.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-9 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#40204b] bg-[#2a1631]">
                    <p className="text-[#bd8dce] text-xs font-bold uppercase">Node Latency</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-white text-3xl font-black">{status?.metrics?.latency || '0ms'}</p>
                      {status?.metrics?.latencyDiff && (
                        <p className={`${(status?.metrics?.latencyDiffVal || 0) < 0 ? 'text-[#fa6f38]' : 'text-[#0bda7a]'} text-xs font-medium`}>
                          {status.metrics.latencyDiff}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#40204b] bg-[#2a1631]">
                    <p className="text-[#bd8dce] text-xs font-bold uppercase">Throughput</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-white text-3xl font-black">{status?.metrics?.throughput || '0'}<span className="text-sm font-normal text-[#bd8dce]">/s</span></p>
                      {status?.metrics?.throughputDiff && (
                        <p className="text-[#0bda7a] text-xs font-medium">{status.metrics.throughputDiff}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#40204b] bg-[#2a1631]">
                    <p className="text-[#bd8dce] text-xs font-bold uppercase">Active Jobs</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-white text-3xl font-black">{status?.metrics?.activeJobs || '0'}</p>
                      <p className="text-[#0bda7a] text-xs font-medium">{status?.metrics?.jobsStatus || 'INIT'}</p>
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
                      <span className="text-[#bd8dce] text-xs font-mono">{logs?.streamId || 'DISCONNECTED'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`size-2 rounded-full animate-pulse ${logs?.connected ? 'bg-[#0bda7a]' : 'bg-red-500'}`}></span>
                      <span className={`text-[10px] font-bold uppercase tracking-tighter ${logs?.connected ? 'text-[#0bda7a]' : 'text-red-500'}`}>
                        {logs?.connected ? 'Live Connection' : 'Disconnected'}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-6 font-mono text-sm overflow-y-auto space-y-2 bg-[#0d070f]">
                    {isLogsLoading ? (
                      <div className="text-[#6b427a] animate-pulse">Establishing uplink...</div>
                    ) : (
                      <>
                        {(logs?.systemLogs || []).map((log, idx) => (
                           <div key={idx} className="text-[#6b427a]">[{log.time}] <span className={log.type === 'READY' ? 'text-[#0bda7a]' : 'text-[#bd8dce]'}>{log.type}:</span> {log.message}</div>
                        ))}
                        {logs?.currentAction && (
                          <div className="pt-4 text-white">
                            <span className="text-primary mr-2">➜</span> <span className="text-[#bd8dce]">{logs.currentAction}</span>
                          </div>
                        )}
                        <div className="pl-6 text-[#bd8dce] leading-relaxed">
                          {(logs?.streamLines || []).map((line, idx) => (
                            <p key={idx} className={`stream-line ${line.highlight ? 'text-white' : ''}`}>{line.text}</p>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-4 bg-[#1a0c1f] border-t border-[#40204b]">
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <input className="w-full bg-[#0d070f] border border-[#40204b] rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-[#6b427a] font-mono" placeholder="Inject command..." type="text"/>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                          <span className="material-symbols-outlined text-[#6b427a] cursor-pointer hover:text-white">attach_file</span>
                          <span className="material-symbols-outlined text-[#6b427a] cursor-pointer hover:text-white">mic</span>
                        </div>
                      </div>
                      <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all">
                        <span>EXECUTE</span>
                        <span className="material-symbols-outlined text-sm">bolt</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-[#40204b] bg-[#2a1631] p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-bold">Content Generation Flow</h3>
                      <span className="material-symbols-outlined text-[#bd8dce]">more_horiz</span>
                    </div>
                    <div className="relative h-32 w-full bg-[#1a0c1f] rounded-lg border border-[#40204b] flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #bd8dce 1px, transparent 0)', backgroundSize: '12px 12px' }}></div>
                      <div className="z-10 flex gap-4 items-center">
                        <div className={`size-10 rounded flex items-center justify-center border ${status?.flow?.step >= 1 ? 'bg-[#40204b] border-primary/50' : 'bg-[#1a0c1f] border-[#40204b]'}`}>
                          <span className={`material-symbols-outlined text-sm ${status?.flow?.step >= 1 ? 'text-primary' : 'text-[#bd8dce]'}`}>auto_awesome</span>
                        </div>
                        <div className={`h-0.5 w-12 ${status?.flow?.step >= 2 ? 'bg-primary' : 'bg-[#40204b]'}`}></div>
                        <div className={`size-10 rounded flex items-center justify-center border ${status?.flow?.step >= 2 ? 'bg-[#40204b] border-primary/50' : 'bg-[#1a0c1f] border-[#40204b]'}`}>
                          <span className={`material-symbols-outlined text-sm ${status?.flow?.step >= 2 ? 'text-primary' : 'text-[#bd8dce]'}`}>edit_note</span>
                        </div>
                        <div className={`h-0.5 w-12 ${status?.flow?.step >= 3 ? 'bg-primary' : 'bg-[#40204b]'}`}></div>
                        <div className={`size-10 rounded flex items-center justify-center border ${status?.flow?.step >= 3 ? 'bg-[#40204b] border-primary/50' : 'bg-[#1a0c1f] border-[#40204b]'}`}>
                          <span className={`material-symbols-outlined text-sm ${status?.flow?.step >= 3 ? 'text-primary' : 'text-[#bd8dce]'}`}>publish</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#bd8dce] text-xs mt-4 leading-relaxed italic">{status?.flow?.description || 'WAITING_FOR_PIPELINE'}</p>
                  </div>
                  <div className="rounded-2xl border border-[#40204b] bg-[#2a1631] p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-bold">Risk Distribution</h3>
                      <span className="material-symbols-outlined text-[#bd8dce]">open_in_full</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="relative size-24">
                        <svg className="size-full" viewBox="0 0 36 36">
                          <path className="stroke-[#40204b]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4"></path>
                          <path className="stroke-primary transition-all duration-1000" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray={`${status?.risk?.value || 0}, 100`} strokeLinecap="round" strokeWidth="4"></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-lg font-black">{status?.risk?.value || 0}%</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        {(status?.risk?.factors || []).map((factor, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs">
                            <span className="text-[#bd8dce]">{factor.name}</span>
                            <span className={factor.color}>{factor.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="mt-auto border-t border-[#40204b] px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#bd8dce] text-xs font-mono">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2"><span className={`size-2 rounded-full ${status?.systemOnline ? 'bg-[#0bda7a]' : 'bg-red-500'}`}></span> SYSTEM {status?.systemOnline ? 'ONLINE' : 'OFFLINE'}</span>
                <span>NODE_VERSION: {status?.nodeVersion || 'N/A'}</span>
                <span>API_LATENCY: {status?.apiLatency || '0MS'}</span>
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
