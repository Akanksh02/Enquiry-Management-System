import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import AddNewCourse from './components/AddNewCourse';
import { AuthProvider } from './components/AuthContext';
import UserManagement from './components/Users';
import AdminEnquiry from './components/adminEnquiry';
import AdminHeader from './components/adminHeader';
import AdminHome from './components/adminHome';
import ViewCourse from './components/adminViewCourse';
import Enquiry from './components/enquiry';
import Header from './components/header';
import Home from "./components/home";
import Login from "./components/login";
import Logout from './components/logout';
import Payment from './components/payment';
import RegistrationPage from './components/register';
import UpdateCourse from './components/updateCourse';
import CoursesPage from './components/viewCourses';



const App = () => {

  const [registeredUsers, setRegisteredUsers] = useState(new Map());

  const handleRegister = (userData) => {

    registeredUsers.set(userData.email, userData);
    setRegisteredUsers(new Map(registeredUsers));
  };
  return (
    <AuthProvider>
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
            <Route path="/adminViewCourse" element={<ViewCourse />} />
            <Route path="/adminHeader" element={<AdminHeader />} />
            <Route path="/adminEnquiry" element={<AdminEnquiry />} />
            <Route path="/Users" element={<UserManagement />} />
            <Route path="/AddNewCourse" element={<AddNewCourse />} />
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/updateCourse/:course_id" element={<UpdateCourse />} />
            

          </Routes>
        </div>

      </Router>
    </AuthProvider>

  );
}

export default App;
