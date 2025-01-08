import React, { useEffect } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useForm } from "../../hooks/useForm";

function RegisterModal({
  closeModal,
  isActive,
  handleLoginClick,
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
    name: "",
  });

  // do this when isActive or setValues changes
  useEffect(() => {
    if (isActive) {
      setValues({
        email: "",
        password: "",
        name: "",
      });
    }
  }, [isActive, setValues]);

  // use effect to update if the form is valid or not
  React.useEffect(() => {
    if (Object.values(isInvalid).every((item) => item === false)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isInvalid, setIsFormValid]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUserRegistration(values);
  };

  return (
    <ModalWithForm
      apiError={apiError}
      title={"Sign up"}
      name="register"
      submitButtonText={isLoading ? "Signing up..." : "Sign up"}
      activeModal={activeModal}
      closeModal={closeModal}
      isFormValid={isFormValid}
      isActive={isActive}
      handleRedirect={handleLoginClick}
      handleSubmit={handleSubmit}
    >
      <label className="form__label" htmlFor="email">
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
          errorMessage={"Invalid email address"}
          className={"error-message error-message_content_email"}
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
        onChange={handleChange}
        minLength={3}
      />
      {isInvalid.password && (
        <ErrorMessage
          errorMessage={"Invalid password"}
          className={"error-message error-message_content_password"}
        />
      )}
      <label className="form__label" htmlFor="name">
        Username
      </label>
      <input
        className="form__input"
        type="text"
        id="name"
        name="name"
        value={values.name}
        autoComplete="off"
        placeholder="Enter your username"
        required
        onChange={handleChange}
        minLength={2}
        maxLength={30}
      />
      {isInvalid.name && (
        <ErrorMessage
          errorMessage={"Invalid username"}
          className={"error-message error-message_content_username"}
        />
      )}
    </ModalWithForm>
  );
}

export default RegisterModal;
