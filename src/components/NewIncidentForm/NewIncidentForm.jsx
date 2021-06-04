import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import SelectInput from '../UI/SelectInput/SelectInput';
import { useDispatch, useSelector } from 'react-redux';
import { createReport } from '../../store/actions/reportsActions';
// import {createProduct} from '../../store/actions/productsAction';

const NewIncidentForm = (props) => {
  const dispatch = useDispatch();
  // const productsError = useSelector(state => state.products.productsError);
  const date = new Date().toISOString().split('T')[0];
  const [state, setState] = useState({
    status: 'new',
    date: '',
    licenseNumber: '',
    color: '',
    type: 'sport',
    ownerFullName: '',
    createdAt: date,
    updateAt: date,
    clientId: '04b3683d-962d-4ea8-b431-94a40828799e',
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
    dispatch(createReport({ ...state }));
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
            variant='outlined'
            label='Owner Full Name'
            name='ownerFullName'
            onChange={inputChangeHandler}
            value={state.ownerFullName}
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
        <Grid item container alignItems='center'>
          <SelectInput name='type' onChange={selectChangeHandler} />
          <TextField
            id='date'
            label='Date'
            name='date'
            style={{ width: '20rem', marginLeft: '4rem' }}
            type='date'
            required
            onChange={inputChangeHandler}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item>
          <Button type='submit' color='primary'>
            send report
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewIncidentForm;
