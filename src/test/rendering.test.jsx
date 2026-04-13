import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AIStrategyEngine from '../pages/AIStrategyEngine';
import PlatformHub from '../pages/PlatformHub';
import AnalyticsCommand from '../pages/AnalyticsCommand';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('Rendering Tests', () => {
  it('renders AI Strategy Engine without crashing', () => {
    renderWithRouter(<AIStrategyEngine />);
    expect(screen.getByRole('heading', { name: /AI Strategy Engine/i })).toBeInTheDocument();
  });

  it('renders Platform Hub without crashing', () => {
    renderWithRouter(<PlatformHub />);
    expect(screen.getByRole('heading', { name: /Platform Hub/i })).toBeInTheDocument();
  });

  it('renders Analytics Command without crashing', () => {
    renderWithRouter(<AnalyticsCommand />);
    expect(screen.getByRole('heading', { name: /Analytics Command/i })).toBeInTheDocument();
  });
});
