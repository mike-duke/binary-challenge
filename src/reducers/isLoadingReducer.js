export const isLoadingReducer = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      console.log(action.bool);
      return action.bool;
    default:
      return state;
  }
}