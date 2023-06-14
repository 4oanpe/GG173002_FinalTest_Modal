import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleModal}>모달창 열기</button>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <h2>모달</h2>
            <p>모달모달</p>
            <button onClick={closeModal}>모달창 닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
