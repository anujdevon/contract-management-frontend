import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import SignupPage from './SignUpPage';
import LoginPage from './LoginPage';

const HomePage = () => (
  <div>
    <h1>Welcome to Contract Management System</h1>
    <p>Please sign up or login to continue</p>
    <div>
      <Link to="/signup">Sign Up</Link><br></br>
      <Link to="/login">Log in</Link>
    </div>
  </div>

);


const App = () => {
  const baseURL = 'http://localhost:8080'; // Update with your backend URL

  const handleSignup = async (user) => {
    try {
      const response = await axios.post(`${baseURL}/signup`, user);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (user) => {
    try {
      const response = await axios.post(`http://localhost:8080/login`, user);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={<SignupPage handleSignup={handleSignup} />}
          />
          <Route
            path="/login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;