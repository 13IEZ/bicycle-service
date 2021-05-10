import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from '../../store/actions/usersActions';
import FormElement from '../../components/UI/FormElements/FormElement/FormElement';
import UserForm from '../../components/UI/FormElements/UserForm/UserForm';

const Register = () => {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.users.registerError);

	const [state, setState] = useState({
		username: '',
		password: '',
		displayName: '',
		phoneNumber: ''
	});

	const inputChangeHandler = (e) => {
		const {name, value} = e.target;
		setState((prevState) => {
			return {...prevState, [name]: value};
		});
	};

	const submitFormHandler = async (e) => {
		e.preventDefault();
		await dispatch(createUser({...state}));
	};

	const getFieldError = (fieldName) => {
		try {
			return error.errors[fieldName].message;
		} catch (e) {
			return undefined;
		}
	};

	return (
		<UserForm onSubmit={submitFormHandler} title='Sign Up'>
			<FormElement
				name='username'
				value={state.username}
				onChange={inputChangeHandler}
				error={getFieldError('username')}
				label='Username'
				type='text'
			/>
			<FormElement
				name='password'
				value={state.password}
				onChange={inputChangeHandler}
				error={getFieldError('password')}
				label='Password'
				type='password'
			/>
			<FormElement
				name='displayName'
				value={state.displayName}
				onChange={inputChangeHandler}
				error={getFieldError('displayName')}
				label='Display Name'
				type='text'
			/>
			<FormElement
				name='phoneNumber'
				value={state.phoneNumber}
				onChange={inputChangeHandler}
				error={getFieldError('phoneNumber')}
				label='Phone number'
				type='text'
			/>
		</UserForm>
	);
};

export default Register;