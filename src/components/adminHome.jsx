import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import AdminHeader from "./adminHeader";

const divStyle = {
    color: "white",
    textAlign: "center",
};

const AdminHome = () => {
    return (

        <div>
            <AdminHeader />
            <div style={divStyle}>
                <h1 color="white">British English Certification(BEC) Enquiry Management System </h1>
                <h2 color="white">Domain : Education system</h2>
            </div>
        </div>

    );
}

export default AdminHome;
