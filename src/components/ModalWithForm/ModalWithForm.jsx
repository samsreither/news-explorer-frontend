import "./ModalWithForm.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useEscape } from "../../hooks/useEscape";

function ModalWithForm({
  name,
  title,
  children,
  closeModal,
  submitButtonText,
  handleRedirect,
  isFormValid,
  apiError,
  isActive,
  handleSubmit,
}) {
  useEscape(closeModal);

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
        <form className="modal__form form" onSubmit={handleSubmit} >
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
