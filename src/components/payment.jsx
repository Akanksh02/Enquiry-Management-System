import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { course } = location.state || {};

    const handlePayNow = () => {

        alert(`Proceeding to pay for ${course.title}`);
        navigate('/');
    };

    return (
        <Container className="mt-4">
            {course ? (
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                        <Card.Text>{course.description}</Card.Text>
                        <Button variant="success" onClick={handlePayNow}>Pay Now</Button>
                    </Card.Body>
                </Card>
            ) : (
                <p>No course selected. Please go back and select a course.</p>
            )}
        </Container>
    );
};

export default Payment;
