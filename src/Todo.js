import React from "react";
import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <ListItem
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >

            <Checkbox
                onClick={() => completeTodo(index)}
                checked={todo.isCompleted}
            />
            <ListItemText primary={todo.todoText} />
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => removeTodo(index)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo