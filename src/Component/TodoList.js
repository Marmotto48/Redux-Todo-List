import React, {useState} from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown'

const TodoList = ({todos}) => {
	const todoList = useSelector((state) => state.list);
	const [todoAll, seTodoAll] = useState("all");
	
	return (
		<>
			<Dropdown style={{paddingBottom:"20px"}}>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item onClick={() => seTodoAll("all")}>ALL</Dropdown.Item>
					<Dropdown.Item onClick={() => seTodoAll("done")}>Done</Dropdown.Item>
					<Dropdown.Item onClick={() => seTodoAll("undone")}>Undone</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<ul className='list-group'>
				{todoAll === "all"
				? todoList.map((el) => <TodoItem Todo={el} />)
				:todoAll === "undone"
				? todoList.filter((el) => el.isDone == false)
				.map((el) => <TodoItem Todo={el} />)
				: todoList
					.filter((el) => el.isDone == true)
					.map((el) => <TodoItem Todo={el} />)}
			</ul>
		</>
	);
};

export default TodoList;