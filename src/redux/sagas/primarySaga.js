import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// lead to get 
function* fetchTable(action) {
  try {
    console.log('in saga fetch:', action.payload);
    const response = yield axios.get('/api/table/')
    
    yield put({ type: 'SET_TABLE', payload: response.data });
  } catch (error) {
    console.log('tables get request failed', error);
  }
}

function* primarySaga() {
  yield takeLatest('FETCH_TABLE', fetchTable);
}

export default primarySaga;