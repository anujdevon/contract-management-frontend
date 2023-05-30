import React, { useState } from 'react';

const SignupPage = ({ handleSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignup({ email, password });
        setSignupSuccess(true);
    };

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            {signupSuccess && <p>Sign Up successful! You can now log in.</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default SignupPage;