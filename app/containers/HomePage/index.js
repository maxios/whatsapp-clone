import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import styled from 'styled-components';
import Conversations from '../../components/Conversations';
import AppBarComponent from '../../components/AppBar';
import Input from '../../components/Input';
import Message from '../../components/Message';

// lets css griding the layout
import {
  App,
  LeftSideTopBar,
  RightSideTopBar,
  ChatLists,
  ChatBody,
} from './Grid';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();

    this.state = {
      conversations: [
        {
          user: 'khaled maher',
          LastMessage: 'well, It\'s terrible idea to code after mid-night',
          Unread: 1,
        },
      ]
    }

  }

  render() {
    return (
      <MuiThemeProvider>
        <App>
          <LeftSideTopBar Menu/>
          <ChatLists>
            <Conversations data={this.state.conversations}/>
          </ChatLists>

          <RightSideTopBar Menu Attachment Search/>
          <ChatBody>
            <Message float='left'/>
            <Message float='right'/>
            <Message float='right'/>
            <Message float='right'/>
          </ChatBody>
          <Input />
        </App>
      </MuiThemeProvider>
    );
  }
}
