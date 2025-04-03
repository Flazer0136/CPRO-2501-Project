import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App'; // Adjust path as needed
import './LoginPage.css';
import cleaningImage from '../assets/cleaningImage.png';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    // Add this check to prevent errors if context is missing
    if (!authContext) {
        console.error("AuthContext is not available");
        return <div>Loading...</div>;
    }

    const { setIsAuthenticated, setUser } = authContext;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Simulate login
        try {
            setError('');
            setIsAuthenticated(true);
            setUser({ email, name: 'Demo User' });
            navigate('/');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-form-container">
                    <h2>Welcome back!</h2>
                    <p>Enter your credentials to access your account</p>

                    <form onSubmit={handleSubmit}>
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

                        <div className="extra-options">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                        </div>

                        {error && <p className="error-message">{error}</p>}

                        <button type="submit" className="login-button">Login</button>

                        <p className="signup-link">
                            Don't have an account? <Link to="/register">Sign up</Link>
                        </p>
                    </form>
                </div>

                <div className="login-image-container">
                    <img src={cleaningImage} alt="Cleaning Service" className="cleaning-img" />
                    <h3 className="cleaning-text">Cleaning Service</h3>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;