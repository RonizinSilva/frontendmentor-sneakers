import React from 'react';

const Modal = ({ children, onClick }) => {
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClick}
    >
      <div className="p-4" onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
