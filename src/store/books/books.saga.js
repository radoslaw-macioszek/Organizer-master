import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_BOOKS, loadBooksSuccess, loadBooksFailed } from './books.reducer';

function* loadBooks(action) {
  const searchResult = action.payload;
  const response = yield call(axios.get, 'https://www.googleapis.com/books/v1/volumes', {
    params: {
      key: 'AIzaSyAG5vXBaGFP_7UbMzS93LCGHTsoGsFyk2Y',
      q: `${searchResult}`,
      // printType: all,
      // pagination
    },
  });

  if (response.status === 200) {
    yield put(loadBooksSuccess(response.data));
    return;
  }
  yield put(loadBooksFailed());
}

export default function* booksSaga() {
  yield takeLatest(LOAD_BOOKS, loadBooks);
}
