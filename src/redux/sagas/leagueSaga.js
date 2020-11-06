import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// lead to get 
function* fetchLeague(action) {
  try {
    console.log('in saga fetch:', action.payload);
    const response = yield axios.get('/api/stats/league')
    
    yield put({ type: 'SET_LEAGUE', payload: response.data });
  } catch (error) {
    console.log('league get request failed', error);
  }
}

function* leagueSaga() {
  yield takeLatest('FETCH_LEAGUE', fetchLeague);
}

export default leagueSaga;