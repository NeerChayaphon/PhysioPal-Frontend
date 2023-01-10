import { useState, useEffect } from 'react';

// Hook for updating data from an API
/* Example
   const { data, error, loading } = usePut('https://my-api.com/endpoint', {
     name: 'John',
     age: 30
   });
*/

const usePut = (url, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, body]);

  return { data, error, loading };
};
