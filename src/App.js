import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Enquiry from './components/enquiry';
import Header from './components/header';
import Home from "./components/home";
import Login from "./components/login";
import Logout from './components/logout';
import Payment from './components/payment';
import RegistrationPage from './components/register';
import CoursesPage from './components/viewCourses';
const App = () => {

  const [registeredUsers, setRegisteredUsers] = useState(new Map());

  const handleRegister = (userData) => {
    // Add user to registeredUsers Map
    registeredUsers.set(userData.email, userData);
    setRegisteredUsers(new Map(registeredUsers)); // Ensure state update
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/register"
            element={<RegistrationPage onRegister={handleRegister} />}
          />
          <Route
            path="/login"
            element={<Login registeredUsers={registeredUsers} />}
          />
          <Route path="/" element={<Home />} />
          
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/header" element={<Header />} />
          <Route path="/viewCourses" element={<CoursesPage />} />
          <Route path="/payment" element={<Payment />} />
        

        </Routes>
      </div>

    </Router>
  );
}

export default App;
