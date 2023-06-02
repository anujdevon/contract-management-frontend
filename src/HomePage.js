import React from 'react';
import './HomePage.css';

const HomePage = () => (

    <div className="homepage-container">
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
                    <a href="/">Services</a>
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
        <div className="scrollable-content">
            <div className="homepage-content">
                <div className="homepage-image">
                    <img
                        src="https://www.gdprregister.eu/wp-content/uploads/2020/11/contract-lifecycle-management.png"
                        alt="Contract Lifecycle Management"
                    />
                </div>
                <div className="homepage-text">
                    <h1 className="homepage-title">
                        <span className="gradient-text">Contract Management</span> <br />
                        <span className="gradient-text-1">System</span>
                    </h1>
                    <p className="homepage-description">Streamline your Contracts, Simplify your Success</p>
                </div>
            </div>

            {/* /* <div className="sticky-header">
                <h2 className="services-heading">Our Services</h2>
                <div className="services-container">
                    <div className="service-box">
                        <h3 className="service-title">Service 1</h3>
                        <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="service-box">
                        <h3 className="service-title">Service 2</h3>
                        <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="service-box">
                        <h3 className="service-title">Service 3</h3>
                        <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br /></p>
                    </div>
                </div>
            </div> */ }
        </div>
    </div>
);

export default HomePage;