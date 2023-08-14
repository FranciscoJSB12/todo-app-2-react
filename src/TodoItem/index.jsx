import './styles.css';

const TodoItem = ({ text }) => {
    return (
      <li className="todo-item">
          <p className="todo-text">
              <span className='p'>V</span>
              <span className='p'>{text}</span>
              <span className='p'>X</span>
          </p>
      </li>
    );
}

export { TodoItem };