export const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARTICLES': 
      return action.articles;
    default:
      return state;
  }
}