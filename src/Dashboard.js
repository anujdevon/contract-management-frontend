import React, {useState} from 'react';
import UploadFiles from './components/upload-files.component';
import './Dashboard.css';

const Dashboard = () => {
    const [firstName, setFirstName] = useState('');
    
    // Dummy handleSignup and handleLogin functions for demonstration
    const handleSignup = (user) => {
    // Handle signup logic here
    setFirstName(user.firstName);
    };
    
    const handleLogin = (credentials) => {
    // Handle login logic here
    // Assuming successful login, retrieve the user's first name
    
    const user = { firstName: 'John' }; // Replace with actual user retrieval logic
    setFirstName(user.firstName);
    };

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
                {firstName && <span className="welcome-message">Welcome, {firstName}</span>}
                <br /><h1>Welcome to the Dashboard!</h1>
                <div className="upload-section">

                    <h4>Upload Files:</h4>
                    <UploadFiles />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;