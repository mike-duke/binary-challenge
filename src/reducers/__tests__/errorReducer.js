import { errorReducer } from '../errorReducer';

describe('errorReducer', () => {
  it('should return a message if the action type is "ADD_ERROR_MESSAGE"', () => {
    const expected = 'My cat has errored';
    const mockAction = {type: 'ADD_ERROR_MESSAGE', message: 'My cat has errored'}
    
    const result = errorReducer('', mockAction);
    expect(result).toEqual(expected);
  });

  it('should return an empty string if the action type does not match', () => {
    const mockAction = {type: 'ADD_TOPIC', message: 'My cat is nice'}

    const result = errorReducer('', mockAction);
    expect(result).toEqual('');
  })
});