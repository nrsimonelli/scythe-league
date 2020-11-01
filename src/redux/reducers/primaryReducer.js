const primaryReducer = (state = [], action) => {
  switch  (action.type) {
    case 'SET_TABLE':
      return action.payload;
    
    case 'CLEAR_TABLE':
      return [];
    
    default:
      return state;
  }
}

export default primaryReducer;