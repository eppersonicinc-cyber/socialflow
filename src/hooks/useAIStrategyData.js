import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api';

export const useAIStrategyData = () => {
  return useQuery({
    queryKey: ['ai-strategy'],
    queryFn: async () => {
      const response = await apiClient.get('/ai-strategy/status');
      return response.data;
    },
    refetchInterval: 5000, // Real-time polling
  });
};

export const useAIStrategyLogs = () => {
  return useQuery({
    queryKey: ['ai-strategy-logs'],
    queryFn: async () => {
      const response = await apiClient.get('/ai-strategy/logs');
      return response.data;
    },
    refetchInterval: 2000,
  });
};
