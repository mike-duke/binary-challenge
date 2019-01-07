import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from '../CardContainer';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <CardContainer 
        match={{path: '/relevant'}}
        relevantArticles={[]}
        addRelevantArticlesToStore={jest.fn()} 
        addCurrentArticlesToStore={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });
});