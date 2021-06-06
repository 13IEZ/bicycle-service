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

const initialState = {
  reports: [],
  report: [],
  createReportMessage: null,
  fetchReportMessage: null,
  fetchClickedReportMessage: null,
  deleteMessage: null,
  updateMessage: null,
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
    case DELETE_REPORT_FAILURE:
      return { ...state, deleteMessage: action.payload };
    case DELETE_REPORT_SUCCESS:
      return { ...state, deleteMessage: action.payload };
    case UPDATE_REPORT_FAILURE:
      return { ...state, updateMessage: action.payload };
    case UPDATE_REPORT_SUCCESS:
      return { ...state, updateMessage: null };
    case FETCH_REPORT_FAILURE:
      return { ...state, fetchClickedReportMessage: action.payload };
    case FETCH_REPORT_SUCCESS:
      return {
        ...state,
        report: action.payload,
        fetchClickedReportMessage: null,
      };
    default:
      return state;
  }
};

export default reducer;
