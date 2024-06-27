import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Header from "./header";

const Enquiry = () => {


    
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        address: "",
        contactno: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (

        <div>
            <Header />
            <div className="container mt-5">
                    <h2 style={{ color: "white", textAlign: "center" }}>Enquiry Form</h2>
                    <form className="form-group" onSubmit={handleSubmit}>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Course Name</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Enquiry Title</td>
                                    
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>
                                        <textarea
                                            name="address"
                                            className="form-control"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Enter Email Address</td>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Enquiry Date</td>
                                    <td>
                                        <input
                                            type="date"
                                            name="date"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                               
                                <tr>
                                    <td></td>
                                    <td>
                                        <button type="submit" className="btn btn-success">
                                            Submit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
}

export default Enquiry;