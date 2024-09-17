import React, { useEffect, useState } from "react";
import { DiVim } from "react-icons/di";

const Loading = ({ url }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchURL() {
    try {
      const res = await fetch(url);
      const data = res.json();
      if (data && data.products) {
        setItems(data.products);
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if(url!== "")fetchURL();
  }, [url])
  if(loading){
    return <div>Loading your data . Please wait.</div>
  }
  return <>
  {items && items.map(()=>{
    
  })}
  </>;
};

export default Loading;
