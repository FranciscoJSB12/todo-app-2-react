import './styles.css';

const TodoItem = ({ text }) => {
    return (
      <li className="todo-item">
          <div className="todo-icon">
            V
          </div>
          <p className="todo-text">
            {text}
          </p>
          <div className="todo-icon">
            X
          </div>
      </li>
    );
}

export { TodoItem };