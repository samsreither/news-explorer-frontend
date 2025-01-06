import "./ModalWithForm.css";
import modalCloseIcon from "../../assets/close-icon.svg";

function ModalWithForm({ activeModal, children, closeModal }) {
  const handleClickOutsideClose = (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <div
      className={`modal ${activeModal && "modal__opened"}`}
      onMouseDown={handleClickOutsideClose}
    >
      {/* if activeModal is truthy, modal__opened is added to classname */}
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={closeModal}>
          <img src={modalCloseIcon} alt="close icon" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
