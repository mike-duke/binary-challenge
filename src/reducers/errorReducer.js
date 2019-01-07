export const errorReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_ERROR_MESSAGE': 
      return action.message;
    default:
      return state;
  }
}