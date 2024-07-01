import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import AdminHeader from "./adminHeader";

const UserManagement = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("http://localhost:8080/student");
                setStudents(response.data);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <AdminHeader />
            <div className="row">
                <div className="col-sm-12" style={{ minHeight: "600px", backgroundColor: "lightgray" }}>
                    <h2 style={{ color: "blue", textAlign: "center" }}>
                        Student Management
                    </h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>UserName</th>
                                <th>Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
