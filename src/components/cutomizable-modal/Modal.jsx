import React from "react";
import { GiCrossMark } from "react-icons/gi";
const Modal = ({ setOpenModel, header,body, footer }) => {
  return (
    <div className="modal">
      <header>
        <h1>{header}</h1>
        <GiCrossMark className="icon" onClick={() => setOpenModel(!true)} />
      </header>
      <main>
        <p>{body}</p>
      </main>
      <footer>
        <h3>{footer}</h3>
      </footer>
    </div>
  );
};

export default Modal;
