import { all, call } from '@redux-saga/core/effects';
import { userSagas } from './user/userSagas';
import { adminSagas } from './admin/adminSagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(adminSagas)]);
}
