export const topicReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_TOPIC': 
      return action.topic;
    default:
      return state;
  }
}