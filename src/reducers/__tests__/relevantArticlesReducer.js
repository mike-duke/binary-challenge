import { relevantArticlesReducer } from '../relevantArticlesReducer';

describe('relevantArticlesReducer', () => {
  it('should return an array of articles if the action type is "ADD_RELEVANT_ARTICLES"', () => {
    const expected = [{title: '10 Best Snacks For Discerning Cats', author: 'Also your cat'}];
    const mockAction = {type: 'ADD_RELEVANT_ARTICLES', articles: [{title: '10 Best Snacks For Discerning Cats', author: 'Also your cat'}]}

    const result = relevantArticlesReducer([], mockAction);
    expect(result).toEqual(expected);
  });

  it('should return an empty array if the action type does not match', () => {
    const mockAction = {type: 'ADD_CURRENT_ARTICLES', articles: 'What is... things you wear'}

    const result = relevantArticlesReducer([], mockAction);
    expect(result).toEqual([]);
  })
});