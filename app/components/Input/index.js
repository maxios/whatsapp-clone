import React from 'react';
import styled from 'styled-components';
import Emoticon from './EmoticonButton';
import Send from './SendButton';

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
const Input = () => (
  <Wrapper>
    <Emoticon />
    <InputText type='text'/>
    <Send />
  </Wrapper>
)

export default Input;
