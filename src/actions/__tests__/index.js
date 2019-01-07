import * as actions from '../index';

describe('actions', () => {
  const mockArticles = [{title: '10 Reasons Why Your Cat Is Trying To Kill You', author: 'Your cat'}];
  
  it('should return an array of articles with a type of "ADD_RELEVANT_ARTICLES"', () => { 
    const expected = {type: 'ADD_RELEVANT_ARTICLES', articles: mockArticles}
    
    const result = actions.addRelevantArticles(mockArticles);
    expect(result).toEqual(expected);
  });
  
  it('should return an array of articles with a type of "ADD_CURRENT_ARTICLES"', () => {
    const expected = {type: 'ADD_CURRENT_ARTICLES', articles: mockArticles}
    
    const result = actions.addCurrentArticles(mockArticles);
    expect(result).toEqual(expected);
  });
  
  it('should return a topic with a type of "ADD_TOPIC"', () => {
    const mockTopic = 'Cats, and videos about them';
    const expected = {type: 'ADD_TOPIC', topic: mockTopic}

    const result = actions.addTopic(mockTopic);
    expect(result).toEqual(expected);
  });

  it('should return a message with a type of "ADD_ERROR_MESSAGE"', () => {
    const mockMessage = 'This is my cat. There are many others like it, but this one is mine.'
    const expected = {type: 'ADD_ERROR_MESSAGE', message: mockMessage}

    const result = actions.addErrorMessage(mockMessage);
    expect(result).toEqual(expected);
  })
})