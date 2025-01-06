import React, { useState } from "react";

// manage state and handle validation for forms in react

export const useForm = (inputValues) => {
  const [values, setValues] = useState(inputValues);
  const [inputErrors, setInputErrors] = useState(inputValues);
  const [isInvalid, setIsInvalid] = useState(inputValues);
  const [isFormValid, setIsFormValid] = useState(false);

  const checkValidity = (evt) => {
    const { name, validationMessage } = evt.target;

    if (!evt.target.validity.valid) {
      setIsInvalid({ ...isInvalid, [name]: true });
      setInputErrors({ ...inputErrors, [name]: validationMessage });
    } else {
      setIsInvalid({ ...isInvalid, [name]: false });
    }
  };

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
    checkValidity(evt);
  };

  return {
    values,
    handleChange,
    setValues,
    isFormValid,
    setIsFormValid,
    isInvalid,
  };
};
