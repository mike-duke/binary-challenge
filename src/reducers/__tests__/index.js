import { createStore } from 'redux';
import { rootReducer } from '../index';
import { relevantArticlesReducer } from '../relevantArticlesReducer';
import { currentArticlesReducer } from '../currentArticlesReducer';
import { errorReducer } from '../errorReducer';
import { topicReducer } from '../topicReducer';
import { isLoadingReducer } from '../isLoadingReducer'

describe('rootReducer', () => {
  let store = createStore(rootReducer);

  it('should show initial state of relevantArticles when relevantArticlesReducer handles an action', () => {
    expect(store.getState().relevantArticles).toEqual(relevantArticlesReducer([], {}));
  });

  it('should show initial state of currentArticles when currentArticlesReducer handles an action', () => {
    expect(store.getState().currentArticles).toEqual(currentArticlesReducer([], {}));
  });

  it('should show initial state of error when errorReducer handles an action', () => {
    expect(store.getState().error).toEqual(errorReducer('', {}));
  });

  it('should show initial state of topic when topicReducer handles an action', () => {
    expect(store.getState().topic).toEqual(topicReducer('anxiety', {}));
  });

  it('should show initial state of isLoading when isLoadingReducer handles an action', () => {
    expect(store.getState().isLoading).toEqual(isLoadingReducer(false, {}));
  });
});
