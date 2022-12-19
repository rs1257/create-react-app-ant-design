import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface GetGraphData {
  isLoading: boolean;
  error: unknown;
  data?: { data: Record<string, unknown>[] };
}

const useGetGraphData = (url: string, queryKey: string[]): GetGraphData => {
  const { isLoading, error, data } = useQuery<{ data: Record<string, unknown>[] }>({
    queryKey,
    queryFn: () =>
      axios.get(url).then((response) => response.data as { data: Record<string, unknown>[] }),
  });

  return { isLoading, error, data };
};

export default useGetGraphData;
