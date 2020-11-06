import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// lead to get 
function* fetchPlayer(action) {
  try {
    console.log('in saga fetch:', action.payload);
    const response = yield axios.get('/api/stats/player')
    
    yield put({ type: 'SET_PLAYER', payload: response.data });
  } catch (error) {
    console.log('player get request failed', error);
  }
}

function* playerSaga() {
  yield takeLatest('FETCH_PLAYER', fetchPlayer);
}

export default playerSaga;