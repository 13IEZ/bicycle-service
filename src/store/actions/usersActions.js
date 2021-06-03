import ax from '../../axios-bicycle';
import { push } from 'connected-react-router';
import {
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
} from '../actionTypes';

const loginUserSuccess = (user) => {
  return { type: LOGIN_USER_SUCCESS, payload: user };
};
const loginUserFailure = (error) => {
  return { type: LOGIN_USER_FAILURE, payload: error };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await ax.post('/api/auth/sign_in', userData);
      dispatch(loginUserSuccess(response.data));
      dispatch(push('/all-incidents'));
    } catch (error) {
      dispatch(loginUserFailure(error.response.data));
    }
  };
};

const createUserSuccess = () => {
  return { type: CREATE_USER_SUCCESS };
};
const createUserFailure = (error) => {
  return { type: CREATE_USER_FAILURE, payload: error };
};

export const createUser = (userData) => {
  return async (dispatch) => {
    try {
      await ax.post('/api/auth/sign_up', userData);
      dispatch(createUserSuccess());
      dispatch(push('/'));
    } catch (error) {
      // console.dir(error.response.data);
      if (error.response && error.response.data) {
        dispatch(createUserFailure(error.response.data));
      } else {
        dispatch(createUserFailure(error));
      }
    }
  };
};
