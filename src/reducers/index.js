import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer';
import { topicReducer } from './topicReducer';

export const rootReducer = combineReducers({
  articles: articlesReducer,
  topic: topicReducer
})