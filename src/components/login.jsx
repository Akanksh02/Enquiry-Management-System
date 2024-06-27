import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const Login = ({ registeredUsers }) => {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      email: "",
      password: ""
   });
   const [error, setError] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      const user = registeredUsers.get(formData.email);

      if (!user) {
         setError("User not found. Please Register");
         return;
      }

      
     if(user.password !== formData.password){
      alert("Invalid password. Please try again.")
     return;
   }
      alert(`Login Successful! Welcome, ${user.username}`)
      navigate("/");
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };

   return (
      <div>
         <Header />
         <div className="container mt-5">
            <div className="row justify-content-center">
               <div className="col-md-6">
                  <div className="card">
                     <div className="card-body">
                        <h2 className="card-title text-center mb-4">Login</h2>
                        <form onSubmit={handleSubmit}>
                           <div className="form-group">
                              <label htmlFor="email">Email Address</label>
                              <input
                                 type="email"
                                 id="email"
                                 name="email"
                                 className="form-control"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                           <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input
                                 type="password"
                                 id="password"
                                 name="password"
                                 className="form-control"
                                 value={formData.password}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                           {error && <div className="alert alert-danger">{error}</div>}
                           <button type="submit" className="btn btn-primary btn-block">
                              Login
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
