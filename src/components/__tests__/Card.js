import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../Card';

describe('Card', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Card article={{title: 'Cats are cool', author: 'All the cats'}} />);

    expect(wrapper).toMatchSnapshot();
  });
});