import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, Button, TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: "5%",
        paddingLeft: "20%",
        paddingRight: "20%"
    }
}))

const Form = ({children,...rest}) => (
    <form {...rest}>
        <Grid direction={"column"} container spacing={2}>
            {children}
        </Grid>
    </form>
)

const FormRow = ({children, ...rest}) => (
    <Grid item container spacing={1} {...rest} xs={12}>
        {children}
    </Grid>
)

const TextInput = ((props) => (
    <Grid item xs={12} sm={true}>
        <FormControl component="fieldset" style={{width:"100%"}}>
            <TextField {...props}/>
        </FormControl>
    </Grid>
))

const RadioButton = ((value, handleChange, ...props) => (
    <Grid item>
        <FormControl component="fieldset">
            <FormLabel component="legend">Género con el que te identificas</FormLabel>
            <RadioGroup row aria-label="gender" name="gender" value={value} onChange={handleChange} {...props}>
                <FormControlLabel value="male" control={<Radio />} label="Hombre" />
                <FormControlLabel value="female" control={<Radio />} label="Mujer" />
                <FormControlLabel value="other" control={<Radio />} label="Otro" />
            </RadioGroup>
        </FormControl>
    </Grid>
))

const FormButton = ({label, ...rest}) => (
    <Grid item>
        <Button variant="outlined" {...rest}>
            {label}
        </Button>
    </Grid>
)



export default function UserForm() {
    const classes = useStyles();
    return (
        <Form noValidate autoComplete="off" className={classes.root}>
            <FormRow>
                <TextInput required id="name" label="Nombre"/>
                <TextInput required id="lastname" label="Apellido"/>
                <TextInput required id="birthday" label="Fecha de Nacimiento"/>
            </FormRow>
            <FormRow>
                <RadioButton value={"male"}/>
            </FormRow>
            <FormRow>
                <TextInput required id="phonenumber" label="Telefono"/>
            </FormRow>
            <FormRow>
                <TextInput required id="email" label="Email"/>
            </FormRow>
            <FormRow>
                <TextInput required id="comments" label="Comentarios"/>
            </FormRow>
            <FormRow justify="flex-end" spacing={1}>
                <FormButton variant="outlined" label="Cancelar"/>
                <FormButton variant="outlined" label="Enviar"/>
            </FormRow>
        </Form>
    )
}
