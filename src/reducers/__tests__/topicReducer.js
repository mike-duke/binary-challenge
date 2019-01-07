import { topicReducer } from '../topicReducer';

describe('topicReducer', () => {
  it('should return a topic when the action type is "ADD_TOPIC"', () => {
    const expected = 'How great are cats, am I right?';
    const mockAction = {type: 'ADD_TOPIC', topic: 'How great are cats, am I right?'}

    const result = topicReducer('anxiety', mockAction);
    expect(result).toEqual(expected);
  });

  it('should return "anxiety" as a default topic if the action type does not match', () => {
    const expected = 'anxiety';
    const mockAction = {type: 'ADD_ERROR_MESSAGE', topic: 'FREE CATS!'}

    const result = topicReducer('anxiety', mockAction);

    expect(result).toEqual(expected);
  })
});