const primaryReducer = (state = [], action) => {
  switch  (action.type) {
    case 'SET_TABLES':
      return action.payload;
    
    case 'CLEAR_TABLES':
      return [];
    
    default:
      return state;
  }
}

export default primaryReducer;