import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Submit_Form_data } from "../redux/action/action";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Signup = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Submit_Form_data(formData));
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
        // console.log('Form submitted:', formData);
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <div>
                        <h2 className="text-center">Signup</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            </Form.Group>
                            <Button type="submit" variant="primary" className="w-100">Sign Up</Button>
                            <h6>Already have an account</h6>
                            <nav className='col-lg-12 d-flex justify-content-center align-item-center' >
                                <Link className='mx-2' to="/login">Login</Link>
                            </nav>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
