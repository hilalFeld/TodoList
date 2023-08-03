import React, { useState } from "react";
import Todo from "./Todo"
import { Container, IconButton, InputAdornment, Paper, TextField } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const TodoList = () => {

    const handleSubmit = (event) => { // function that saves the todo
        event.preventDefault();
        if (!todo) return
        addTodos(todo)
        setTodo("")
    }

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const addTodos = (todoText) => {
        const newTodos = [...todos, { todoText, isCompleted: false }];
        setTodos(newTodos)
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    }

    return (
        <Container maxWidth="sm">
            <h1
                style={{
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontSize: "4 rem",
                    margin: "4 rem 0",
                }}
            >
                Todo List
            </h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Add Todo"
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                    type="text"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={handleSubmit}>
                                    <AddCircleOutline />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
            <Paper style={{ marginTop: 16 }}>
                {todos.map((todo, index) => {
                    // I want to show the todo
                    return (
                        <Todo
                            todo={todo}
                            index={index}
                            key={index}
                            removeTodo={removeTodo}
                            completeTodo={completeTodo}
                        />
                    );
                })}
            </Paper>
        </Container>
    );
};

export default TodoList