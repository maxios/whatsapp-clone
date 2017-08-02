import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import styled from 'styled-components';
import Conversations from '../../components/Conversations';
import AppBarComponent from '../../components/AppBar';
import Input from '../../components/Input';
import Message from '../../components/Message';

import { connect } from 'react-redux';
import { sendMessage } from './actions'

// lets css griding the layout
import {
  App,
  LeftSideTopBar,
  RightSideTopBar,
  ChatLists,
  ChatBody,
} from './Grid';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.messages)
    return (
      <MuiThemeProvider>
        <App>
          <LeftSideTopBar Menu/>
          <ChatLists>
            <Conversations/>
          </ChatLists>

          <RightSideTopBar Menu Attachment Search/>
          <ChatBody>
            {
              this.props.messages.map(message => {
                console.log(message)
                return(
                  <Message  
                    key={message.get('message')} 
                    body={message.get('message')}
                  />
                )
              })
            }
          </ChatBody>
          <Input />
        </App>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.get('messagesReducer').get('messages'),
  }
};

export default connect(mapStateToProps)(HomePage)
