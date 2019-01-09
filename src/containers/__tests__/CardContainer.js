import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps, mapDispatchToProps } from '../CardContainer';
import apiKey from '../../apiKey';
import { fetchRelevantArticles } from '../../thunks/fetchRelevantArticles';
import { fetchCurrentArticles } from '../../thunks/fetchCurrentArticles';

jest.mock('../../thunks/fetchRelevantArticles');
jest.mock('../../thunks/fetchCurrentArticles');

describe('CardContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer 
      match={{path: '/relevant'}}
      topic="anxiety"
      relevantArticles={[{
        title: 'hello world', 
        author: 'simple simon',
        description: 'a greeting',
        content: 'anxiety is a cat\'s companion'
      }]}

      currentArticles={[]}
      addRelevantArticlesToStore={jest.fn()} 
      addCurrentArticlesToStore={jest.fn()}
      isLoading={false} />);
    });
  
  it('should match the snapshot when the path is "/relevant"', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when the path is "/current"', () => {
    const wrapper = shallow(
      <CardContainer 
        match={{path: '/current'}}
        topic="anxiety"
        relevantArticles={[]}
        currentArticles={[{
        title: 'hello world', 
        author: 'simple simon',
        description: 'a greeting',
        content: 'anxiety is a cat\'s companion'
      }]}
        addRelevantArticlesToStore={jest.fn()} 
        addCurrentArticlesToStore={jest.fn()}
        isLoading={false} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is no path', () => {
    const wrapper = shallow(
      <CardContainer 
        match={{path: ''}}
        topic="anxiety"
        relevantArticles={[]}
        currentArticles={[]}
        addRelevantArticlesToStore={jest.fn()} 
        addCurrentArticlesToStore={jest.fn()}
        isLoading={false} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if isLoading is true', () => {
    const wrapper = shallow(
      <CardContainer 
      match={{path: '/relevant'}}
      topic="anxiety"
      relevantArticles={[]}
      currentArticles={[]}
      addRelevantArticlesToStore={jest.fn()} 
      addCurrentArticlesToStore={jest.fn()}
      isLoading={true} />);
    
    expect(wrapper).toMatchSnapshot();
  })

  describe('componentDidMount', () => {
    it('should call addRelevantArticlesToStore with the correct arguments', () => {
      const { addRelevantArticlesToStore, topic } = wrapper.instance().props;
      const expected = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kid OR child OR children) AND ${topic} &language=en&sortBy=relevancy&apiKey=${apiKey}&pageSize=100`;

      expect(addRelevantArticlesToStore).toHaveBeenCalledWith(expected);
    });

    it('should call addCurrentArticlesToStore with the correct arguments', () => {
      const { addCurrentArticlesToStore } = wrapper.instance().props;
      const expected = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      expect(addCurrentArticlesToStore).toHaveBeenCalledWith(expected);
    });
  });

  describe('mapStateToProps', () => {
    it('should return a props object with the correct properties', () => {
      const mockState = {
        relevantArticles: [],
        currentArticles: [],
        topic: 'Cats of Europe',
        isLoading: false
      }

      const expected = {
        relevantArticles: [],
        currentArticles: [],
        topic: 'Cats of Europe',
        isLoading: false
      }

      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    const url = 'somewhere.com';
    const mockDispatch = jest.fn()
    const mappedProps = mapDispatchToProps(mockDispatch);

    it('should call fetchRelevantArticles thunk when addRelevantArticlesToStore is called', () => {
      const expected = fetchRelevantArticles(url);

      mappedProps.addRelevantArticlesToStore(url);
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should call fetchCurrentArticles thunk when addCurrentArticlesToStore is called', () => {
      const expected = fetchCurrentArticles(url);

      mappedProps.addCurrentArticlesToStore(url);
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })
  });
});