import { useEffect, useState } from "react";

export const useFetch = <T>(
  fetcherFn: () => Promise<T>,
  loadOnMount: boolean = false,
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetcherFn();
      setData(result);
      setError(null);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error("An unknown error occurred"),
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loadOnMount) {
      fetchData();
    }
  }, [loadOnMount]);

  return { data, loading, error, fetchData };
};
