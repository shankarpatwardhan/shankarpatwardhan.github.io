
import { useQuery } from '@tanstack/react-query';
import { fetchPortfolioData } from '../services/portfolioService';

export const usePortfolioData = () => {
  return useQuery({
    queryKey: ['portfolioData'],
    queryFn: fetchPortfolioData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1
  });
};
