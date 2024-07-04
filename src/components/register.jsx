import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const RegistrationPage = ({  }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        role:"",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try{
            const response = await fetch("http://localhost:8080/student/add",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name: formData.username,
                    email: formData.email,
                    role:formData.role,
                    password: formData.password
                })
            });
            

            if(response.ok){
                alert("Registration successfull");
                navigate("/login");
            }else{
                alert("Failed to register. Please try again.");
            }
        }catch(error){
            console.error("Error registering",error);
            alert("An error occurred. Please try again later. ")
        }


        setFormData({
            username: "",
            email: "",
            role:"",
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
                                <td>Role</td>
                                <td >
                                    <select 
                                    name="role"
                                    className="form-control"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                    >
                                    <option value="">Select Role</option>
                                    <option value="student">Student</option>
                                    <option value="admin">Admin</option>
                                    </select>
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
