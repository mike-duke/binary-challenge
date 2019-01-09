import { combineReducers } from 'redux';
import { relevantArticlesReducer } from './relevantArticlesReducer';
import { currentArticlesReducer } from './currentArticlesReducer';
import { topicReducer } from './topicReducer';
import { isLoadingReducer } from './isLoadingReducer';  
import { errorReducer } from './errorReducer';
import { displayedArticlesReducer } from './displayedArticlesReducer';

export const rootReducer = combineReducers({
  relevantArticles: relevantArticlesReducer,
  currentArticles: currentArticlesReducer,
  topic: topicReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  displayedArticles: displayedArticlesReducer
});