import "./ModalWithForm.css";
// modal close button import

function ModalWithForm({ activeModal, children, closeModal }) {
  return (
    <div className= {`modal ${activeModal && "modal__opened"}`}>
        {/* if activeModal is truthy, modal__opened is added to classname */}
      <div className="modal__content">
        <h2 className="modal__title">Sign in</h2>
        <button type="button" className="modal__close" onClick={closeModal}>
          Close
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
