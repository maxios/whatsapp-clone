import styled from 'styled-components';
import ChatBackground from './chat-background.jpg';
import AppBarComponent from '../../components/AppBar';

const values = {
  TopBar: {
    height: '60px',
    color: '#eee',
  },
  LeftSide: {
    width: '400px',
    color: 'white',
  },
};

export const App = styled.div`
display: grid;
grid-template-columns: ${values.LeftSide.width} auto;
grid-template-rows: ${values.TopBar.height} auto 60px;
grid-column-gap: 1px;
width: 100vw;
height: 100vh;
`;

export const ChatLists = styled.div`
grid-column: 1 / 2;
grid-row: 2 / -1;
background-color: ${values.LeftSide.color};
`;

export const ChatBody = styled.div`
grid-column: 2 / 3;
grid-row: 2 / 3;
overflow-y: scroll;
background: url('${ChatBackground}');
`;

export const LeftSideTopBar = styled(AppBarComponent) `
grid-row: 1 / 2;
grid-column: 1 / 2;
background-color: ${values.TopBar.color};
`;

export const RightSideTopBar = styled(AppBarComponent) `
grid-row: 1 / 2;
grid-column: 2 / -1;
background-color: ${values.TopBar.color};
`;
