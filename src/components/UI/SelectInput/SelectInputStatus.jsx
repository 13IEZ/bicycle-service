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

const SelectInputStatus = (props) => {
  const classes = useStyles();
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
    props.onChange(event);
  };

  return (
    <FormControl required className={classes.formControl}>
      <NativeSelect
        value={props.val}
        required
        name='status'
        className={classes.selectEmpty}
        onChange={handleChange}>
        <option value='new'>New</option>
        <option value='in_progress'>In Progress</option>
        <option value='done'>Done</option>
      </NativeSelect>
      <FormHelperText>Select status</FormHelperText>
    </FormControl>
  );
};

export default SelectInputStatus;
