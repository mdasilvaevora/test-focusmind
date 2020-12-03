import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as messages from '../../messages/messages';
import { TextField, FormControl } from '@material-ui/core'

import { Form, FormRow, FormField } from '../../components/Form';
import { CountrySelect } from '../../components/CountrySelect';
import { FormButton } from '../../components/FormButton';
import { RadioButton } from '../../components/RadioButton';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]:{
            paddingTop: "5%",
            paddingLeft: "20%",
            paddingRight: "20%"
        },
        [theme.breakpoints.up('lg')]:{
            paddingTop: "5%",
            paddingLeft: "30%",
            paddingRight: "30%"
        }
    },
    form: {
        backgroundColor: "white",
        border: "1px solid grey",
        borderRadius: '8px',
        padding: theme.spacing(4),
        [theme.breakpoints.down('sm')]:{
            padding: theme.spacing(1),
            border: 'none',
            backgroundColor: 'transparent'
        }
    }
}))

const TextInput = ({id, error, touched, ...rest}) => (
    <FormField>
        <FormControl component="fieldset" style={{width:"100%"}}>
            <TextField 
                name={id} 
                variant="outlined" 
                error={error && touched}
                helperText={error && touched? error: undefined}
                {...rest}/>
        </FormControl>
    </FormField>
)

const DatePicker = ({id, error,touched, ...rest}) => (
    <FormField>
        <FormControl style={{width: "100%"}}>
            <TextField
                name={id}
                variant="outlined"
                type="date"
                InputLabelProps={{shrink: true}}
                error={error && touched}
                helperText={error && touched? error: undefined}
                {...rest}
            />
        </FormControl>
    </FormField>
)

export default function UserForm({handleSubmit, verifyEmail, initialValues, handleReset}) {
    const classes = useStyles();
    const schema = Yup.object({
        name: Yup.string().required(messages.FORM_FIELD_REQUIRED),
        lastname: Yup.string().required(messages.FORM_FIELD_REQUIRED),
        gender: Yup.string().required(messages.FORM_FIELD_REQUIRED),
        birthday: Yup.date(messages.FORM_INVALID_DATE)
                    .max(new Date(), messages.FORM_MAX_DATE)
                    .required(messages.FORM_FIELD_REQUIRED),
        country: Yup.string(),
        phonenumber: Yup.string().required(messages.FORM_FIELD_REQUIRED),
        email: Yup.string()
                    .email(messages.FORM_INVALID_EMAIL)
                    .required(messages.FORM_FIELD_REQUIRED),
                    /*test('Unique email', messages.FORM_EMAIL_EXIST,function(value){
                        return new Promise((resolve,reject) => {
                            verifyEmail(value).then(exist => resolve(exist))
                        })
                    })*/
        comments: Yup.string()
    })

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}
            initialValues={initialValues}>
                {({
                    handleSubmit,
                    handleChange,
                    resetForm,
                    values,
                    touched,
                    errors,
                    setFieldValue
                }) => (
                        <Form 
                            onSubmit={handleSubmit} 
                            noValidate 
                            autoComplete="off" 
                            classes={{root: classes.root, form: classes.form}}>
                            <FormRow>
                                <TextInput 
                                    required 
                                    id="name" 
                                    value={values.name} 
                                    label="Nombre" 
                                    onChange={handleChange}
                                    error={errors.name}
                                    touched={touched.name}
                                />
                                <TextInput 
                                    required 
                                    id="lastname" 
                                    value={values.lastname} 
                                    label="Apellido" 
                                    onChange={handleChange}
                                    error={errors.lastname}
                                    touched={touched.lastname}
                                />
                                <DatePicker 
                                    required 
                                    id="birthday" 
                                    value={values.birthday} 
                                    label="Fecha de Nacimiento" 
                                    onChange={handleChange}
                                    error={errors.birthday}
                                    touched={touched.birthday}
                                />
                            </FormRow>
                            <FormRow>
                                <RadioButton 
                                    id="gender"
                                    value={values.gender}
                                    handleChange={handleChange}
                                    error={errors.gender}
                                    touched={touched.gender}
                                />
                            </FormRow>
                            <FormRow>
                                <CountrySelect
                                    id="country"
                                    value={values.country}
                                    handleChange={setFieldValue}
                                />
                                <TextInput 
                                    required 
                                    id="phonenumber" 
                                    value={values.phonenumber} 
                                    label="Telefono" 
                                    onChange={handleChange}
                                    error={errors.phonenumber}
                                    touched={touched.phonenumber}
                                />
                            </FormRow>
                            <FormRow>
                                <TextInput 
                                    required 
                                    id="email" 
                                    value={values.email} 
                                    label="Email" 
                                    onChange={handleChange}
                                    error={errors.email}
                                    touched={touched.email}    
                                />
                            </FormRow>
                            <FormRow>
                                <TextInput  
                                    id="comments" 
                                    value={values.comments} 
                                    label="Comentarios" 
                                    onChange={handleChange}
                                    error={errors.comments}
                                    touched={touched.comments}
                                />
                            </FormRow>
                            <FormRow justify="flex-end" spacing={1}>
                                <FormButton variant="outlined" label="Cancelar" onClick={evt=>handleReset(resetForm)} />
                                <FormButton variant="outlined" label="Enviar" type="submit"/>
                            </FormRow>
                        </Form>
                )}
        </Formik>
    )
}
