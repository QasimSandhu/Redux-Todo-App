import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { Add } from "../redux/action/action";
import { useDispatch } from 'react-redux';
import IncDec from './IncDec';
import { Link } from 'react-router-dom';



const Home = () => {

    const [data, setData] = useState("");
    // console.log(data, "Home page input field data");

    const dispatch = useDispatch();

    const AddData = () => {
        dispatch(Add(data));
        setData("");
    }

    return (
        <>
            <div className="container">
                <section className='mt-3 text-center'>
                    <h3>Enter Your Text</h3>
                    <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-item-center">
                        <input className='form-control' name='task' onChange={(e) => setData(e.target.value)} value={data} />
                        <Button variant='contained' className='mx-2' sx={{ backgroundColor: "#ee5253" }} onClick={() => AddData()} ><AddIcon /></Button>
                    </div>
                    <Todo />
                </section>
                <section className="mt-3 text-center">
                    <nav className='col-lg-12 d-flex justify-content-center align-item-center' >
                        <Link className='mx-2' to="/login">Login</Link>
                        <Link className='mx-2' to="/signup">Signup</Link>
                    </nav>
                </section>
                <section className="mt-3 text-center">
                    <IncDec />
                </section>
            </div>
        </>
    );
}

export default Home;