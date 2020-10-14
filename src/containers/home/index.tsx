import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { logout } from '../../actions/home';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/login');
        }
    };


    return (
        <div>
            <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default HomePage;