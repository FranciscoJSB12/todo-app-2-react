import "./styles.css";

const CreateTodoButton = () => {
    return (
        <button onClick={() => alert('Hello!')}className="todo-create-button">+</button>
    );
}

export { CreateTodoButton };