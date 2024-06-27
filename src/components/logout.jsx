import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';

const divStyle = {
    color: "white",
    textAlign: "center",
};
const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {

        localStorage.removeItem('authToken');
        localStorage.removeItem('user');


        const timer = setTimeout(() => {
            navigate('/login');
        }, 500);


        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <Header />
            <h3 style={divStyle}>Logging out...</h3>
        </div>
    );
};

export default Logout;
