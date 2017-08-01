import {
  SEND_MESSAGE,
  GET_MESSAGES
} from './constants';

export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    message,
  };
}

export function getMessages(id) {
  return {
    type: GET_MESSAGES,
    id,
  }
}
