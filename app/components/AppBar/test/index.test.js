import React from 'react';
import { shallow } from 'enzyme';

import AppBarComponent from '../index';
import Menu from '../MenuButton';

describe('AppBar Buttons', function() {

  const Menu = shallow(<Menu />);

  it('should render Menu Button', function() {
    expect(shallow(<AppBarComponent />).find('Menu').toBeDefined);
  });
})
