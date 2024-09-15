import React, { useEffect, useState } from 'react'

const RandColorGenerate = () => {
  const [color, setColor] = useState("#000000");
  const [format, setFormat] = useState("hexa");
  const randomIndex = (length)=>{
    return Math.floor(Math.random()*length);
  }
  const handleOnGenerate = ()=>{
    if(format == "hexa"){
      const hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var hexaCode = "#";
    for(let i = 0; i<6; i++){
      hexaCode+= hexa[randomIndex(hexa.length)];
    }
    setColor(hexaCode);}
    else{
      var x = randomIndex(256);
      var y = randomIndex(256);
      var z = randomIndex(256);
      let rgb = `rgb(${x}, ${y}, ${z})`
      setColor(rgb);
    }
  }
  function handleHexaDecFormat(){
    setFormat("hexa");
  }
  function handleRGBFormat(){
    setFormat("rgb");
  }
  useEffect(()=>{
      handleOnGenerate();
  }, [format])
  return (
    <div style={{height: "100vh" , width:"100vw", backgroundColor : color}}>
      <button onClick={handleRGBFormat}>RGB FORMAT</button>
      <button onClick={handleHexaDecFormat}>HEXADECIMAL FORMAT</button>
      <button onClick={handleOnGenerate}>GENERATE RANDOM COLOR</button>

      <div style={{color: "white"}}>{format}::{color}</div>
    </div>
  )
}

export default RandColorGenerate
