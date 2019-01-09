import { articlesHelper } from './articlesHelper';

export const relevantArticlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RELEVANT_ARTICLES': 
      return articlesHelper(action.articles);
    default:
      return state;
  }
}