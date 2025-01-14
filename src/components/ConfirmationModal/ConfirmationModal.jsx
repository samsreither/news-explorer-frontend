import { useEscape } from '../../hooks/useEscape';
import './ConfirmationModal.css';

function ConfirmationModal({
  isActive,
  closeModal,
  buttonText,
  title,
  handleButton,
}) {
  useEscape(closeModal);

  const handleClickOutsideClose = (evt) => {
    if (evt.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div
      className={`modal confirmation ${!isActive ? '' : 'modal_opened'}`}
      onClick={handleClickOutsideClose}
    >
      <div className="modal__container confirmation__container">
        <h2 className="modal__title">{title}</h2>
        <button
          className="confirmation__button"
          type="button"
          onClick={handleButton}
        >
          {buttonText}
        </button>
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        />
      </div>
    </div>
  );
}

export default ConfirmationModal;