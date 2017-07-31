import React from 'react';
import { shallow } from 'enzyme';
import AppBarComponent from '../../../components/AppBar';
import Menu from '../../../components/AppBar/MenuButton';

describe('AppBar Buttons', function() {
  const AppBar = shallow(<AppBarComponent Menu/>)

  it('should render Menu Button', function() {
    expect(AppBar).toMatchSnapshot();
  });

});


