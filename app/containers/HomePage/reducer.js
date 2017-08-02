import { fromJS } from 'immutable';
import ConversationAPI from '../../API/conversations';
import MessagesAPI from '../../API/messages';
import {
  SEND_MESSAGE,
  GET_MESSAGES
} from './constants';

const initialState = fromJS({
  conversations: ConversationAPI,
  messages: [
    {user: 'test', message: 'hahahahaha'}
  ],
});


function messagesReducer(state = initialState, action) {
  switch(action.type) {
    case SEND_MESSAGE:
      return state
        .set('body', action.message);
    case GET_MESSAGES:
      return state
        .set('messages', state.get('conversations').find(item => item.get('id') === action.id).get('messages'))
    default:
      return state;
  }
}



export default messagesReducer;
