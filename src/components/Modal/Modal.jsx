import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, title, children, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <div className="sla">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
