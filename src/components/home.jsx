import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Header from "./header";

const divStyle = {
  color: "white",
  textAlign: "center",
};

const Home = () => {
  return (

    <div>
    <Header />
    <div style={divStyle}>
          <h1 color="white">British English Certification(BEC) Enquiry Management System </h1>
          <h2 color="white">Domain : Education</h2>
    </div>
    </div>
    
  );
}

export default Home;
