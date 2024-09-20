import React from 'react';
import './modal.css'
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;