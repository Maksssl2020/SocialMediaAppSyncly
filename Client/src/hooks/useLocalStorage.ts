import { useEffect, useState } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  const [value, setValue] = useState(() => {
    return JSON.parse(
      localStorage.getItem(key) || JSON.stringify(initialValue),
    );
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, setValue]);

  return [value, setValue];
}

export default useLocalStorage;
