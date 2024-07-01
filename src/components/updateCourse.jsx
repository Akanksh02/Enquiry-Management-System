import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "./adminHeader";

const UpdateCourse = () => {
    const navigate = useNavigate();
    const { course_id } = useParams();


    console.log('course_id from updateCrsJSX : ',course_id);
    const [courseData, setCourseData] = useState({
        course_name: '',
        course_description: '',
        cost: '',
        duration: '',
    });

    const [error, setError] = useState('');



    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value, });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log('coursedata: ', courseData);
        try {
            const response = await axios.put(`http://localhost:8080/courses/update/${course_id}`, courseData);
            console.log("Course updated.", response.data);
            navigate("/adminViewCourse");
        } catch (error) {
            console.error("Error updating course:", error);
            setError('Error updating course. Please try again.');
        }
    };

    return (
        <div>
            <AdminHeader />
            <div className="container mt-5">
                <h2 style={{ color: 'white', textAlign: 'center' }}>Update Course</h2>
                <form className="form-group" onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Course Title</td>
                                <td>
                                    <input
                                        type="text"
                                        name="course_name"
                                        className="form-control"
                                        value={courseData.course_name}
                                        onChange={handleChange}
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
                                        value={courseData.course_description}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>Cost</td>
                                <td>
                                    <input
                                        type="number"
                                        name="cost"
                                        className="form-control"
                                        value={courseData.cost}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>
                                    <input
                                        type="number"
                                        name="duration"
                                        className="form-control"
                                        value={courseData.duration}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default UpdateCourse;
