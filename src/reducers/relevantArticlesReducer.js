export const relevantArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RELEVANT_ARTICLES': 
      return action.articles;
    default:
      return state;
  }
}