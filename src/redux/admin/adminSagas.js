import { CONVERT_CSV_FILE } from './adminActionTypes';
import { convertCSVFileSuccess, convertCSVFileFailure } from './adminActions';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { convertToJS } from '@/utils/functions';

export function* convertCSVFile({ payload }) {
  try {
    const res = yield convertToJS(payload);

    yield put(convertCSVFileSuccess(res));
  } catch (err) {
    yield put(convertCSVFileFailure(err.message));
  }
}

export function* onConvertCSVFile() {
  yield takeLatest(CONVERT_CSV_FILE, convertCSVFile);
}

export function* adminSagas() {
  yield all([call(onConvertCSVFile)]);
}
