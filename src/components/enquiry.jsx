import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Header from "./header";

const Enquiry = () => {
    const [formData, setFormData] = useState({
        course_name: "",
        enquiry_title: "",
        description: "",
        email: "",
        enquiryDate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);

        try {
            const response = await fetch("http://localhost:8080/enquiry/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Enquiry submitted successfully");
                // Clear the form after successful submission
                setFormData({
                    course_name: "",
                    enquiry_title: "",
                    description: "",
                    email: "",
                    enquiryDate: ""
                });
            } else {
                const errorData = await response.json();
                console.error("Error response from server:", errorData);
                alert("Failed to submit enquiry");
            }
        } catch (error) {
            console.error("Error submitting enquiry:", error);
            alert("An error occurred. Please try again later.");
        }
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
                                        name="courseName"
                                        className="form-control"
                                        value={formData.courseName}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Enquiry Title</td>
                                <td>
                                    <input
                                        type="text"
                                        name="enquiryTitle"
                                        className="form-control"
                                        value={formData.enquiryTitle}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        value={formData.description}
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
                                        name="enquiryDate"
                                        className="form-control"
                                        value={formData.enquiryDate}
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
};

export default Enquiry;
