import React from 'react';
import UploadFiles from './components/upload-files.component';
import './Dashboard.css';

const Dashboard = ({ firstName }) => {


    return (
        <div className="dashboard-page">
            <nav className="navbar">
                <div className='logo'>
                    <img
                        className="logo-image"
                        src="https://devon.global/wp-content/uploads/2016/12/devon-logo-blue.png"
                        alt="Logo"
                    />
                </div>
                <div className="search-box">
                    <input type="text" className="search-input" placeholder="Search" />
                    <i className="fas fa-search search-icon"></i>
                </div>
                <ul className="nav-links">
                    <li className="nav-item">
                        <a href="/services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/signup">Sign Up</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Contact">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div className="dashboard">
                <br />
                
                <br /><h1>Welcome, {firstName}!!!</h1>
                <div className="upload-section">

                    <h4>Upload Files:</h4>
                    <UploadFiles />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;