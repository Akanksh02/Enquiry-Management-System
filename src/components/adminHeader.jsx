import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Link } from "react-router-dom";



const AdminHeader = () => {
    return (

    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/adminHome">British-Enquiry-Management</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item">
                            <Link className="nav-link" to="/Users">Users Management</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/adminViewCourse">Courses Management</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/adminEnquiry">Enquiry Management</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AddNewCourse">Add New Course</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>



    );
}

export default AdminHeader;