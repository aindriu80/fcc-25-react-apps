import { useEffect, useState } from 'react';

interface UseLocalStorageProps {
  key: string;
  defaultValue: string;
}

const UseLocalStorage: React.FC<UseLocalStorageProps> = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue),
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default UseLocalStorage;
