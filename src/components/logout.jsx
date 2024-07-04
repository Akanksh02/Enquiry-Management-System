import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import Header from './header';

const divStyle = {
    color: "white",
    textAlign: "center",
};
const Logout = () => {
    const navigate = useNavigate();
    const {logout} = useContext(UserContext);

    useEffect(() => {

        logout();


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
