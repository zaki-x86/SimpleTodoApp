import React from 'react';
import EmptyItem from '../components/EmptyItem';
import { useState } from "react";

const TodoContainer = ({todos, setTodos}) => {

    const todoStatusHandler = (id) => {
        setTodos(
            todos.map(
                todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                }
            )
        );
    }

    const todoDeleteHandler = (id) => {
        setTodos(
            todos.filter(
                todo => {
                    if (todo.id === id) {
                        return false;
                    }
                    return true;
                }
        )); }

    const defaultView = (
        <ul>
            <EmptyItem />
        </ul>
    );

    if (todos.length === 0) {
        return defaultView;
    }

    return (
        <ul>
            {todos.map(
                todo => {
                    return (
                        <li>
                            <input 
                            type="checkbox" 
                            defaultChecked={todo.completed}
                            onClick={() => todoStatusHandler(todo.id)}
                            />
                            <span>{todo.text}</span>
                            {"  "}
                            <button
                            onClick={() => todoDeleteHandler(todo.id)}
                            > X</button>
                        </li> 
                    );
                }
            )}      
        </ul>
    );

}

export default TodoContainer;