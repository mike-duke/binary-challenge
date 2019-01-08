import React from 'react';
import { shallow } from 'enzyme';
import { Page404 } from '../Page404';

describe('About', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Page404 />);

    expect(wrapper).toMatchSnapshot();
  });
});