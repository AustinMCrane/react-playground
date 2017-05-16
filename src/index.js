import React from 'react';
import ReactDOM from 'react-dom';

import Count from './containers/Count';
import Todo from './containers/Todo';

const App = () => {
    return (
        <div>
            <Count />
            <Todo />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('app'));
