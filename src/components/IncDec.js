import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Count_data } from "../redux/action/action"

const IncDec = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            dispatch(Count_data(newCount));
            return newCount;
        });
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => {
                const newCount = prevCount - 1;
                dispatch(Count_data(newCount));
                return newCount;
            });
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <h1>Increment/Decrement counter</h1>
                <h4>using React and Redux</h4>
                <Col className="col-xl-2">
                    <Col className="input-group">
                        <div className="input-group-prepend">
                            <Button variant="outline-primary" onClick={() => handleDecrement()}>-</Button>
                        </div>
                        <input type="text" className="form-control" value={count} readOnly style={{ textAlign: 'center' }} />
                        <div className="input-group-append">
                            <Button variant="outline-primary" onClick={() => handleIncrement()}>+</Button>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default IncDec;
