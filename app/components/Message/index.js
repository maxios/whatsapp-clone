import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: inline-block
padding: 15px;
width: 100%;
min-height: 100px;
`
const Bubble = styled.div`
display: inline-block;
padding: 20px;
background-color: #aaa;
float: ${props => props.float};
word-wrap: break-word;
`
const TextMessage = styled.p`
max-width: 30em;
white-space: wrap;
text-overflow: ellipse;
`
const Message = (props) => (
  <Wrapper>
    <Bubble float='right'>
      <TextMessage>
      {props.body}
    </TextMessage>
    </Bubble>
  </Wrapper>
)

export default Message;
