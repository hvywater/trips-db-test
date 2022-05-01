import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url);

        if (!res.ok) throw new Error(res.statusText)
        
        const json = await res.json();

        setData(json);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false)
        setError('Could not fetch the data')
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
