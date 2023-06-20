import {
  CONVERT_CSV_FILE,
  CONVERT_CSV_FILE_SUCCESS,
  CONVERT_CSV_FILE_FAILURE,
  SELECT_STUDENT,
} from './adminActionTypes';

export const convertCSVFile = (file) => ({
  type: CONVERT_CSV_FILE,
  payload: file,
});

export const convertCSVFileSuccess = (dataArr) => ({
  type: CONVERT_CSV_FILE_SUCCESS,
  payload: dataArr,
});

export const convertCSVFileFailure = (err) => ({
  type: CONVERT_CSV_FILE_FAILURE,
  payload: err,
});

export const addStudent = (studentObj) => ({
  type: SELECT_STUDENT,
  payload: studentObj,
});
