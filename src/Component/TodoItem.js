import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { deleteAct, doneAct, editAct } from "../Redux/Actions";
import Modal from 'react-bootstrap/Modal'
import { FaEdit, FaCheck, FaRegWindowClose } from 'react-icons/fa';

const TodoItem = ({Todo}) => {
	
	const dispatch = useDispatch();


	//modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [newText, setnewText] = useState();
	const handleEdit = () => {
		dispatch(editAct(Todo.id, newText));
		handleClose();
		setnewText("")
	  };
	return (
		<li className={`list-group-item 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
				<div>
					<FaEdit 
						style={{
							fontSize:"25px", 
							cursor:"pointer",
							color:"#958A88"
						}} onClick={handleShow} />
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton></Modal.Header>
						<Modal.Body>
							<input
								type="text"
								value={newText}
								onChange={(e) => setnewText(e.target.value)}
							/>
						</Modal.Body>
						<Modal.Footer>
							<button className="btn btn-secondary" onClick={handleClose}>Cancel</button>
							<button class="btn btn-primary" onClick={handleEdit}>Save Changes</button>
						</Modal.Footer>
					</Modal>
				</div>
					<FaCheck
						style={{
							marginLeft:"10px", 
							fontSize:"20px", 
							color: Todo.isDone?'green' : '#F9D2C9', 
							cursor:"pointer"}} 
						onClick={() => dispatch(doneAct(Todo.id))}
						/>
					<span style={{marginLeft:"10px", textDecoration: Todo.isDone? 'line-through' : 'none'}}>{Todo.text}</span> 
				</span>			
				<FaRegWindowClose 
					onClick={() => dispatch(deleteAct(Todo.id))}
					style={{
						fontSize:"25px",
						cursor:"pointer",
						color:"#D1553A"
						
					}}
				/>
			</div>
		</li>
	);
};

export default TodoItem;