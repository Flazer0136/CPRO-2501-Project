import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h1>Welcome to VClean</h1>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    );
}

export default App;