import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./adminHeader";

const ViewCourse = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);

    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://localhost:8080/courses");
            setCourses(response.data);
        } catch (error) {
            console.log("Error fetching courses:", error);
            setError("Error fetching courses. Please try again later.");
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleDeleteCourse = async (course_id) => {
        try {
            await axios.delete(`http://localhost:8080/courses/delete/${course_id}`);
            await fetchCourses(); // Refetch the courses after deletion
            console.log("Course deleted successfully");
        } catch (error) {
            console.error("Error deleting course:", error);
            setError("Error deleting course. Please try again later.");
        }
    };
    
    const handleUpdateCourse = (course_id) => {
        navigate(`/updateCourse/${course_id}`);
    };

    return (
        <div>
            <AdminHeader />
            <div className="container mt-5">
                <h2 className="text-center text-primary">Course Management</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Course Name</th>
                            <th>Description</th>
                            <th>Cost (in Rupees)</th>
                            <th>Duration (in months)</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={course.course_id}>
                                <td>{index + 1}</td> {/* Display sequential ID */}
                                <td>{course.course_name}</td>
                                <td>{course.course_description}</td>
                                <td>{course.cost}</td>
                                <td>{course.duration}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteCourse(course.course_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleUpdateCourse(course.course_id)}
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewCourse;
