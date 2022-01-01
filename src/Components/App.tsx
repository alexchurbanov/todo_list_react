import './App.sass';
import TodoForm from "./TodoForm/TodoForm";
import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import TodoList from "./TodoList/TodoList";

export interface Todo {
  name: string,
  id: string
}

export interface TodoActions {
  addTodo: (name: string) => void,
  deleteTodo: (id: string) => void,
  editTodo: (item: Todo) => void,
}

function App() {
  const [todos, setTodos] = useState([] as Todo[]);

  const addTodo: TodoActions["addTodo"] = (todo_name: string) => {
	setTodos([...todos, {name: todo_name, id: uuidv4()}]);
  }
  const deleteTodo: TodoActions["deleteTodo"] = (todo_id: string) => {
	setTodos(todos.filter(({id}) => id !== todo_id));
  }
  const editTodo: TodoActions["editTodo"] = (item) => {
	const changed_list = [...todos];
	changed_list[changed_list.findIndex(({id}) => id === item.id)] = item;
	setTodos(changed_list);
  }

  return (
	  <div className="app">
		<TodoForm addTodo={addTodo}/>
		<TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
	  </div>
  );
}

export default App;
