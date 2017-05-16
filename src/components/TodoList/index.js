import React from 'react';
import styled from 'styled-components';

const Todo = styled.div``;
const TodoListItem = ({ todo }) => {
    const {
        name,
        id,
    } = todo;
    return (
        <div key={id}>
            <strong>{name}</strong>
            <button>close</button>
        </div>
    );
}
const TodoList = ({ todos }) => {
    const todoItems = todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />);
    return (
        <div>
            {todoItems}
        </div>
    );
}

export default TodoList;

