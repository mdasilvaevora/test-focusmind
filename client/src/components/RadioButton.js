import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControl, FormLabel, FormControlLabel, FormHelperText, RadioGroup, Radio } from '@material-ui/core';


const useStyles = makeStyles((theme) => {

})

export function RadioButton({value, error, touched, id, handleChange, ...props}) {
    const classes = useStyles();

    return (
        <Grid item>
        <FormControl error={error && touched}>
            <FormLabel component="legend">Género con el que te identificas</FormLabel>
            <RadioGroup row aria-label="gender" name={id} value={value} onChange={handleChange} {...props}>
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Hombre" />
                <FormControlLabel value="female" control={<Radio color="primary"/>} label="Mujer" />
                <FormControlLabel value="other" control={<Radio color="primary"/>} label="Otro" />
            </RadioGroup>
            {error && touched && <FormHelperText error={error && touched}>{error}</FormHelperText>}
        </FormControl>
    </Grid>
    )
}
