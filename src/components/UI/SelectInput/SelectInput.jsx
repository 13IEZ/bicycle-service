import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  return (
    <FormControl required className={classes.formControl}>
      <NativeSelect name='type' className={classes.selectEmpty}>
        <option value='sport'>Sport</option>
        <option value='general'>General</option>
        {/*{categories.map(elem => {*/}
        {/*	if (elem.title !== 'All Categories') return <option key={elem._id}*/}
        {/*														value={elem._id}>{elem.title}</option>;*/}
        {/*	else return null;*/}
        {/*})}*/}
      </NativeSelect>
      <FormHelperText>Select category</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;
