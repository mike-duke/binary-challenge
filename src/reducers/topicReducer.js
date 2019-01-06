export const topicReducer = (state = 'anxiety', action) => {
  switch(action.type) {
    case 'ADD_TOPIC': 
      return action.topic;
    default:
      return state;
  }
}