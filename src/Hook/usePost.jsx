import { useState, useEffect } from 'react';

// Hook for getting data from an API
/* Example on how to use this Hook 
    const { data, error, loading } = usePost('https://my-api.com/endpoint', {
        name: 'John',
        age: 30
    }); 
*/

const usePost = (url, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
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
