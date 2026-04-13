import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AIStrategyEngine from './pages/AIStrategyEngine';
import PlatformHub from './pages/PlatformHub';
import AnalyticsCommand from './pages/AnalyticsCommand';

function App() {
  return (
    <Router>
      <div className="fixed bottom-4 left-4 z-50 flex gap-2">
        <Link to="/" className="bg-[#ec5b13] text-white px-3 py-1 rounded text-xs hover:bg-opacity-90">AI Strategy</Link>
        <Link to="/hub" className="bg-[#ec5b13] text-white px-3 py-1 rounded text-xs hover:bg-opacity-90">Platform Hub</Link>
        <Link to="/analytics" className="bg-[#ec5b13] text-white px-3 py-1 rounded text-xs hover:bg-opacity-90">Analytics</Link>
      </div>
      <Routes>
        <Route path="/" element={<AIStrategyEngine />} />
        <Route path="/hub" element={<PlatformHub />} />
        <Route path="/analytics" element={<AnalyticsCommand />} />
      </Routes>
    </Router>
  );
}

export default App;
