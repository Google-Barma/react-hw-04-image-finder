import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onCloseModal, imageUrl }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown()]);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={e => handleBackDropClick(e)}>
      <div className="Modal">
        <div className="ModalButtonWrapper" onClick={() => onCloseModal()}>
          <AiOutlineCloseCircle color="white" size="25px" />
        </div>
        <img src={imageUrl} alt="photos" />
      </div>
    </div>,
    modalRoot,
  );
}
