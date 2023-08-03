import { useState } from "react";
import Todo from "./Todo"

const TodoList = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // function that saves the todo
        if (!todo) return
        addTodos(todo)
        setTodo("")
    }

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const addTodos = (todoText) => {
        const newTodos = [...todos, { todoText }]
        setTodos(newTodos)
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    return (
        <>
            <h1> Todo List </h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }}
                    type="text"
                />

                <button type="submit"> Add Todo </button>
            </form>

            {
                todos.map((todo, index) => {
                    // I want to show the todo
                    return <Todo
                        todo={todo}
                        index={index}
                        key={index}
                        removeTodo={removeTodo}
                        completeTodo={completeTodo}
                    />;
                })
            }
        </>
    )
}

export default TodoList