import ax from '../../axios-bicycle';
import {
  CREATE_REPORT_ERROR,
  CREATE_REPORT_SUCCESS,
  FETCH_REPORTS_FAILURE,
  FETCH_REPORTS_SUCCESS,
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
      console.log(response);
      dispatch(fetchReportsSuccess(response.data));
    } catch (error) {
      dispatch(fetchReportsFailure(error));
    }
  };
};
