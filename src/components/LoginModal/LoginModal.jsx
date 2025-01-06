import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './LoginModal.css';

function LoginModal() {
    return (
        <ModalWithForm
        apiError={apiError}
        title={'Sign in'}
        name="login"
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        isActive={isActive}
        handleRedirect={handleRegisterClick}
        isFormValid={isFormValid}>
           <label htmlFor="email" className="form__label">
            Email</label>
            <input type="email" className="form__input" /> 
        </ModalWithForm>
    )
}

export default LoginModal;