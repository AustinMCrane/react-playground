import React from 'react';
import styled from 'styled-components';

const Todo = styled.div`
    padding: 8px;
    width: 100%;
    border: 1px solid #eee;
`;
const TodoListItem = ({ todo }) => {
    const {
        name,
        id,
    } = todo;
    return (
        <Todo key={id}>
            <strong>{name}</strong>
            <button>close</button>
        </Todo>
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

