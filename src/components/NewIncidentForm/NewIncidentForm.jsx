import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import FileInput from '../UI/FileInput/FileInput';
import SelectInput from '../UI/SelectInput/SelectInput';
import { useDispatch, useSelector } from 'react-redux';
// import {createProduct} from '../../store/actions/productsAction';

const NewIncidentForm = (props) => {
  const dispatch = useDispatch();
  // const productsError = useSelector(state => state.products.productsError);
  const [state, setState] = useState({
    status: '',
    date: '',
    licenseNumber: '',
    color: '',
    type: '',
    ownerFullName: '',
    officer: '',
    createdAt: '',
    updateAt: '',
    clientId: '',
    description: '',
    resolution: '',
  });

  console.log(state);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const selectChangeHandler = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        type: e,
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // dispatch(createProduct({...state}));
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            label='Bike license number'
            name='licenseNumber'
            onChange={inputChangeHandler}
            value={state.licenseNumber}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            label='Color'
            name='color'
            onChange={inputChangeHandler}
            value={state.color}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant='outlined'
            label='Description'
            name='description'
            onChange={inputChangeHandler}
            value={state.description}
            required
          />
        </Grid>

        <Grid item>
          <SelectInput
            name='type'
            value={state.type}
            onChange={selectChangeHandler}
          />
        </Grid>
        <Grid item>
          <Button type='submit' color='primary'>
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewIncidentForm;

// const NewIncidentForm = () => {
// 	return (
// 		<div>allo</div>
// 	)
// }
//
// export default NewIncidentForm;
