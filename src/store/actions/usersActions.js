import ax from '../../axios-bicycle';
import {push} from 'connected-react-router';
import {
	CREATE_USER_FAILURE,
	CREATE_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	LOGIN_USER_SUCCESS,
	LOGOUT_USER
} from '../actionTypes';

const loginUserSuccess = (user) => {
	return {type: LOGIN_USER_SUCCESS, payload: user};
};
const loginUserFailure = (error) => {
	return {type: LOGIN_USER_FAILURE, payload: error};
};

export const loginUser = (userData) => {
	return async (dispatch) => {
		try {
			const response = await ax.post('/users/sessions', userData);
			dispatch(loginUserSuccess(response.data));
			dispatch(push('/'));
		} catch (error) {
			dispatch(loginUserFailure(error));
		}
	};
};

const createUserSuccess = () => {
	return {type: CREATE_USER_SUCCESS};
};
const createUserFailure = (error) => {
	return {type: CREATE_USER_FAILURE, payload: error};
};

export const createUser = (userData) => {
	return async (dispatch) => {
		try {
			await ax.post('/users', userData);
			dispatch(createUserSuccess());
			dispatch(push('/login'));
		} catch (error) {
			if (error.response && error.response.data) {
				dispatch(createUserFailure(error.response.data));
			} else {
				dispatch(createUserFailure(error));
			}
		}
	};
};


export const logoutUser = () => {
	return async dispatch => {
		await ax.delete('/users/sessions');
		dispatch({type: LOGOUT_USER});
		dispatch(push('/login'));
	};
};