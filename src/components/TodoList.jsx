import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"

const TodoList = ({ toggleTodo }) => {
  const todos = useSelector((state) => state.todos.todos)
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} toggleTodo={toggleTodo} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
