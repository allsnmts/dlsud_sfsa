import { CONVERT_CSV_FILE_SUCCESS, SELECT_STUDENT } from './adminActionTypes';

const INITIAL_STATE = {
  feedbackArr: [],
  errMsg: null,
  student: null,
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONVERT_CSV_FILE_SUCCESS:
      return { ...state, feedbackArr: action.payload };
    case SELECT_STUDENT:
      return { ...state, student: action.payload };
    default:
      return state;
  }
};

export default adminReducer;
