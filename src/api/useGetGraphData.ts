import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface GetGraphData<T> {
  isLoading: boolean;
  error: unknown;
  data?: T;
}

const useGetGraphData = <T>(url: string, queryKey: string[]): GetGraphData<T> => {
  const { isLoading, error, data } = useQuery<T>({
    queryKey,
    queryFn: () => axios.get<T>(url).then((response) => response.data),
  });

  return { isLoading, error, data };
};

export default useGetGraphData;
