import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import './LoginPage.css';
import cleaningImage from '../assets/cleaningImage.png';

function LoginPage() {
    return (
        <div className="login-page">
            {/* Left Section: Login Form */}
            <div className="login-form-container">
                <h2>Welcome back!</h2>
                <p>Enter your credentials to access your account</p>

                <form>
                    {/* Email Address Field */}
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email address"
                        required
                    />

                    {/* Password Field */}
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    {/* Login Button */}
                    <button type="submit" className="login-button">Login</button>

                    {/* Sign Up Link */}
                    <p className="signup-link">
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                </form>
            </div>

            {/* Right Section: Image & Label */}
            <div className="login-image-container">
                <img src={cleaningImage} alt="Cleaning Service" className="cleaning-img" />
                <h3 className="cleaning-text">Cleaning Service</h3>
            </div>
        </div>
    );
}

export default LoginPage;