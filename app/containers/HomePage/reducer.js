import { fromJS, List } from 'immutable';
import uuidv4 from 'uuid/v4';
import ConversationAPI from '../../API/conversations';
import MessagesAPI from '../../API/messages';
import UsersAPI from '../../API/users';
import {
  SEND_MESSAGE,
  GET_MESSAGES
} from './constants';

// the server-side API mock reperesentation of database tables
const API = {
  conversations: ConversationAPI,
  messages: MessagesAPI,
  users: UsersAPI,
}

const currentUser = {
  id: 1,
  username: 'khaled',
  bio: 'a test bio',
}
// end of Mocking server-side 

const getConversationsByUserId = (data, id) => {
  return (
    data.filter(item => {
      return item.sender_id === id || item.recepient_id === id;
    })
  )
}

const getMessagesByConversationId = (data, id) => {
  let allMessages = data.filter(message => {
    return message.conversation_id === id
  })
  return fromJS(allMessages)
}

const getUserById = (data, id) => {
  return(
    data.filter(user => {
      return user.id === id
    })[0]
  ) }

const conversations__constructor = () => {
  let list = getConversationsByUserId(API.conversations, currentUser.id)
  list.map(item => {
    if ( currentUser.id === item.sender_id ){
      item.user = getUserById(API.users, item.recepient_id)
    }
    else {
      item.user = getUserById(API.users, item.sender_id)
    }
    item.messages = getMessagesByConversationId(API.messages, item.id)
  })
  return list;
}

const firstConversation = conversations__constructor()[0]

const initialState = fromJS({
  conversations: conversations__constructor(),
  openedConversation: firstConversation.id,
  messages: firstConversation.messages,
  currentUser: currentUser,
})


function messagesReducer(state = initialState, action) {
  switch(action.type) {
    case SEND_MESSAGE:
      console.log('SEND_MESSAGE reducer')
      let message = fromJS({
        id: uuidv4(),
        user_id: currentUser.id,
        conversation_id: state.get('openedConversation'),
        message: action.message
      })
      console.log(message)
      MessagesAPI.push(message.toJS());
      console.log(MessagesAPI)
      return state
        .set('messages', List(state.get('messages')).push(message))
    case GET_MESSAGES:
      return state
        .set('messages', getMessagesByConversationId(MessagesAPI, action.id))
        .set('openedConversation', action.id)
    default:
      return state;
  }
}



export default messagesReducer;
