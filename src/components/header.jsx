// Header.jsx

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";




const Header = () => {

    const { user, logout } = useContext(UserContext);

   


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    British-Enquiry-Management
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        {!user ? (
                            <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    Register
                                </Link>
                            </li>
                        </>
                        ) : (
                            <>

                       
                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/viewCourses">
                                    Courses
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/enquiry">
                                    Enquiry Form
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={logout}>
                                Logout
                                </Link>
                            </li>
                            </>
                        )}

                    </ul>
                   
                  
                </div>
            </div>
        </nav>
    );
};

export default Header;
