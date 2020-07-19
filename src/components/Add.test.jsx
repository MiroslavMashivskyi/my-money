import React from 'react';
import { shallow } from 'enzyme';
import Add from './Add';

test("Add should work correctly", () => {
  expect(shallow(<Add />).debug()).toMatchSnapshot();
});