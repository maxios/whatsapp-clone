import React from 'react';
import styled from 'styled-components';
import Emoticon from './EmoticonButton';
import Send from './SendButton';
import { connect } from 'react-redux';
import { sendMessage } from '../../containers/HomePage/actions.js';

const Wrapper = styled.div`
background-color: #eee;
width: 100%;
grid-row: 3 / 4;
display: flex;
align-items: center;
justify-content: space-between;
`
const InputText = styled.input`
flex: 1;
border: 0;
height: 100%;
padding: 5px 15px;
background-color: white;
`
class Input extends React.Component {

  handleSendMessage(e){
    console.log('heeey')
    if (e.key == 'Enter') {
      this.props.onSendMessage(document.querySelector('input').value);
    }
  }

  render(){
    return (
      <Wrapper>
        <Emoticon />
        <InputText 
          onKeyPress={this.handleSendMessage.bind(this)}
          type='text'
        />
        <Send onTouchTap={() => this.props.onSendMessage(document.querySelector('input').value)}/>
      </Wrapper>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onSendMessage: (param) => dispatch(sendMessage(param))
  }
}
export default connect(null, mapDispatchToProps)(Input);
