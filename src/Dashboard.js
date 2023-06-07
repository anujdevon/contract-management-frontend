import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ email }) => {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then(() => {
                setFile(null);
                fetchFiles();
            })
            .catch((error) => {
                console.error('Error uploading file:', error);
            });
    };

    const fetchFiles = () => {
        fetch('/files')
            .then((response) => response.json())
            .then((data) => {
                setFiles(data);
            })
            .catch((error) => {
                console.error('Error fetching files:', error);
            });
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div className="dashboard">
            <nav className="navbar">
                <div className="logo">
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
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/signup">Sign Up</a>
                    </li>
                    <li className="nav-item">
                        <a href="/login">Sign In</a>
                    </li>
                    <li className="nav-item">
                        <a href="SignUpPage.js">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div className="dashboard-container">
                <h2>Welcome, {email}</h2>
                <div className="upload-form">
                    <h3>Upload Contract</h3>
                    <form onSubmit={handleFileUpload}>
                        <input type="file" onChange={handleFileChange} />
                        <button type='submit'>Upload</button>
                    </form>
                </div>
                <div className="file-list">
                    <h3>Files</h3>
                    <ul>
                        {files.map((file) => (
                            <li key={file.id}>
                                <a href={'/download/${file.id}'}>{file.fileName}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;