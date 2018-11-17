import toJson from 'enzyme-to-json';
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Main from '../src/components/Main';

describe('<Main />', () => {
    describe('render()', () => {
      test('renders the component', () => {
        const wrapper = shallow(<Main />);
        const component = wrapper.dive();
  
        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });
  