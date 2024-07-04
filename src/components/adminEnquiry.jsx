import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import AdminHeader from "./adminHeader";

const AdminEnquiry = () => {
    const [enquiries, setEnquiries] = useState([]);

    useEffect(() => {
        const fetchEnquiries = async () => {
            try {
                const response = await axios.get("http://localhost:8080/enquiry");
                setEnquiries(response.data);
            } catch (error) {
                console.error("Error fetching enquiries:", error);
            }
        };

        fetchEnquiries();
    }, []);

    const handleResolveEnquiry = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/enquiry/delete/${id}`);
            const updatedEnquiries = enquiries
                .filter(enquiry => enquiry.id !== id)
                .map((enquiry, index) => ({ ...enquiry, id: index + 1 })); 
            setEnquiries(updatedEnquiries);
            alert("Enquiry resolved and deleted.");
        } catch (error) {
            console.error("Error in resolving enquiry", error);
        }
    };

    return (
        <div>
            <AdminHeader />
            <div className="row">
                <div className="col-sm-12" style={{ minHeight: "600px", backgroundColor: "lightgray" }}>
                    <h2 style={{ color: "blue", textAlign: "center" }}>Enquiry Management</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Course Name</th>
                                <th>Enquiry Title</th>
                                <th>Description</th>
                                <th>Email Address</th>
                                <th>Enquiry Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enquiries.map(enquiry => (
                                <tr key={enquiry.id}>
                                    <td>{enquiry.id}</td>
                                    <td>{enquiry.courseName}</td>
                                    <td>{enquiry.enquiryTitle}</td>
                                    <td>{enquiry.description}</td>
                                    <td>{enquiry.email}</td>
                                    <td>{enquiry.date}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleResolveEnquiry(enquiry.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminEnquiry;
