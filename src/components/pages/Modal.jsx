import React from 'react';
import './modal.css'
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content" role="dialog" aria-labelledby="modal-title">
        <h2 id="modal-title">{title}</h2>
        {children}
        <button aria-label="Close modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;