import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorker, updateStaff } from '../../store/actions/staffActions';
import { useParams } from 'react-router';

const EditStaffForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    clientId: '04b3683d-962d-4ea8-b431-94a40828799e',
  });
  const PARAMS = useParams();
  const worker = useSelector((state) => state.staff.worker);

  useEffect(() => {
    dispatch(fetchWorker(PARAMS.id));
  }, [dispatch, PARAMS]);

  useEffect(() => {
    setState({
      email: worker.email,
      firstName: worker.firstName,
      lastName: worker.lastName,
    });
  }, [worker]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateStaff(PARAMS.id, state));
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
          <Button type='submit' color='primary'>
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditStaffForm;
