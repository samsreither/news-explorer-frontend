import "./ModalWithForm.css";
import modalCloseIcon from "../../assets/close-icon.svg";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { act } from "react";

function ModalWithForm({
  activeModal,
  closeModal,
  submitButtonText,
  name,
  title,
  children,
  handleRedirect,
  isFormValid,
  apiError,
  isActive,
}) {
  const handleClickOutsideClose = (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <div
      className={`modal modal_type_${name} ${!isActive ? '' : 'modal_opened'}`}
      onMouseDown={handleClickOutsideClose}
    >
      <div className="modal__container">
        <form className="modal__form form" >
          <h2 className="modal__title">{title}</h2>
          {children}
          {apiError && (
            <ErrorMessage
              errorMessage={apiError}
              className={'error-message error-message_content_api'}
            />
          )}
          <button
            disabled={!isFormValid}
            className="modal__button"
            type="submit"
          >
            {submitButtonText}
          </button>
          <div className="modal__redirect">
            or
            <button
              className="modal__redirect-button"
              type="button"
              onClick={handleRedirect}
            >
              {name === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </form>
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        />
      </div>
    </div>
  );
}

export default ModalWithForm;
