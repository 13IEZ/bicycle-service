import {
  APPROVE_STAFF_FAILURE,
  APPROVE_STAFF_SUCCESS,
  CREATE_STAFF_FAILURE,
  CREATE_STAFF_SUCCESS,
  DELETE_STAFF_FAILURE,
  DELETE_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,
  FETCH_STAFF_SUCCESS,
  FETCH_WORKER_FAILURE,
  FETCH_WORKER_SUCCESS,
  UPDATE_STAFF_FAILURE,
  UPDATE_STAFF_SUCCESS,
} from '../actionTypes';
import ax from '../../axios-bicycle';
import { push } from 'connected-react-router';

const fetchStaffSuccess = (data) => ({
  type: FETCH_STAFF_SUCCESS,
  payload: data,
});
const fetchStaffFailure = (error) => ({
  type: FETCH_STAFF_FAILURE,
  payload: error,
});
export const fetchStaff = () => {
  return async (dispatch) => {
    try {
      const response = await ax.get('/api/officers');
      dispatch(fetchStaffSuccess(response.data));
    } catch (error) {
      dispatch(fetchStaffFailure(error));
    }
  };
};

const approveStaffSuccess = (data) => ({
  type: APPROVE_STAFF_SUCCESS,
  payload: data,
});
const approveStaffFailure = (error) => ({
  type: APPROVE_STAFF_FAILURE,
  payload: error,
});
export const approveStaff = (id) => {
  return async (dispatch) => {
    try {
      const response = await ax.put(`/api/officers/${id}`, { approved: true });
      dispatch(approveStaffSuccess(response.data));
    } catch (error) {
      dispatch(approveStaffFailure(error));
    }
  };
};

const deleteStaffSuccess = (data) => ({
  type: DELETE_STAFF_SUCCESS,
  payload: data,
});
const deleteStaffFailure = (error) => ({
  type: DELETE_STAFF_FAILURE,
  payload: error,
});
export const deleteStaff = (id) => {
  return async (dispatch) => {
    try {
      const response = await ax.delete(`/api/officers/${id}`);
      dispatch(deleteStaffSuccess(response.data));
    } catch (error) {
      dispatch(deleteStaffFailure(error));
    }
  };
};

const createStaffSuccess = () => ({ type: CREATE_STAFF_SUCCESS });
const createStaffFailure = (error) => ({
  type: CREATE_STAFF_FAILURE,
  payload: error,
});
export const createStaff = (staff) => {
  return async (dispatch) => {
    try {
      await ax.post('/api/officers', staff);
      dispatch(createStaffSuccess());
      dispatch(push('/staff'));
    } catch (error) {
      dispatch(createStaffFailure(error));
    }
  };
};

const updateStaffSuccess = () => ({ type: UPDATE_STAFF_SUCCESS });
const updateStaffFailure = (error) => ({
  type: UPDATE_STAFF_FAILURE,
  payload: error,
});
export const updateStaff = (id, staff) => {
  return async (dispatch) => {
    try {
      await ax.put(`/api/officers/${id}`, staff);
      dispatch(updateStaffSuccess());
      dispatch(push('/staff'));
    } catch (error) {
      dispatch(updateStaffFailure(error));
    }
  };
};

const fetchWorkerSuccess = (worker) => ({
  type: FETCH_WORKER_SUCCESS,
  payload: worker,
});
const fetchWorkerFailure = (error) => ({
  type: FETCH_WORKER_FAILURE,
  payload: error,
});
export const fetchWorker = (id) => {
  return async (dispatch) => {
    try {
      const response = await ax.get(`/api/officers/${id}`);
      dispatch(fetchWorkerSuccess(response.data));
    } catch (error) {
      dispatch(fetchWorkerFailure(error));
    }
  };
};
