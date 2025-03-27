import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import cleaningImage from '../assets/cleaningImage.png';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Simulate registration
        console.log('Registration data:', { username, email, password });

        // Clear form
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');

        // Navigate to login page
        navigate('/login');
    };

    return (
        <div className="register-page">
            <div className="register-card">
                {/* Left: Form Section */}
                <div className="register-form-container">
                    <h2>Create an Account</h2>
                    <p>Fill in your details to create your account</p>

                    <form onSubmit={handleSubmit}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="register-button">Register</button>

                        <p className="login-link">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>

                {/* Right: Image Section */}
                <div className="register-image-container">
                    <img src={cleaningImage} alt="Cleaning Service" className="cleaning-img" />
                    <h3 className="cleaning-text">Cleaning Service</h3>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
