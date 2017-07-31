import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

import Menu from './MenuButton';
import Search from './SearchButton';
import Attachment from './AttachmentButton';
import NewChat from './NewChatButton';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';

const Style = {
  height: '100%',
  background: '#eee',
};

const AppBarComponent = (props) => (
  <div>
    <AppBar
      iconElementLeft={<Avatar />}
      iconElementRight={
        <div>
          {
            props.Search ? <Search /> : ''
          }
          {
            props.NewChat ? <NewChat /> : ''
          }
          {
            props.Attachment ? <Attachment /> : ''
          }
          {
            props.Menu ? <Menu /> : ''
          }
        </div>
      }
      style={Style}
    />
  </div>
);

export default AppBarComponent;
