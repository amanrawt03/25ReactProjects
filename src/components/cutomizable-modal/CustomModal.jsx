import React, { useState } from "react";
import './modal.css'
import Modal from "./Modal";
const CustomModal=()=>{
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="main">
      <div className="container"><button onClick={()=>setOpenModal(!openModal)}>Click Me!</button></div>
      {openModal && <Modal setOpenModel={setOpenModal} header={"Default Header"} body = {"Default Body"} footer={"Default Footer"}/>}
    </div>
  )
}
export default CustomModal;