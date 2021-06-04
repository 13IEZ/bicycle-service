import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectInput = (props) => {
  const classes = useStyles();
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <FormControl required className={classes.formControl}>
      <NativeSelect
        value={type}
        required
        name='type'
        className={classes.selectEmpty}
        onChange={handleChange}>
        <option value='sport'>Sport</option>
        <option value='general'>General</option>
      </NativeSelect>
      <FormHelperText>Select type</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;
