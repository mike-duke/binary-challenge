import React from 'react';
import { shallow } from 'enzyme';
import { Filter, mapStateToProps, mapDispatchToProps } from '../Filter';
import { addTopic } from '../../actions';
import { fetchRelevantArticles } from '../../thunks/fetchRelevantArticles';

jest.mock('../../thunks/fetchRelevantArticles');

describe('Filter', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Filter relevantArticles={[]} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with the correct properties', () => {
      const mockState = {
        relevantArticles: [],
        currentArticles: [],
        topic: 'Bacon'
      }

      const expected = {
        relevantArticles: [],
        currentArticles: [],
        topic: 'Bacon'
      }

      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);

    it('should dispatch addTopic when addTopicToStore is called', () => {
      const expected = addTopic('Burgers');

      mappedProps.addTopicToStore('Burgers');
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should dispatch fetchRelevantArticles thunk when addRelevantArticles is called', () => {
      const url = 'somewhere.com';
      const expected = fetchRelevantArticles(url);

      mappedProps.addRelevantArticlesToStore(url);
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })
  });
});