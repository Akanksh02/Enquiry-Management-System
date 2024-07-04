import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import AdminHeader from './adminHeader';



const AdminPaymentList = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch('http://localhost:8080/payment', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                setPayments(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching payments:', error);
                setLoading(false);
            }
        };

        fetchPayments();
    }, []);

    if (loading) {
        return <div className="d-flex justify-content-center mt-5"><Spinner animation="border" /></div>;
    }

    return (
        <div>
            <AdminHeader />
        <Container className="mt-5">
            <h2 className="mb-4" style={{color : 'white'}} >Payment List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Payment Type</th>
                        <th>Card Number</th>
                        <th>Course Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.name}</td>
                            <td>{payment.paymentType}</td>
                            <td>{payment.cardNumber}</td>
                            <td>{payment.courseName}</td>
                            <td>{payment.amount}</td>
                            <td>{new Date(payment.date).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
        </div>
    );
};

export default AdminPaymentList;
