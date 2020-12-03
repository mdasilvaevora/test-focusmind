import React from 'react'
import UserForm from './userForm';
import {registerUser} from '../../api/api';

export default function UserFormContainer() {
    const initialValues = {
        name: "",
        lastname: "",
        birthday: "",
        gender: "",
        country: "",
        phonenumber: "",
        email: "",
        comments: ""
    }

    const handleSubmit = (values, resetForm) => {
        registerUser(values)
        resetForm(initialValues)
    }

    const handleReset = resetForm => {
        resetForm(initialValues)
    }
    return (
            <UserForm 
                initialValues={initialValues} 
                handleReset={handleReset} 
                handleSubmit={handleSubmit}
            />
    )
}
