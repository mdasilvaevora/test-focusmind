import React from 'react'
import UserForm from './userForm';

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

    const handleSubmit = values => {
        console.log(values)
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
