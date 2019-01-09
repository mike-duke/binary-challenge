import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../About';

describe('About', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<About />);

    expect(wrapper).toMatchSnapshot();
  });
});