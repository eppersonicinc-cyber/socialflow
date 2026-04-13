import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api';

export const usePlatformHubData = () => {
  return useQuery({
    queryKey: ['platform-hub-status'],
    queryFn: async () => {
      const response = await apiClient.get('/platform-hub/status');
      return response.data;
    },
    refetchInterval: 10000,
  });
};

export const usePlatformSyncTraffic = () => {
  return useQuery({
    queryKey: ['platform-hub-traffic'],
    queryFn: async () => {
      const response = await apiClient.get('/platform-hub/traffic');
      return response.data;
    },
    refetchInterval: 3000,
  });
};
