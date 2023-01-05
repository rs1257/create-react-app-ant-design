import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ApiResponse } from '../types/api';

const useGetRequest = <T>(url: string, queryKey: string[]): ApiResponse<T> => {
  const { isLoading, error, data } = useQuery<T, Error>({
    queryKey,
    queryFn: () => axios.get<T>(url).then(({ data }) => data),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { isLoading, error, data };
};

export default useGetRequest;
