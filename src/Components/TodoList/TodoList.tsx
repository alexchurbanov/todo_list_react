import './TodoList.sass';
import {Todo, TodoActions} from "../App/App";
import TodoItem from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[],
  deleteTodo: TodoActions["deleteTodo"],
  editTodo: TodoActions["editTodo"],
}

function TodoList({todos, deleteTodo, editTodo}: TodoListProps) {
  const list = todos.map(item => {
	return <TodoItem key={item.id} item={item} editTodo={editTodo} deleteTodo={deleteTodo}/>;
  })

  return (
	  <ul className="todo-items">
		{list}
	  </ul>
  );
}

export default TodoList;
