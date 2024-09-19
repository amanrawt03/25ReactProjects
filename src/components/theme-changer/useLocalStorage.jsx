import React, { useEffect, useState } from "react";

const useLocalStorage = ({ key, defValue }) => {
  const [value, setValue] = useState(() => {
    let currVal;
    try {
      currVal = JSON.parse(localStorage.getItem(key) || String(defValue));
    } catch (error) {
      console.log(error);
    }
    return currVal;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
