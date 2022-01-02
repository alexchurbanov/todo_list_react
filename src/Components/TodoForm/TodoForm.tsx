import './TodoForm.sass';
import React, {useState} from "react";
import {TodoActions} from "../App";

interface TodoFormProps {
  addTodo: TodoActions["addTodo"]
}

function TodoForm({addTodo}: TodoFormProps) {
  const [taskName, setTaskName] = useState('');

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	if (!taskName) return alert("Name cannot be empty");
	addTodo(taskName);
	setTaskName('');
  }

  return (
	  <form className="todo-form" onSubmit={createTodo}>
		<label>
		  <input className="todo-form-input" value={taskName} onChange={e => setTaskName(e.target.value)}
				 placeholder="Type task name"
				 required/>
		</label>
		<button type="submit" className="todo-form-button" disabled={!taskName}>
		  <span>Add Task</span>
		</button>
	  </form>
  );
}

export default TodoForm;
