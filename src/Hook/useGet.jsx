import { useState, useEffect } from 'react';
import { useCookie } from 'react-use';

// Hook for getting data from an API
/* Instruction on how to use this hook:
  const { data, error, loading } = useGet('https://jsonplaceholder.typicode.com/todos/1');
*/
const useGet = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [token, updateToken, deleteToken] = useCookie('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useGet;
