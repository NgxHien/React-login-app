import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { logout } from '../../actions/home';
import { useDispatch } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default HomePage;