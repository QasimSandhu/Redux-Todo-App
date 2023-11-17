import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector } from "react-redux";

const Login = () => {
    // Get user data form redux store
    const { User_data } = useSelector((state) => state.todoreducers);
    console.log(User_data, "User_data User Store");

    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        setFormData({
            email: '',
            password: ''
        });
        // const foundUser = User_data.find((element) => {
        //     return formData.email === element.email && formData.password === element.password;
        // });

        // if (foundUser) {
        //     alert(`Welcome, ${formData.email}`);
        // } else {
        //     alert('Invalid email or password');
        // }
        User_data.map((element) => {
            if (formData.email === element.email && formData.password === element.password) {
                alert('Welcome', element.username);
                return element;
            } else {
                alert('Invalid email or password');
            }
        });
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <div>
                        <h2 className="text-center">Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                            </Form.Group>
                            <Button type="submit" variant="primary" className="w-100">Log In</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
