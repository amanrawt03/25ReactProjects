import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import "./styleQR.css"
const QrCodeScanner = () => {
  const [input, setInput] = useState("");
  const [qrcode, setQrcode] = useState("");
  const handleGenerate=()=>{
    setQrcode(input);
    setInput("");
  }
  return (
    <div>
      <h1>Generate QR</h1>
      <div className="input">
      <input type="text"  onChange={(e)=>{setInput(e.target.value)}}  placeholder='enter' value={input}/>
      <button onClick={handleGenerate}>Generate</button>
      </div>
      
      <QRCode style={{height:"180px", width:"180px"}} value={qrcode}/>
    </div>
  )
}

export default QrCodeScanner
