import { useEffect, useState } from "react";

export function useFetch(endpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setResponse(response);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [endpoint]);

  return {
    isLoading,
    error,
    response,
    setError
  };
}
