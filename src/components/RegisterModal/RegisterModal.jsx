import React from 'react';
import './RegisterModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useForm } from '../../hooks/useForm';

function RegisterModal({
    closeModal,
    isActive,
    isLoading,
    apiError
}) {


    return (
        <ModalWithForm
        apiError={apiError}
        title={'Sign up'}
        name="register"
        >
            
        </ModalWithForm>
    )
}

export default RegisterModal;