export interface ApiResponse<T> {
  isLoading: boolean;
  error: Error | null;
  data?: T;
}
