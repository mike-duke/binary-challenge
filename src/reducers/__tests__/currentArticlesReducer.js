import { currentArticlesReducer } from '../currentArticlesReducer';

describe('currentArticlesReducer', () => {
  it('should return an array of articles if the action type is "ADD_CURRENT_ARTICLES"', () => {
    const expected = [{title: '10 Best Snacks For Discerning Cats', author: 'Also you cat'}];
    const mockAction = {type: 'ADD_CURRENT_ARTICLES', articles: [{title: '10 Best Snacks For Discerning Cats', author: 'Also you cat'}]}

    const result = currentArticlesReducer([], mockAction);
    expect(result).toEqual(expected);
  });

  it('should return an empty array if the action type does not match', () => {
    const mockAction = {type: 'ADD_RELEVANT_ARTICLES', articles: 'What is... things you wear'}

    const result = currentArticlesReducer([], mockAction);
    expect(result).toEqual([]);
  })
});