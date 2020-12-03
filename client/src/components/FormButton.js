import React from 'react'
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        height: '50px',
        width: '150px',
    }
}))

export function FormButton({label,...rest}) {
    const classes = useStyles();
    return (
        <Grid item>
            <Button variant="outlined" {...rest} classes={{root: classes.root, label:classes.label}}>
                {label}
            </Button>
        </Grid>
    )
}