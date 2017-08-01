import { fromJS } from 'immutable';
import API from '../API/mock';
import {
  SEND_MESSAGE,
  GET_MESSAGES
} from './constants';

const initialState = fromJS({
  conversations: [
    {
      id: 1,
      user: 'khale maher',
      lastMessage: 'its khaled maher ',
      sent_at: 2017,
      messages: [
        {
          user: 'khaled',
          message: 'hello'
        },
        {
          user: 'majed',
          message: 'hey'
        },
      ]
    }
  ],
  messages: [{user: 'kheled', message: 'hello'}]
});


function messagesReducer(state = initialState, action) {
  switch(action.type) {
    case SEND_MESSAGE:
      return state
        .set('body', action.message);
    case GET_MESSAGES:
      return state
        .set('messages', state.get('conversations').find(item => item.id === action.id))
    default:
      return state;
  }
}



export default messagesReducer;
