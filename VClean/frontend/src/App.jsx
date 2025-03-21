import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './Components/LoginPage'; // Existing component file
import RegisterPage from './Components/RegisterPage'; // Registration component in its own file
import './App.css';

function Home() {
    return (
        <div className="home-page">
            <h1>Welcome to VClean</h1>
            <p>Your one-stop solution for booking cleaning services.</p>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="App">

                {/* React Router Setup */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
