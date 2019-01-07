import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing';
import { mapDispatchToProps } from '../Landing';
import { addTopic } from '../../actions';

describe('Landing', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Landing />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should call addTopicToStore when an option is selected', () => {
      const wrapper = shallow(<Landing />);
      const expected = 'Tabby';
      
      wrapper.find('#landing-select').simulate('change', {
        target: {
          value: 'Tabby'
        }
      });

      wrapper.setProps({addTopicToStore: jest.fn()});
      const { addTopicToStore } = wrapper.instance.props;
      expect(addTopicToStore).toHaveBeenCalledWith(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch addTopic when addTopicToStore is called', () => {
      const mockDispatch = jest.fn();
      const expected = addTopic('Kittens');

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addTopicToStore('Kittens');

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })
  })
});