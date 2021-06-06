import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createStaff } from '../../store/actions/staffActions';

const NewStaffForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    clientId: '04b3683d-962d-4ea8-b431-94a40828799e',
    password: '',
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createStaff(state));
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            label='Email'
            name='email'
            onChange={inputChangeHandler}
            value={state.email}
            type='email'
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            label='Last Name'
            name='lastName'
            onChange={inputChangeHandler}
            value={state.lastName}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            label='First Name'
            name='firstName'
            onChange={inputChangeHandler}
            value={state.firstName}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            label='Password'
            name='password'
            onChange={inputChangeHandler}
            value={state.password}
            type='password'
            required
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

export default NewStaffForm;
