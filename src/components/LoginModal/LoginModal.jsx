import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function LoginModal({
  closeModal,
  isActive,
  handleRegisterClick,
  isLoading,
  apiError,
  activeModal,
  handleUserLogin
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

  // use effect runs after the component renders, triggered based on dependencies aka second argument passed to it
  useEffect(() => {
    if (Object.values(isInvalid).every((item) => item === false)) {
      setIsFormValid(true); // converts isInvalid obj. into array of values, if every value is false, then form becomes true
    } else {
      setIsFormValid(false);
    }

  }, [isInvalid, setIsFormValid]); // run this effect whenever isInvalid or setIsFormValid changes

  // whenever isActive state or setValues function changes, effect is triggered
  useEffect(() => {
    if (isActive) {
        setValues({
            email: '',
            password: '',
        });
    }
  }, [isActive, setValues])

  const handleSubmit = (evt) => {
    handleUserLogin(values);
    evt.preventDefault();
  }

  return (
    <ModalWithForm
      apiError={apiError}
      title={"Sign in"}
      name="login"
      closeModal={closeModal}
      handleSubmit={handleSubmit}
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
