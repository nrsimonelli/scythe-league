import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// lead to get 
function* fetchGame(action) {
  try {
    console.log('in gameSaga ACTION.PAYLOAD:', action.payload);
    const response = yield axios.get('/api/stats/game/' + action.payload.game + '/' + action.payload.league)
    
    yield put({ type: 'SET_GAME', payload: response.data });
  } catch (error) {
    console.log('game get request failed', error);
  }
}

function* gameSaga() {
  yield takeLatest('FETCH_GAME', fetchGame);
}

export default gameSaga;