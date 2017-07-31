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
    <Bubble float={props.float}>
      <TextMessage>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </TextMessage>
    </Bubble>
  </Wrapper>
)

export default Message;
