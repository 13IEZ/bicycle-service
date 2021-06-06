import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStaff } from '../../../store/actions/staffActions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectInputStaff = (props) => {
  const classes = useStyles();
  const [staffs, setStaffs] = React.useState('');
  const staff = useSelector((state) => state.staff.staff);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaff());
  }, [dispatch]);

  const handleChange = (event) => {
    setStaffs(event.target.value);
    props.onChange(event);
  };

  return (
    <FormControl required className={classes.formControl}>
      <NativeSelect
        value={props.val}
        required
        name='officer'
        className={classes.selectEmpty}
        onChange={handleChange}>
        {staff.map((staff) => {
          return (
            <option
              key={staff._id}
              value={
                staff._id
              }>{`${staff.firstName} ${staff.lastName}`}</option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Select officer</FormHelperText>
    </FormControl>
  );
};

export default SelectInputStaff;
