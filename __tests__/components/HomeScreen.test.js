import 'react-native';
import React from 'react';
import Home from '../../src/screens/Home';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const homeScreenJson = renderer.create(<Home />).toJSON()
const homeScreen = shallow(<Home />)

describe('Home Screen', () => {
  it('renders correctly', () => {
    expect(homeScreenJson).toMatchSnapshot();
  });
})