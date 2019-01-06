export const currentArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CURRENT_ARTICLES': 
      return action.articles;
    default:
      return state;
  }
}