import Layout from './components/Layout';
import AddTodo from './containers/AddTodo';
import TodoContainer from './containers/TodoContainer';
import { useState } from "react";



const _todos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn Redux', completed: false},
    { id: 3, text: 'Learn React-Redux', completed: false}
]

export const App = function () {
    const [todos, setTodos] = useState(_todos)

    return (
        <>
            <Layout>
                <AddTodo todos = {todos} setTodos = {setTodos} />
                <TodoContainer todos = {todos} setTodos = {setTodos} />
            </Layout>
            
        </>
    );
}

export default App;