import {
  CREATE_REPORT_ERROR,
  CREATE_REPORT_SUCCESS,
  FETCH_REPORTS_FAILURE,
  FETCH_REPORTS_SUCCESS,
} from '../actionTypes';

const initialState = {
  reports: [],
  createReportMessage: null,
  fetchReportMessage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REPORT_SUCCESS:
      return { ...state, createReportMessage: null };
    case CREATE_REPORT_ERROR:
      return { ...state, createReportMessage: action.payload };
    case FETCH_REPORTS_FAILURE:
      return { ...state, fetchReportMessage: action.payload };
    case FETCH_REPORTS_SUCCESS: {
      return { ...state, reports: action.payload, fetchReportMessage: null };
    }
    default:
      return state;
  }
};

export default reducer;
