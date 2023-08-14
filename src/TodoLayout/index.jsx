import './styles.css';

const TodoLayout = ({ children }) => {
    return (
      <div className="todo-layout">
        <div className="todo-background">
            <div className="todo-app-container">
              {children}
            </div>
          </div>
      </div>
    );
}

export { TodoLayout };