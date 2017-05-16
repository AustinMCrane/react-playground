import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Count from './containers/Count';
import Todo from './containers/Todo';

const Container = styled.div`
    * {
      font-family: 'Helvetica';
    }
`;

const App = () => {
    return (
        <Container>
            <Count />
            <Todo />
        </Container>
    );
}
ReactDOM.render(<App />, document.getElementById('app'));
