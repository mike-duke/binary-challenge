import { combineReducers } from 'redux';
import { relevantArticlesReducer } from './relevantArticlesReducer';
import { currentArticlesReducer } from './currentArticlesReducer';
import { topicReducer } from './topicReducer';
import { isLoadingReducer } from './isLoadingReducer';  

export const rootReducer = combineReducers({
  relevantArticles: relevantArticlesReducer,
  currentArticles: currentArticlesReducer,
  topic: topicReducer,
  isLoading: isLoadingReducer
})