import { isLoadingReducer } from '../isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return a boolean if the action type is "IS_LOADING"', () => {
    const mockAction = {type: 'IS_LOADING', bool: true}

    const result = isLoadingReducer(false, mockAction);
    expect(result).toEqual(true);
  });

  it('should return default state if the action type does not match', () => {
    const mockAction = {type: 'IS_SLEEPING', bool: true}
    
    const result = isLoadingReducer(false, mockAction);
    expect(result).toEqual(false);
  });
});