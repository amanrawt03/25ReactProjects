import React, { useEffect, useState } from 'react'

const useLocalStorage = ({key, value}) => {
  const [theme, setTheme] = useState(()=>{
    let currVal;
    try {
      currVal = JSON.parse(localStorage.getItem(key)|| String(value))
    } catch (error) {
      console.log(error)
    }
    return currVal;
  })
  useEffect(()=>{
    localStorage.setItem(key)
  }, [key, value])
  return (theme, setTheme)
}

export default useLocalStorage
