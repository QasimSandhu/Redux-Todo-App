// useContext, 
import React, { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Remove, Update_data } from '../redux/action/action';
// import { DeleteContext } from './context/ContextProvider';



const Todo = () => {

    const { User_data } = useSelector((state) => state.todoreducers);
    console.log(User_data);

    // const [delalert, setDelAlert] = useContext(DeleteContext);
    // console.log(delalert, "Todo.js Deltask");

    // Show Hide Eye
    const [showeye, setShoweye] = useState(false);
    const [showeyevalue, setShoweyeValue] = useState("");
    //Edit Update Record
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState("");
    const [ind, setInd] = useState("");

    // Delete Recoed
    const dispatch = useDispatch();
    const remove = (id) => {
        dispatch(Remove(id));
        // setDelAlert(true);
    }

    //Edit Update Record
    const handleShow = (element) => {
        setShow(true);
        setUpdate(element);
    }
    
    // Close Update Model and Data
    const handleClose = () => setShow(false);
    const handleUpdateData = () => {
        dispatch(Update_data(update, ind));
        handleClose();
    }


    return (
        <>
            <div className="todo_data col-lg-5 mx-auto mt-2 ">
                {
                    User_data.map((element, key) => {
                        return (
                            <>
                                <div className="todo_container d-flex justify-content-between align-items-center px-2 mb-2" style={{ backgroundColor: "#dcdde1", borderRadius: '3px', height: '45px' }} key={element.id}>
                                    <li style={{ listStyle: 'none' }} >{element}</li>
                                    <div className="edit_del col-lg-2 py-2 d-flex justify-content-between">
                                        <ModeEditIcon style={{ color: "#3c40c6", cursor: "pointer" }} onClick={() => { handleShow(element); setInd(key) }} />
                                        <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={() => remove(key)} />
                                        <RemoveRedEyeIcon style={{ color: "#1dd1a1", cursor: "pointer" }} onClick={() => { setShoweye(true); setShoweyeValue(element) }} />
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
                {/* Bootstrap Read Model Form */}
                <Modal show={showeye}>
                    <h1 className='text-center'>{showeyevalue}</h1>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShoweye(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>

                {/* Bootstrap Update Model Form */}
                <Modal show={show} onHide={handleClose}>
                    <h3 className="text-center mt-2">Update Your Record</h3>
                    <Modal.Body><div className="todo col-lg-5 mx-auto d-flex justify-content-between align-item-center">
                        <input className='form-control col-lg-5 mt-2' name='task' onChange={(e) => setUpdate(e.target.value)} value={update} />
                    </div></Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose} >Close</Button>
                        <Button variant='primary' onClick={() => handleUpdateData()} >Save Changed</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default Todo;