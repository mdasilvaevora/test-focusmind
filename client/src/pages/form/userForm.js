import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as messages from '../../messages/messages';
import { Radio, Button, TextField, Grid, FormControl, FormHelperText, FormLabel, RadioGroup, FormControlLabel, Select } from '@material-ui/core'

import { Form, FormRow, FormField } from '../../components/Form';
import { CountrySelect } from '../../components/CountrySelect';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: "5%",
        paddingLeft: "20%",
        paddingRight: "20%"
    }
}))


const schema = Yup.object({
    name: Yup.string().required(messages.FORM_FIELD_REQUIRED),
    lastname: Yup.string().required(messages.FORM_FIELD_REQUIRED),
    gender: Yup.string().required(messages.FORM_FIELD_REQUIRED),
    birthday: Yup.date(messages.FORM_INVALID_DATE)
                .max(new Date(), messages.FORM_MAX_DATE)
                .required(messages.FORM_FIELD_REQUIRED),
    country: Yup.string(),
    phonenumber: Yup.string().required(messages.FORM_FIELD_REQUIRED),
    email: Yup.string().email(messages.FORM_INVALID_EMAIL).required(messages.FORM_FIELD_REQUIRED),
    comments: Yup.string()
})

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
        <FormControl>
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

const RadioButton = ({value, error, touched, id, handleChange, ...props}) => (
    <Grid item>
        <FormControl error={error && touched}>
            <FormLabel component="legend">Género con el que te identificas</FormLabel>
            <RadioGroup row aria-label="gender" name={id} value={value} onChange={handleChange} {...props}>
                <FormControlLabel value="male" control={<Radio />} label="Hombre" />
                <FormControlLabel value="female" control={<Radio />} label="Mujer" />
                <FormControlLabel value="other" control={<Radio />} label="Otro" />
            </RadioGroup>
            {error && touched && <FormHelperText error={error && touched}>{error}</FormHelperText>}
        </FormControl>
    </Grid>
)

const FormButton = ({label, ...rest}) => (
    <Grid item>
        <Button variant="outlined" {...rest}>
            {label}
        </Button>
    </Grid>
)



export default function UserForm({handleSubmit, initialValues, handleReset}) {
    const classes = useStyles();

    const handleRadioChange = (evt) => {
        console.log(evt)
    }
    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
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
                        <Form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.root}>
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
