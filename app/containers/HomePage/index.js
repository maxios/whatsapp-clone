
import React from 'react';
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ChatBackground from './chat-background.jpg';

const values = {
  TopBar: {
    width: '60px',
    color: '#eee'
  },
  Side: {
    width: '400px',
    color: 'white'
  }
}
const App = styled.div`
display: grid;
grid-template-columns: ${values.Side.width} auto;
grid-template-rows: ${values.TopBar.width} auto;
grid-column-gap: 1px;
width: 100vw;
height: 100vh;
`
const Side = styled.div`
grid-column: 1 / 2;
grid-row: 2 / -1;
background-color: ${values.Side.color};

`
const Body = styled.div`
grid-column: 2 / 3;
grid-row: 2 / -1;
background: url('${ChatBackground}');
`
const TopBar = styled.div `
grid-row: 1 / 2;
grid-column: 1 / 2;
background-color: ${values.TopBar.color};
`
const Options = styled.div `
grid-row: 1 / 2;
grid-column: 2 / -1;
background-color: ${values.TopBar.color};
`


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {

   
    return (
      <div>
      <App>
        <TopBar>
        </TopBar>

        <Side>
           
        </Side>

        <Options>
        </Options>

        <Body>
        </Body>
      </App>
    </div>
    );
  }
}
