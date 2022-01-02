import './TodoItem.sass';
import {Todo, TodoActions} from "../../App";
import React, {useState} from "react";

interface TodoItemProps {
  item: Todo,
  deleteTodo: TodoActions["deleteTodo"],
  editTodo: TodoActions["editTodo"],
}

function TodoItem({item, deleteTodo, editTodo}: TodoItemProps) {
  const [edit, setEdit] = useState(false);
  const [new_name, setNewName] = useState(item.name);
  const [checked, setCheck] = useState(false);

  if (!edit) {

	const editTodo = (e: any) => {
	  e.stopPropagation();
	  setEdit(true);
	}

	return (
		<li className={`todo-item ${checked ? 'checked' : ''}`} onClick={() => setCheck(!checked)}>
		  <span>{item.name}</span>
		  <div className="todo-buttons">
			<button className="todo-remove-btn" type="button" onClick={() => deleteTodo(item.id)}>
			  <span>Delete Todo</span>
			</button>
			<button className="todo-edit-btn" type="button" onClick={editTodo} disabled={checked}>
			  <span>Edit Todo</span>
			</button>
		  </div>
		</li>
	);
  } else {

	const cancelEdit = () => {
	  setNewName(item.name);
	  setEdit(false);
	}

	const saveEdit = () => {
	  if (!new_name) return alert("Name cannot be empty");
	  const editedTodo: Todo = {id: item.id, name: new_name};
	  editTodo(editedTodo);
	  setEdit(false);
	}

	return (
		<li className='todo-edit'>
		  <label>
			<input className="todo-edit-input" value={new_name} placeholder={item.name}
				   onChange={e => setNewName(e.target.value)} required/>
		  </label>
		  <button className="todo-save-edit-btn" type="button" onClick={() => saveEdit()} disabled={!new_name}>
			<span>Ok</span>
		  </button>
		  <button className="todo-cancel-edit-btn" type="button" onClick={() => cancelEdit()}>
			<span>Cancel</span>
		  </button>
		</li>
	);
  }
}

export default TodoItem;
