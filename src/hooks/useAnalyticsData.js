import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api';

export const useAnalyticsMonitor = () => {
  return useQuery({
    queryKey: ['analytics-monitor'],
    queryFn: async () => {
      const response = await apiClient.get('/analytics/monitor');
      return response.data;
    },
    refetchInterval: 5000,
  });
};

export const useLiveActivityStream = () => {
  return useQuery({
    queryKey: ['analytics-activity'],
    queryFn: async () => {
      const response = await apiClient.get('/analytics/activity');
      return response.data;
    },
    refetchInterval: 1000,
  });
};
