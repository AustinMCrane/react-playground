import React from 'react';

import TodoList from '../../components/TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.todoNameChanged = this.todoNameChanged.bind(this);
        this.createTodo = this.createTodo.bind(this);
        this.state = {
            name: '',
            todos: [],
        };
    }

    todoNameChanged(event) {
        this.setState({
            name: event.target.value,
        });
    }

    createTodo() {
        if (this.state.name) {

            this.setState({
                todos: [ ...this.state.todos, { name: this.state.name, id: this.state.todos.length }],
                name: '',
                error: '',
            });
        } else {
            this.setState({
                error: 'Todo needs a name',
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div>
                    <input onChange={this.todoNameChanged} value={this.state.name} />
                    <button onClick={this.createTodo}>Add</button>
                </div>
                <div>
                    {this.state.error}
                </div>
                <TodoList
                    todos={this.state.todos}
                    onDelete={this.onTodoDelete}
                    onEdit={this.onTodoEdit}
                />
            </div>
        );
    }
}

export default Todo;
