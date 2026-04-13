import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AIStrategyEngine from '../pages/AIStrategyEngine';
import PlatformHub from '../pages/PlatformHub';
import AnalyticsCommand from '../pages/AnalyticsCommand';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock the hooks
vi.mock('../hooks/useAIStrategyData', () => ({
  useAIStrategyData: vi.fn(() => ({ data: {}, isLoading: false })),
  useAIStrategyLogs: vi.fn(() => ({ data: {}, isLoading: false })),
}));

vi.mock('../hooks/usePlatformHubData', () => ({
  usePlatformHubData: vi.fn(() => ({ data: {}, isLoading: false })),
  usePlatformSyncTraffic: vi.fn(() => ({ data: {}, isLoading: false })),
}));

vi.mock('../hooks/useAnalyticsData', () => ({
  useAnalyticsMonitor: vi.fn(() => ({ data: {}, isLoading: false })),
  useLiveActivityStream: vi.fn(() => ({ data: {}, isLoading: false })),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithProviders = (ui) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('Rendering Tests', () => {
  it('renders AI Strategy Engine without crashing', () => {
    renderWithProviders(<AIStrategyEngine />);
    expect(screen.getByRole('heading', { name: /AI Strategy Engine/i })).toBeInTheDocument();
  });

  it('renders Platform Hub without crashing', () => {
    renderWithProviders(<PlatformHub />);
    expect(screen.getByRole('heading', { name: /Platform Hub/i })).toBeInTheDocument();
  });

  it('renders Analytics Command without crashing', () => {
    renderWithProviders(<AnalyticsCommand />);
    expect(screen.getByRole('heading', { name: /Analytics Command/i })).toBeInTheDocument();
  });
});
