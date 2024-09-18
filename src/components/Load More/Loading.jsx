import React, { useEffect, useState } from "react";
import "./style.css";

const Loading = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  async function fetchURL() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      if (data && data.products) {
        setItems([...items, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchURL();
  }, [count]);

  if (loading) {
    return <div>Loading your data . Please wait.</div>;
  } else
    return (
      <div className="main">
        <div className="container">
          {items &&
            items.map((img) => (
              <div className="img-container">
                <img src={img.images[0]} key={img.id} />
              </div>
            ))}
        </div>

        {items.length === 100 ? (
          "You have viewed all products."
        ) : (
          <button onClick={() => setCount(count + 1)}>Load More...</button>
        )}
      </div>
    );
};

export default Loading;
