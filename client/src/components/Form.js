import { Grid } from '@material-ui/core';

export const Form = ({children,classes,...rest}) => (
    <form {...rest} className={classes.root}>
        <Grid className={classes.form} direction={"column"} container spacing={2}>
            {children}
        </Grid>
    </form>
)

export const FormRow = ({children, ...rest}) => (
    <Grid item container spacing={1} {...rest} xs={12}>
        {children}
    </Grid>
)

export const FormField = ({children,...props}) => (
    <Grid item xs={12} sm={true} {...props}>
        {children}
    </Grid>
)