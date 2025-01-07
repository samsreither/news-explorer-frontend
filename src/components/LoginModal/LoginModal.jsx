import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({
  closeModal,
  isActive,
  handleRegisterClick,
  isLoading,
  apiError,
  activeModal
}) {
  const {
    values,
    handleChange,
    setValues,
    isFormValid,
    setIsFormValid,
    isInvalid,
  } = useForm({
    email: "",
    password: "",
  });

  // whenever isActive state or setValues function changes, effect is triggered
  useEffect(() => {
    if (isActive) {
        setValues({
            email: '',
            password: '',
        });
    }
  }, [isActive, setValues])

  return (
    <ModalWithForm
      apiError={apiError}
      title={"Sign in"}
      name="login"
      closeModal={closeModal}
    //   handleSubmit={handleSubmit}
      activeModal={activeModal}
      handleRedirect={handleRegisterClick}
      isFormValid={isFormValid}
      submitButtonText={isLoading ? "Signing in" : "Sign in"}
      isActive={isActive}
    >
      <label htmlFor="email" className="form__label">
        Email
      </label>
      <input
        className="form__input"
        type="email"
        id="email"
        value={values.email}
        name="email"
        pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
        autoComplete="off"
        placeholder="Enter email"
        required
        onChange={handleChange}
      />
      {isInvalid.email && (
        <ErrorMessage
          errorMessage={'Invalid email address'}
          className={'error-message error-message_content_email'}
        />
      )}
      <label className="form__label" htmlFor="password">
        Password
      </label>
      <input
        className="form__input"
        type="password"
        id="password"
        value={values.password}
        name="password"
        autoComplete="off"
        placeholder="Enter password"
        required
        minLength={3}
        onChange={handleChange}
      />
      {isInvalid.password && (
        <ErrorMessage
          errorMessage={'Invalid password'}
          className={`error-message error-message_content_password`}
        />
      )}
    </ModalWithForm>
  );
}

export default LoginModal;
