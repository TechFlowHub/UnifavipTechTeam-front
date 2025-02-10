import React from "react";
import "./Modal.css";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, title, children, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close" onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
