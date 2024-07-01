import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./header";



const CoursesPage = () => {
    

    const[courses , setCourse] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourses = async() =>{
            try{
                const response = await fetch("http://localhost:8080/courses");
            const data = await response.json();
            setCourse(data);
            }
            catch(error){
                console.error("Error fetching courses:" , error);
            }
        };

        fetchCourses();
       
    }, []);

    const handleBuyNow = (course) => {
        navigate("/payment", { state: { course } });
    };

    return (
        <div>
            <Header />
        <Container className="text-center mt-4">
            <Row className="g-2">
                {courses.map((course) => (
                    <Col key={course.id} xs={12} md={6} lg={4}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{course.course_name}</Card.Title>
                                <Card.Text>{course.course_description}</Card.Text>
                                <Card.Text>Cost: ${course.cost}</Card.Text>
                                <Card.Text>Duration: {course.duration} months</Card.Text>
                                <Button variant="primary" onClick={() => handleBuyNow(course)}>Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    );
};

export default CoursesPage;
