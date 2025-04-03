import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import SearchFilterPage from './Components/SearchFilterPage';
import BookingPage from './Components/BookingPage';
import './App.css';

// Create Auth Context
export const AuthContext = createContext();

function Home({ services }) {
    return (
        <div className="home-page">
            <h1>Welcome to VClean</h1>
            <p>Your one-stop solution for booking cleaning services.</p>

            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <p>Price: ${service.price}</p>
                        <Link to="/booking" state={{ service }}>Book Now</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

function NavBar({ isAuthenticated }) {
    return (
        <nav>
            <Link to="/">Home</Link>
            {isAuthenticated ? (
                <Link to="/logout">Logout</Link>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Sample services data
    const services = [
        { id: 1, name: 'Basic Cleaning', description: 'Standard cleaning for small apartments', price: 50 },
        { id: 2, name: 'Deep Cleaning', description: 'Thorough cleaning for larger spaces', price: 100 },
        { id: 3, name: 'Office Cleaning', description: 'Commercial space cleaning', price: 150 }
    ];

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            <Router>
                <div className="App">
                    <NavBar isAuthenticated={isAuthenticated} />

                    <Routes>
                        <Route path="/" element={<Home services={services} />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route
                            path="/search"
                            element={
                                isAuthenticated ? <SearchFilterPage /> : <Navigate to="/login" />
                            }
                        />
                        <Route
                            path="/booking"
                            element={
                                isAuthenticated ? <BookingPage /> : <Navigate to="/login" />
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;