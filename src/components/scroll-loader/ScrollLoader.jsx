import React, { useEffect } from "react";
import { useState } from "react";
import "./scroll.css";
const ScrollLoader = ({ url }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ scrollPercent, setScrollPercet ] = useState(0);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products);
    setLoading(false);
  }
  const handleScroll=()=>{
    const heightCovered = document.documentElement.scrollTop;
    const totalScrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercet((heightCovered / totalScrollableHeight) * 100);
  }
  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="header">
      <h1>List of Products</h1>
      <div className="loading" style={{width: `${scrollPercent}%`}}></div>
      </div>
      
      {products && products.length > 0
        ? products.map((product) => {
            return (
              <div key={product.id}>
                <h4>{product.title}</h4>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ScrollLoader;
