const leagueReducer = (state = [], action) => {
  switch  (action.type) {
    case 'SET_LEAGUE':
      return action.payload;
    
    case 'CLEAR_LEAGUE':
      return [];
    
    default:
      return state;
  }
}

export default leagueReducer;