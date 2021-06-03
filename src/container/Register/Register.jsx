import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../store/actions/usersActions';
import FormElement from '../../components/UI/FormElements/FormElement/FormElement';
import UserForm from '../../components/UI/FormElements/UserForm/UserForm';
import { Alert, AlertTitle } from '@material-ui/lab';

const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.users.registerError);

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    password: '',
    repassword: '',
    email: '',
    clientId: '',
    approved: true,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    await dispatch(createUser({ ...state }));
  };

  return (
    <UserForm onSubmit={submitFormHandler} title='Sign Up'>
      {error && (
        <Alert severity='error' style={{ marginBottom: '1rem', width: '100%' }}>
          <AlertTitle>Error</AlertTitle>
          All fields are required. Check again all fields
        </Alert>
      )}
      <FormElement
        name='firstName'
        value={state.firstName}
        onChange={inputChangeHandler}
        label='First Name'
        type='text'
      />
      <FormElement
        name='lastName'
        value={state.lastName}
        onChange={inputChangeHandler}
        label='Last Name'
        type='text'
      />
      <FormElement
        name='password'
        value={state.password}
        onChange={inputChangeHandler}
        label='Password'
        type='password'
      />
      <FormElement
        name='repassword'
        value={state.repassword}
        onChange={inputChangeHandler}
        label='Repassword'
        type='password'
      />
      <FormElement
        name='email'
        value={state.email}
        onChange={inputChangeHandler}
        label='Email'
        type='email'
      />
      <FormElement
        name='clientId'
        value={state.clientId}
        onChange={inputChangeHandler}
        label='ClientId'
        type='text'
      />
    </UserForm>
  );
};

export default Register;
