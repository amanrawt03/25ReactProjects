import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import "./style.css";

const ImageSlider = ({ url }) => {
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const  [currImg, setCurrImg] = useState(5);
  const handleOnLeftClick =()=>{
    setCurrImg(currImg===0?9:currImg-1);
  }
  const handleOnRightClick =()=>{
    setCurrImg(currImg===9?0:currImg+1);
  }
  const fetchImages = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data) {
        setImages(data); 
        setLoading(false); 
      }
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url]);

  return (
    <div>
      <h1>Image Carousel</h1>
      <div className="container">
        <div className="img-container">{loading ? (
        <span>We'll get back to you shortly!</span>
      ) : (
        images && images.map((img, index) => (
          <img key={img.id} src={img.download_url} alt={`Image ${img.id}`} className={currImg === index? "active":"inactive"}/>
        ))
      )}</div>
      <FaRegArrowAltCircleLeft onClick={handleOnLeftClick} className="arrow l-arrow"/>
      <FaRegArrowAltCircleRight onClick={handleOnRightClick}  className="arrow r-arrow"/>
      <span className="indicators">
      {
        images && images.map((_, index) => (
          <button key={index} onClick={()=>setCurrImg(index)} className={currImg === index? "a-btn":"btn"}></button>
        ))
      }
      </span>
      
      </div>
      
    </div>
  );
};

export default ImageSlider;
