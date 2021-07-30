import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './Component/AddTodo';
import TodoList from './Component/TodoList';
//import TotalCompleteItems from './Component/TotalCompleteItems';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>Todo List</h1>
			<AddTodoForm />
			<TodoList />
			
		</div>
	);
};

export default App;