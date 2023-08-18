import "./styles.css";

const CreateTodoButton = ({ setOpenModal }) => {
    return (
        <button 
            className="todo-create-button" 
            onClick={() => setOpenModal(state => !state)}
        >+</button>
    );
}

export { CreateTodoButton };