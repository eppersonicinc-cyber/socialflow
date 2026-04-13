import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e0f24] text-white p-8">
      <h1 className="text-4xl font-bold mb-12 text-primary">AI Strategy Engine Dashboards</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <Link href="/strategy" className="flex flex-col items-center p-8 bg-[#2a1631] rounded-2xl border border-[#40204b] hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-6xl mb-4 text-primary group-hover:scale-110 transition-transform">terminal</span>
          <h2 className="text-xl font-bold mb-2">AI Strategy Engine</h2>
          <p className="text-[#bd8dce] text-center text-sm">Inference stream, GPU monitoring, and strategy synthesis logs.</p>
        </Link>

        <Link href="/hub" className="flex flex-col items-center p-8 bg-[#311425] rounded-2xl border border-[#6b2e50] hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-6xl mb-4 text-primary group-hover:scale-110 transition-transform">hub</span>
          <h2 className="text-xl font-bold mb-2">Platform Hub</h2>
          <p className="text-[#ce8db1] text-center text-sm">Real-time sync traffic, trigger logs, and API health monitoring.</p>
        </Link>

        <Link href="/analytics" className="flex flex-col items-center p-8 bg-[#2d1a18] rounded-2xl border border-[#472724] hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-6xl mb-4 text-primary group-hover:scale-110 transition-transform">insights</span>
          <h2 className="text-xl font-bold mb-2">Analytics Command</h2>
          <p className="text-[#c89893] text-center text-sm">Global reach monitor, AI insights core, and activity stream.</p>
        </Link>
      </div>
    </div>
  );
}
