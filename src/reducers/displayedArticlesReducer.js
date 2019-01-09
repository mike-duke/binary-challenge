export const displayedArticlesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_DISPLAYED_ARTICLES':
      return action.articles;
    default: 
      return state;
  }
}