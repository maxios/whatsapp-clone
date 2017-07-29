import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import FileAttachment from 'material-ui/svg-icons/file/attachment';
import ActionSearch from 'material-ui/svg-icons/action/search';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

const NewChat = (props) => (
  <IconButton><CommunicationMessage /></IconButton>
);

const Attachment = (props) => (
  <IconButton><FileAttachment /></IconButton>
);

const Search = (props) => (
  <IconButton><ActionSearch /></IconButton>
);




class AppBarComponent extends Component {
  render() {
    var buttons = this.props.buttons
    return (
      <div>
        <AppBar
          iconElementLeft={<Avatar />}
          iconElementRight={<div><Search /><Attachment /><NewChat /><Menu /></div>}
          style={{height: '100%', background: '#eee'}}
        />
      </div>
    );
  }
}

export default AppBarComponent;
