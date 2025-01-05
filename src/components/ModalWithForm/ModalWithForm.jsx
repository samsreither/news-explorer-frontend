import "./ModalWithForm.css";
// modal close button import

function ModalWithForm({ activeModal, children }) {
  return (
    <div className= {`modal ${activeModal && "modal__opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">Sign in</h2>
        <button type="button" className="modal__close">
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
