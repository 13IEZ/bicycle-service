import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const FormElement = (props) => {
  return (
    <Grid item xs={12}>
      <TextField
        variant='outlined'
        fullWidth
        required={props.required}
        id={props.name}
        type={props.type}
        multiline={props.multiline}
        rows={3}
        label={props.label}
        name={props.name}
        autoComplete={props.name}
        value={props.value}
        onChange={props.onChange}
        error={!!props.error}
        helperText={props.error}
      />
    </Grid>
  );
};

export default FormElement;
