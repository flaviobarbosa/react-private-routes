import { useState } from 'react';

const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const storedItem = localStorage.getItem(key);
      return storedItem ? JSON.parse(storedItem) : null;
    } catch (error) {
      return null;
    }
  });

  const setValue = (value) => {
    try {
      if (value) {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
      }
    } catch (error) {
      console.log(error);
      alert('Value could not be saved!');
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
