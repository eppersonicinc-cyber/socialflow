import React from 'react';
import { usePlatformHubData, usePlatformSyncTraffic } from '../hooks/usePlatformHubData';

const PlatformHub = () => {
  const { data: status, isLoading: isStatusLoading, error: statusError } = usePlatformHubData();
  const { data: traffic, isLoading: isTrafficLoading } = usePlatformSyncTraffic();

  if (isStatusLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#240f1b] text-white font-mono">
        <div className="flex flex-col items-center gap-4">
          <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="animate-pulse">CONNECTING TO PRODUCTION HUB...</p>
        </div>
      </div>
    );
  }

  if (statusError) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#240f1b] text-white font-mono p-10">
        <div className="border border-red-500 bg-red-500/10 p-8 rounded-xl max-w-md text-center">
          <span className="material-symbols-outlined text-red-500 text-5xl mb-4">router</span>
          <h2 className="text-xl font-bold mb-2">GATEWAY TIMEOUT</h2>
          <p className="text-[#ce8db1] text-sm mb-6">{statusError.message || 'Critical: Regional cluster unreachable.'}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
          >
            RE-AUTHENTICATE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#240f1b] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#4b2038] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <div className="size-4 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                  <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Platform Hub (PROD)</h2>
            </div>
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#ce8db1] flex border-none bg-[#4b2038] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#4b2038] focus:border-none h-full placeholder:text-[#ce8db1] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search Logs"/>
              </div>
            </label>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#4b2038] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#4b2038] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <span className="material-symbols-outlined">notifications</span>
              </button>
            </div>
            {status?.user?.avatar && (
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("${status.user.avatar}")` }}></div>
            )}
          </div>
        </header>
        <div className="flex h-full min-h-[900px] flex-col bg-[#240f1b] p-4">
          <div className="flex justify-between items-end mb-6">
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-bold leading-normal">{status?.hub?.id || 'OFFLINE'}</h1>
              <p className="text-[#ce8db1] text-sm font-normal leading-normal flex items-center gap-2">
                <span className={`size-2 rounded-full ${status?.hub?.status === 'Stable' ? 'bg-[#0bda87]' : 'bg-red-500'}`}></span>
                {status?.hub?.version || 'UNKNOWN'} | {status?.hub?.region && `Regional Cluster: ${status.hub.region}`}
              </p>
            </div>
            <div className="flex gap-3">
              {(status?.apis || []).map((api, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1 bg-[#4b2038] rounded-lg border border-[#6b2e50]">
                  <span className={`${api.status === 'CONNECTED' ? 'text-[#0bda87]' : 'text-red-500'} text-xs font-bold uppercase tracking-wider`}>{api.name}</span>
                  <span className="text-white text-xs">{api.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pb-3">
            <div className="flex border-b border-[#6b2e50] px-4 gap-8">
              {['Sync Monitor', 'OAuth Sessions', 'Error Logs', 'Trigger Logs'].map((tab) => (
                <a key={tab} className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-all ${tab === 'Sync Monitor' ? 'border-b-primary text-white' : 'border-b-transparent text-[#ce8db1] hover:text-white'}`} href="#">
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 py-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#6b2e50] bg-[#311425]">
              <p className="text-[#ce8db1] text-sm font-medium leading-normal">Live Data Packets</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">{status?.metrics?.packets || '0'}/hr</p>
              {status?.metrics?.packetDiff && (
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#0bda87] text-sm">trending_up</span>
                  <p className="text-[#0bda87] text-sm font-medium leading-normal">{status.metrics.packetDiff} vs prev hour</p>
                </div>
              )}
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#6b2e50] bg-[#311425]">
              <p className="text-[#ce8db1] text-sm font-medium leading-normal">Active Syncs</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">{status?.metrics?.syncs || '0'} Platforms</p>
              <p className="text-[#ce8db1] text-sm font-medium leading-normal italic text-xs">{status?.metrics?.syncStatus || 'UPLINK_INITIALIZING'}</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#6b2e50] bg-[#311425]">
              <p className="text-[#ce8db1] text-sm font-medium leading-normal">Avg. Latency</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">{status?.metrics?.latency || '0ms'}</p>
              {status?.metrics?.latencyOptimized && (
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#fa7938] text-sm">trending_down</span>
                  <p className="text-[#fa7938] text-sm font-medium leading-normal">{status.metrics.latencyOptimized}</p>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex flex-col gap-2 rounded-xl border border-[#6b2e50] p-6 bg-[#311425]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white text-lg font-bold">Real-time Sync Traffic</h3>
                  <div className="flex gap-2">
                    {traffic?.inbound && <span className="px-2 py-1 rounded bg-[#4b2038] text-[#ce8db1] text-xs uppercase">Inbound: {traffic.inbound}</span>}
                    {traffic?.outbound && <span className="px-2 py-1 rounded bg-[#4b2038] text-[#ce8db1] text-xs uppercase">Outbound: {traffic.outbound}</span>}
                  </div>
                </div>
                <div className="flex min-h-[220px] flex-1 flex-col gap-4">
                  {traffic?.svgPath ? (
                    <svg fill="none" height="180" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d={traffic.svgPath} fill="url(#paint0_linear_traffic)"></path>
                      {traffic.svgPathLine && <path d={traffic.svgPathLine} stroke="#ec5b13" strokeLinecap="round" strokeWidth="3"></path>}
                      <defs>
                        <linearGradient id="paint0_linear_traffic" x1="236" x2="236" y1="1" y2="149" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#ec5b13" stopOpacity="0.3"></stop>
                          <stop offset="1" stopColor="#ec5b13" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <div className="flex-1 flex items-center justify-center text-[#ce8db1] font-mono animate-pulse">Waiting for traffic telemetry...</div>
                  )}
                  <div className="flex justify-between">
                    {(traffic?.timeLabels || []).map((time) => (
                      <p key={time} className="text-[#ce8db1] text-[11px] font-bold">{time}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl border border-[#6b2e50] p-6 bg-[#311425]">
                <h3 className="text-white text-lg font-bold mb-4">Trigger Logs (Events)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[#ce8db1] text-xs uppercase border-b border-[#4b2038]">
                        <th className="py-2 px-4">Timestamp</th>
                        <th className="py-2 px-4">Event Type</th>
                        <th className="py-2 px-4">Platform</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Execution ID</th>
                      </tr>
                    </thead>
                    <tbody className="text-white text-sm">
                      {(status?.events || []).map((event, idx) => (
                        <tr key={idx} className="border-b border-[#4b2038] hover:bg-[#4b2038]/30 transition-colors">
                          <td className="py-3 px-4 font-mono text-xs">{event.time}</td>
                          <td className="py-3 px-4">{event.type}</td>
                          <td className="py-3 px-4">{event.platform}</td>
                          <td className="py-3 px-4"><span className={event.status === 'SUCCESS' ? 'text-[#0bda87]' : 'text-[#fa7938]'}>{event.status}</span></td>
                          <td className="py-3 px-4 font-mono text-xs">{event.id}</td>
                        </tr>
                      ))}
                      {status?.events?.length === 0 && (
                        <tr><td colSpan="5" className="py-10 text-center text-[#ce8db1] italic">No active triggers detected.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 rounded-xl border border-[#6b2e50] p-6 bg-[#311425]">
                <h3 className="text-white text-lg font-bold mb-4">Error Monitoring</h3>
                <div className="flex flex-col gap-4">
                  {(status?.errors || []).map((err, idx) => (
                    <div key={idx} className={`flex flex-col p-3 rounded bg-[#4b2038] border-l-4 ${err.severity === 'red' ? 'border-red-500' : 'border-yellow-500'}`}>
                      <div className="flex justify-between items-start">
                        <span className="text-white text-xs font-bold">{err.code}</span>
                        <span className="text-[#ce8db1] text-[10px]">{err.time}</span>
                      </div>
                      <p className="text-white/80 text-xs mt-1">{err.msg}</p>
                      <p className="text-[#ce8db1] text-[10px] mt-2 font-mono">Trace: {err.trace}</p>
                    </div>
                  ))}
                  {status?.errors?.length === 0 && (
                    <div className="text-[#0bda87] text-xs font-bold p-3 bg-[#4b2038] rounded border border-[#0bda87]/20">0 ANOMALIES DETECTED IN LAST 24H</div>
                  )}
                </div>
                {status?.totalErrors > 0 && (
                  <button className="mt-4 text-primary text-xs font-bold hover:underline uppercase">View All {status.totalErrors} Logs</button>
                )}
              </div>
              <div className="flex flex-col gap-2 rounded-xl border border-[#6b2e50] p-6 bg-[#311425]">
                <h3 className="text-white text-lg font-bold mb-4">OAuth Sessions</h3>
                <div className="flex flex-col gap-3">
                  {(status?.sessions || []).map((session, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`size-2 rounded-full ${session.status === 'OK' ? 'bg-[#0bda87]' : 'bg-red-500'}`}></div>
                        <span className="text-white text-sm">{session.name}</span>
                      </div>
                      {session.status === 'FAIL' ? (
                        <button className="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded hover:opacity-90 transition-opacity">RE-AUTH</button>
                      ) : (
                        <span className="text-[#ce8db1] text-xs">Exp in {session.exp}</span>
                      )}
                    </div>
                  ))}
                  {status?.sessions?.length === 0 && (
                     <p className="text-xs text-[#ce8db1] italic">No active auth sessions.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4 rounded-xl border border-[#6b2e50] p-6 bg-[#311425]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white text-lg font-bold">Node Health Distribution</h3>
              <span className="text-[#0bda87] text-xs font-bold">{status?.health?.overallStatus || 'SCANNING...'}</span>
            </div>
            <div className="flex h-3 w-full rounded-full bg-[#4b2038] overflow-hidden">
              <div className="h-full bg-[#0bda87] transition-all duration-1000" style={{ width: `${status?.health?.healthy || 0}%` }}></div>
              <div className="h-full bg-[#fa7938] transition-all duration-1000" style={{ width: `${status?.health?.recovery || 0}%` }}></div>
              <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: `${status?.health?.failed || 0}%` }}></div>
            </div>
            <div className="flex justify-between text-[#ce8db1] text-[10px] font-bold">
              <div className="flex items-center gap-1"><span className="size-2 rounded-full bg-[#0bda87]"></span> HEALTHY ({status?.health?.healthyCount || 0})</div>
              <div className="flex items-center gap-1"><span className="size-2 rounded-full bg-[#fa7938]"></span> RECOVERY ({status?.health?.recoveryCount || 0})</div>
              <div className="flex items-center gap-1"><span className="size-2 rounded-full bg-red-500"></span> FAILED ({status?.health?.failedCount || 0})</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformHub;
