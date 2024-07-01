import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import AdminHeader from "./adminHeader";



const AddNewCourse = ({ onAddCourse }) => {
    const [coursedata, setCourseData] = useState({
        course_name: '',
        course_description: '',
        cost: '',
        duration: '',
    });

    const handleChangetwo = (e) => {
        const { name, value } = e.target;
        setCourseData({
            ...coursedata,
            [name]: value,
        });
    };

    const handleSubmittwo = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:8080/courses/add",coursedata);
            console.log("course added.",response.data);
            onAddCourse();
        }catch(error){
            console.error("Error adding course:",error);
        }

      

        setCourseData({
            course_name: '',
            course_description: '',
            cost: '',
            duration: '',
        });
    };
    

    return (
        <div>
           <AdminHeader />
            <div className="container mt-5">
                <h2 style={{ color: 'white', textAlign: 'center' }}>Add New Course</h2>
                <form className="form-group" onSubmit={handleSubmittwo}>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Course Title</td>
                                <td>
                                    <input
                                        type="text"
                                        name="course_name"
                                        className="form-control"
                                        value={coursedata.course_name}
                                        onChange={handleChangetwo}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea
                                        className="form-control"
                                        name="course_description"
                                        rows="3"
                                        value={coursedata.course_description}
                                        onChange={handleChangetwo}
                                        required
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>Cost</td>
                                <td>
                                    <input
                                        type="text"
                                        name="cost"
                                        className="form-control"
                                        value={coursedata.cost}
                                        onChange={handleChangetwo}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Duration </td>
                                <td>
                                    <input
                                        type="text"
                                        name="duration"
                                        className="form-control"
                                        value={coursedata.duration}
                                        onChange={handleChangetwo}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit" className="btn btn-primary">
                                        Add 
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
};

export default AddNewCourse;