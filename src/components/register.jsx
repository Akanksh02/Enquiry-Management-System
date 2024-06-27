import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const RegistrationPage = ({ onRegister }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();


        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        alert(`Registration successful!\nUsername: ${formData.username}\nEmail: ${formData.email}`);

        navigate("/login");

        if (onRegister) {
            onRegister(formData);
        }

        setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <Header />
            <div className="container mt-5">
                <h2 style={{ color: "white", textAlign: "center" }}>Registration Form</h2>
                <form className="form-group" onSubmit={handleSubmit}>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Confirm Password</td>
                                <td>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit" className="btn btn-primary">
                                        Register
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;