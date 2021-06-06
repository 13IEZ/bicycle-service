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

const initialState = {
  staff: [],
  worker: [],
  fetchStaffMessage: null,
  fetchWorkerMessage: null,
  approveMessage: null,
  deleteMessage: null,
  createMessage: null,
  updateMessage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STAFF_FAILURE:
      return { ...state, fetchStaffMessage: action.payload };
    case FETCH_STAFF_SUCCESS:
      return { ...state, staff: action.payload, fetchStaffMessage: null };
    case APPROVE_STAFF_FAILURE:
      return { ...state, approveMessage: action.payload };
    case APPROVE_STAFF_SUCCESS:
      return { ...state, approveMessage: action.payload };
    case DELETE_STAFF_FAILURE:
      return { ...state, deleteMessage: action.payload };
    case DELETE_STAFF_SUCCESS:
      return { ...state, deleteMessage: action.payload };
    case CREATE_STAFF_FAILURE:
      return { ...state, createMessage: action.payload };
    case CREATE_STAFF_SUCCESS:
      return { ...state, createMessage: null };
    case UPDATE_STAFF_FAILURE:
      return { ...state, updateMessage: action.payload };
    case UPDATE_STAFF_SUCCESS:
      return { ...state, updateMessage: null };
    case FETCH_WORKER_SUCCESS:
      return { ...state, worker: action.payload, fetchWorkerMessage: null };
    case FETCH_WORKER_FAILURE:
      return { ...state, fetchWorkerMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;
