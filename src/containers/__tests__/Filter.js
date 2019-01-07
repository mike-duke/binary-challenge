import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter';

describe('Filter', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Filter />);

    expect(wrapper).toMatchSnapshot();
  })
})