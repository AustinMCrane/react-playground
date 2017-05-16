import React from 'react';

import Counter from '../../components/Counter';
import Display from '../../components/Display';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.counterMinus = this.counterMinus.bind(this);
        this.counterAdd = this.counterAdd.bind(this);
        this.state = { count: 0 };
    }
    counterAdd() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    counterMinus() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <Counter
                    didAdd={this.counterAdd}
                    didMinus={this.counterMinus}
                />
                <Display
                    num={this.state.count}
                />
            </div>
        );
    }
}

export default Count;
