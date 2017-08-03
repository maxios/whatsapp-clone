import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import { connect } from 'react-redux';

const Send = (props) => (
  <IconButton onTouchTap={props.onTouchTap}><ContentSend /></IconButton>
);

const mapDispatchToProps = dispatch => {
  return {
    onSendMessage: () => dispatch(sendMessage('helllooooo'))
  }
}

export default connect(mapDispatchToProps)(Send);
