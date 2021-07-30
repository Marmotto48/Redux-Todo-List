import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addAct} from '../Redux/Actions';


function AddTodo ()  {
	const [value, setValue] = useState('');
	const dispatch = useDispatch()

	const writeTask = (event) => {	
		setValue(event.target.value);
	};

	
	const addClicked =(event) => {
		event.preventDefault();
		dispatch(addAct({ id: Math.random(), text: value, isDone: false }));
		setValue("");
	}

	return (
			<form  className='form-inline mt-3 mb-3'>
				<input
					type='text'
					className='form-control mb-2 mr-sm-2'
					placeholder='Add task...'
					value={value}
					onChange={writeTask}
				></input>
				<button onClick={addClicked} className='btn btn-primary mb-2'>Add</button>
			</form>
		);
};

export default AddTodo; 