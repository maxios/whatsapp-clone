import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';


const Conversations = () => (
  <div>
      <ListItem
        value={1}
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
      />
      <ListItem
        value={3}
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
      />
      <ListItem
        value={4}
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
      />
      <ListItem
        value={5}
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
      />
    </div>
);

export default Conversations;
