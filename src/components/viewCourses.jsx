// Courses.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const CoursesPage = () => {
    const courses = [
        { id: 1, title: "Java Full Stack", description: "A Java full stack course typically covers both front-end and back-end development using Java technologies. Students learn Java programming, web development frameworks like Spring and Hibernate, database management with SQL or NoSQL databases, and front-end technologies such as HTML, CSS, and JavaScript." },
        { id: 2, title: "Python Full Stack", description: "A Python full stack course usually covers comprehensive training in both front-end and back-end web development using Python and related frameworks." },
        { id: 3, title: "MERN Stack", description: "The MERN stack is a robust framework for full stack web development that leverages JavaScript across all layers of an application. " },
        { id: 4, title: "MEAN Stack", description: "MEAN stands for MongoDB, Express.js, Angular, and Node.js. This stack enables developers to use a single language, JavaScript, throughout the entire application stack, from the database to the user interface, streamlining development and facilitating the creation of scalable and maintainable web applications." },
        { id: 5, title: "Data Structure and Algorithm", description: "It's a fundamental topic in computer science and software engineering that focuses on understanding and implementing efficient ways to organize and manipulate data. " },
        { id: 6, title: "Cloud Computing", description: "Cloud computing refers to the delivery of computing services—including servers, storage, databases, networking, software, and more—over the Internet." },
        { id: 7, title: "Web Technologies", description: "These technologies collectively enable developers to create, deploy, and maintain web applications that are interactive, responsive, secure, and scalable, meeting diverse user and business requirements." },
        { id: 8, title: "ReactJS", description: "React.js, often referred to simply as React, is a powerful JavaScript library developed and maintained by Facebook. It is used for building user interfaces (UIs) for single-page applications (SPAs) and handling view layer for web and mobile apps." },
    ];

    const navigate = useNavigate();

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
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>{course.description}</Card.Text>
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
