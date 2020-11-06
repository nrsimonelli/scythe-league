const playerReducer = (state = [], action) => {
  switch  (action.type) {
    case 'SET_PLAYER':
      return action.payload;
    
    case 'CLEAR_PLAYER':
      return [];
    
    default:
      return state;
  }
}

export default playerReducer;