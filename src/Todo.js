
const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div>
            {todo}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>Remove </button>
            </div>
        </div>
    )
}

export default Todo