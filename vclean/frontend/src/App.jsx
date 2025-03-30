import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import SearchFilterPage from './Components/SearchFilterPage';
import BookingPage from './Components/BookingPage';
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
                    <Route path="/search" element={<SearchFilterPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;