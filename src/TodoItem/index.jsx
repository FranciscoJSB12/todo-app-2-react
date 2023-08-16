import { IconContext } from 'react-icons';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import './styles.css';

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
    return (
      <li className="todo-item">
         <IconContext.Provider value={{className: `icon icon-check ${completed && "icon-check--active"}`}}>
              <span onClick={onComplete}> 
                  <BsCheckCircleFill/>
              </span>
          </IconContext.Provider>
          <p className={`todo-text ${completed && "todo-text--complete"}`}>
            {text}
          </p>
          <IconContext.Provider value={{className: "icon icon-delete"}}>
              <span onClick={onDelete}> 
                  <BsXCircleFill/>
              </span>
          </IconContext.Provider>
      </li>
    );
}

export { TodoItem };