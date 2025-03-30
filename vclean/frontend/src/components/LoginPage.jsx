import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import cleaningImage from '../assets/cleaningImage.png';

function LoginPage() {
    return (
        <div className="login-page">
            <div className="login-card">
                {/* Left Section: Login Form */}
                <div className="login-form-container">
                    <h2>Welcome back!</h2>
                    <p>Enter your credentials to access your account</p>

                    <form>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                        />

                        <div className="extra-options">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                        </div>

                        <button type="submit" className="login-button">Login</button>

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
        </div>
    );
}

export default LoginPage;