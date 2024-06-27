import { useCallback, useState } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(
    localStorage.getItem(key) || initialValue
  );

  const handleAddOrUpdateStorage = useCallback((newValue: string) => {
    localStorage.setItem(key, newValue);
    setStoredValue(localStorage.getItem(key) || newValue);
  }, []);

  return {
    value: storedValue,
    setValue: handleAddOrUpdateStorage,
  };
};

export default useLocalStorage;
