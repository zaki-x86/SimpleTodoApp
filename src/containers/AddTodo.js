const AddTodo = ({todos, setTodos}) => {

    // display a temporary component when a new todo is added
    // the new component will be removed after user clicks ok

    const addTodoPrompt = () => {
        let text = prompt("Enter a new todo");
        return text;
    }
        

    const addTodoHandler = () => {
        let text = addTodoPrompt();
        
        if (!text) {
            return;
        }

        setTodos(
            todos.concat(
                {
                    id: todos.length + 1,
                    text,
                    completed: false
                }
            )
        );
    }

    return (
        <div className="addTodo">
            <button 
            style={{fontSize: '1rem', width: '25px', height: '25px'}}
            onClick={addTodoHandler}
            > 
            + 
            </button>
            <span style={{fontSize: '1.5rem'}}> 
             {"  "}Add Todo
            </span>
        </div>
    );
}

export default AddTodo;