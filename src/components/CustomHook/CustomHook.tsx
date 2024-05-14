import { useEffect, useState } from 'react';

// Define a type for the data returned by the API
export interface Data {
  products: { title: string }[]; // Adjust this type definition according to the actual structure of your data
}

const UseCustomHook = (
  url: string,
  options = {},
): { data: Data | null; error: string | null; pending: boolean } => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(`${error}.  Some Error occured`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
};

export default UseCustomHook;
