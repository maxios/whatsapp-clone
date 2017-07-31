import React from 'react';
import styled from 'styled-components'
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import AvatarImage from './avatar-image.jpg';

const ListStyle = {
  overflowY: 'scroll',
  height: 'calc(100vh - 60px)'
}
const ListItemStyle = {
  paddingTop: '10px',
  paddingBottom: '10px',
}

const Name = styled.p`
margin: 0;
margin-right: 20px;
font-size: 1.2em;
`
const Date = styled.p`
float: right;
margin: 0;
`
const LastMessage = styled.p`
margin: 0;
margin-right: 20px;
p{
width: 180px;
display: inline-block;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
`
const Unread = styled.div`
background-color: green;
padding: 2px 8px;
border-radius: 5px;
display: inline-block
float: right;
font-size: 0.8em;
color: white;
`
const Conversations = (props) => (
  <List style={ListStyle}>
    {
      props.data.map(chat => {
        return(
          <ListItem
            value={1}
            leftAvatar={
              <Avatar 
                size={60} 
                style={{ top: '0' }} 
                src={AvatarImage} 
              />
            }
            style={ListItemStyle}
            innerDivStyle={{ padding: '0 0 0 100px' }}
            key={chat.user}
          >
            <Name>
              {chat.user}
              <Date>12:12pm</Date>
            </Name>

            <LastMessage>
              <p>{chat.LastMessage}</p>
              {
                props.unread ? (
                  <Unread>{chat.unread}</Unread>
                ): ''
              }
            </LastMessage>
          </ListItem>
        )
      })
    }
  </List>
);

export default Conversations;
