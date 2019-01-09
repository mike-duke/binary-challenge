import { articlesHelper } from './articlesHelper';

export const currentArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CURRENT_ARTICLES': 
      return articlesHelper(action.articles);
    default:
      return state;
  }
}