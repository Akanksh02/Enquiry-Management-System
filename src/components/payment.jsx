import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { course, user } = location.state || {};
    const [name, setName] = useState(user ? user.name : '');
    const [paymentType, setPaymentType] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [courseName, setCourseName] = useState(course ? course.course_name : '');
    const [amount, setAmount] = useState(course ? course.cost : '');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const payment = { name, paymentType, cardNumber, courseName, amount };

        try {
            const response = await fetch('http://localhost:8080/payment/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payment),
            });

            if (response.ok) {
                alert('Payment added successfully');
                setPaymentType('');
                setCardNumber('');
                navigate("/");
            } else {
                alert('Failed to add payment');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className="w-50 p-4 border rounded bg-light">
                <h2 className="mb-4 text-center">Payment Form</h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                       
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Course Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                        readOnly
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Amount</label>
                    <input
                        type="text"
                        className="form-control"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        readOnly
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Payment Type</label>
                    <select
                        className="form-select"
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                        required
                    >
                        <option value="">Select a payment type</option>
                        <option value="Card">Card</option>
                        <option value="Gpay">Gpay</option>
                        <option value="Netbanking">Netbanking</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Card Number</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required={paymentType === 'Card'}
                        disabled={paymentType !== 'Card'}
                    />
                </div>
                
                
                <button type="submit" className="btn btn-primary w-100">pay now</button>
            </form>
        </div>
    );
};

export default PaymentForm;
