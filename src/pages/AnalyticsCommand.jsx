import React from 'react';
import { useAnalyticsMonitor, useLiveActivityStream } from '../hooks/useAnalyticsData';

const AnalyticsCommand = () => {
  const { data: monitor, isLoading: isMonitorLoading, error: monitorError } = useAnalyticsMonitor();
  const { data: activity, isLoading: isActivityLoading } = useLiveActivityStream();

  if (isMonitorLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#221311] text-white font-mono">
        <div className="flex flex-col items-center gap-4">
          <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="animate-pulse">SYNCHRONIZING WITH PRODUCTION CLOUD...</p>
        </div>
      </div>
    );
  }

  if (monitorError) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#221311] text-white font-mono p-10">
        <div className="border border-red-500 bg-red-500/10 p-8 rounded-xl max-w-md text-center">
          <span className="material-symbols-outlined text-red-500 text-5xl mb-4">cloud_off</span>
          <h2 className="text-xl font-bold mb-2">PIPELINE DISRUPTED</h2>
          <p className="text-[#c89893] text-sm mb-6">{monitorError.message || 'Critical: Production database handshake failed.'}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
          >
            RE-INITIATE HANDSHAKE
          </button>
        </div>
      </div>
    );
  }

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
                {monitor?.user?.avatar && (
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("${monitor.user.avatar}")` }}></div>
                )}
              </div>
            </header>
            <div className="flex flex-col lg:flex-row h-full min-h-[700px] bg-[#221311]">
              <div className="w-full lg:w-64 border-r border-[#472724] p-4 flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="flex items-center justify-center bg-primary rounded-full size-10">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white text-base font-medium leading-normal">{monitor?.envName || 'PRODUCTION'}</h1>
                    <p className="text-[#c89893] text-sm font-normal leading-normal">{monitor?.envStatus || 'OFFLINE'}</p>
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
                    {['Global Reach Monitor', 'Health & APIs', 'AI Core Insights'].map((tab) => (
                      <a key={tab} className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] transition-colors ${tab === 'Global Reach Monitor' ? 'border-b-primary text-white' : 'border-b-transparent text-[#c89893] hover:text-white'}`} href="#">
                        <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab}</p>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 mb-8">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className={`size-3 rounded-full animate-pulse ${monitor?.live ? 'bg-[#0bda0f]' : 'bg-red-500'}`}></span>
                      <p className={`${monitor?.live ? 'text-[#0bda0f]' : 'text-red-500'} text-xs font-bold uppercase tracking-widest`}>
                        {monitor?.connectionStatus || 'DISCONNECTED'}
                      </p>
                    </div>
                    <h2 className="text-white tracking-tight text-3xl font-bold leading-tight">{monitor?.title || 'Reach Monitor'}</h2>
                    <p className="text-[#c89893] text-sm font-normal">{monitor?.description || 'Synchronizing with global data streams...'}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-[#472724] p-3 rounded-xl border border-[#653834]">
                      <p className="text-[#c89893] text-[10px] uppercase font-bold mb-1">Total Latency</p>
                      <p className="text-white text-xl font-bold font-mono">{monitor?.metrics?.latency || '0ms'}</p>
                    </div>
                    <div className="bg-[#472724] p-3 rounded-xl border border-[#653834]">
                      <p className="text-[#c89893] text-[10px] uppercase font-bold mb-1">Active Buffers</p>
                      <p className="text-white text-xl font-bold font-mono">{monitor?.metrics?.buffers || '0B'}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="col-span-1 md:col-span-2 bg-[#2d1a18] border border-[#472724] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[#c89893] text-sm font-medium">Real-time Global Engagement</p>
                      {monitor?.engagement?.growth && <span className="text-[#0bda0f] bg-[#0bda0f1a] px-2 py-1 rounded-full text-xs font-bold">{monitor.engagement.growth} vs last hr</span>}
                    </div>
                    <div className="flex items-end gap-4 mb-6">
                      <p className="text-white text-5xl font-bold tracking-tighter">{monitor?.engagement?.value || '0'}</p>
                      <div className="pb-1">
                        <span className="material-symbols-outlined text-[#0bda0f] text-sm">trending_up</span>
                      </div>
                    </div>
                    <div className="w-full h-32">
                      {monitor?.engagement?.svgPath ? (
                        <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 400 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d={monitor.engagement.svgPath} fill="none" stroke="#ec5b13" strokeLinecap="round" strokeWidth="3"></path>
                          {monitor.engagement.svgPathArea && <path d={monitor.engagement.svgPathArea} fill="url(#main_grad)"></path>}
                          <defs>
                            <linearGradient id="main_grad" x1="0" x2="0" y1="0" y2="100" gradientUnits="userSpaceOnUse">
                              <stop offset="0" stopColor="#ec5b13" stopOpacity="0.3"></stop>
                              <stop offset="1" stopColor="#ec5b13" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      ) : (
                        <div className="flex-1 flex items-center justify-center text-[#c89893] font-mono animate-pulse">Waiting for engagement metrics...</div>
                      )}
                    </div>
                  </div>
                  <div className="bg-[#2d1a18] border border-[#472724] rounded-2xl p-6">
                    <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Network API Health</h3>
                    <div className="space-y-4">
                      {(monitor?.apiHealth || []).map((api, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`size-2 rounded-full ${api.color}`}></div>
                            <span className="text-sm font-medium">{api.name}</span>
                          </div>
                          <span className="text-[#c89893] text-xs font-mono">{api.status}</span>
                        </div>
                      ))}
                      {monitor?.apiHealth?.length === 0 && (
                        <div className="text-[#c89893] text-xs italic">No active API endpoints connected.</div>
                      )}
                      <div className="mt-6 pt-4 border-t border-[#472724]">
                        <button className="w-full py-2 bg-[#472724] hover:bg-[#5a322e] rounded-lg text-xs font-bold transition-colors uppercase">Manage Endpoints</button>
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
                      {monitor?.insights ? (
                        <>
                          <div className="bg-[#221311] p-4 rounded-xl border-l-2 border-primary">
                            <p className="text-xs text-primary font-bold mb-1 uppercase">{monitor.insights.type}</p>
                            <p className="text-sm text-white leading-relaxed">{monitor.insights.text}</p>
                          </div>
                          <div className="p-2">
                            <p className="text-xs text-[#c89893] mb-2 uppercase font-bold">Predictive Forecast</p>
                            <div className="flex items-center gap-3">
                              <span className="text-xl font-bold">{monitor.insights.forecast}</span>
                              <span className="text-xs text-[#0bda0f]">{monitor.insights.forecastSub}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <p className="text-xs text-[#c89893] italic">Processing neural telemetry...</p>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-2 bg-[#2d1a18] border border-[#472724] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white text-sm font-bold uppercase tracking-wider">Live Activity Stream</h3>
                      <span className="text-[#c89893] text-xs font-mono">Last updated: {activity?.lastUpdate || 'Scanning...'}</span>
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
                          {(activity?.events || []).map((event, idx) => (
                            <tr key={idx} className="group hover:bg-[#472724]/10 transition-colors">
                              <td className="py-4 font-mono text-xs flex items-center gap-2">
                                <span className={`size-1.5 rounded-full ${event.color}`}></span>
                                {event.type}
                              </td>
                              <td className="py-4 text-[#c89893]">{event.source}</td>
                              <td className="py-4">{event.loc}</td>
                              <td className="py-4 text-right font-bold text-white">{event.val}</td>
                            </tr>
                          ))}
                          {activity?.events?.length === 0 && (
                            <tr><td colSpan="4" className="py-10 text-center text-[#c89893] italic">No real-time events detected.</td></tr>
                          )}
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
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">dns</span> Node Cluster: {monitor?.nodeCluster || 'DISCONNECTED'}</span>
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
