import ax from '../../axios-bicycle';
import {
  CREATE_REPORT_ERROR,
  CREATE_REPORT_SUCCESS,
  DELETE_REPORT_FAILURE,
  DELETE_REPORT_SUCCESS,
  FETCH_REPORTS_FAILURE,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORT_FAILURE,
  FETCH_REPORT_SUCCESS,
  UPDATE_REPORT_FAILURE,
  UPDATE_REPORT_SUCCESS,
} from '../actionTypes';
import { push } from 'connected-react-router';

const createReportSuccess = () => {
  return { type: CREATE_REPORT_SUCCESS };
};
const createReportError = (error) => {
  return { type: CREATE_REPORT_ERROR, payload: error };
};
export const createReport = (reportData) => {
  return async (dispatch) => {
    try {
      await ax.post('/api/public/report', reportData);
      dispatch(createReportSuccess());
      dispatch(push('/'));
    } catch (error) {
      dispatch(createReportError(error));
    }
  };
};

const fetchReportsSuccess = (data) => {
  return { type: FETCH_REPORTS_SUCCESS, payload: data };
};
const fetchReportsFailure = (error) => {
  return { type: FETCH_REPORTS_FAILURE, payload: error };
};
export const fetchReports = () => {
  return async (dispatch) => {
    try {
      const response = await ax.get('/api/cases');
      dispatch(fetchReportsSuccess(response.data));
    } catch (error) {
      dispatch(fetchReportsFailure(error));
    }
  };
};

const deleteReportSuccess = (data) => ({
  type: DELETE_REPORT_SUCCESS,
  payload: data,
});
const deleteReportFailure = (error) => ({
  type: DELETE_REPORT_FAILURE,
  payload: error,
});
export const deleteReport = (id) => {
  return async (dispatch) => {
    try {
      const response = await ax.delete(`/api/cases/${id}`);
      dispatch(deleteReportSuccess(response.data));
    } catch (error) {
      dispatch(deleteReportFailure(error));
    }
  };
};

const updateReportSuccess = () => ({ type: UPDATE_REPORT_SUCCESS });
const updateReportFailure = (error) => ({
  type: UPDATE_REPORT_FAILURE,
  payload: error,
});
export const updateReport = (id, report) => {
  return async (dispatch) => {
    try {
      await ax.put(`/api/cases/${id}`, report);
      dispatch(updateReportSuccess());
      dispatch(push('/all-incidents'));
    } catch (error) {
      dispatch(updateReportFailure(error));
    }
  };
};

const fetchReportSuccess = (report) => ({
  type: FETCH_REPORT_SUCCESS,
  payload: report,
});
const fetchReportFailure = (error) => ({
  type: FETCH_REPORT_FAILURE,
  payload: error,
});
export const fetchReport = (id) => {
  return async (dispatch) => {
    try {
      const response = await ax.get(`/api/cases/${id}`);
      dispatch(fetchReportSuccess(response.data));
    } catch (error) {
      dispatch(fetchReportFailure(error));
    }
  };
};
