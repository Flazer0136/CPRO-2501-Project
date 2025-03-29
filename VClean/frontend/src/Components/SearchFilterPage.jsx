import React, { useState } from 'react';
import './SearchFilterPage.css';

function SearchFilterPage() {
    // State hooks for each filter
    const [location, setLocation] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [rating, setRating] = useState('');

    // Handle the form submission
    const handleSearch = (e) => {
        e.preventDefault();

        // You’d typically call an API or filter a local list
        console.log('Searching with:', {
            location,
            serviceType,
            priceRange,
            rating,
        });
    };

    return (
        <div className="search-filter-page">
            <div className="search-filter-card">
                <h2>Find Cleaning Services</h2>
                <p>Search and filter by location, type, price, and ratings.</p>

                <form onSubmit={handleSearch} className="search-filter-form">
                    {/* Location */}
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        placeholder="City, ZIP Code, or GPS"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    {/* Service Type */}
                    <label htmlFor="serviceType">Service Type</label>
                    <select
                        id="serviceType"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="deep-cleaning">Deep Cleaning</option>
                        <option value="move-in-out">Move In/Out</option>
                    </select>

                    {/* Price Range */}
                    <label htmlFor="priceRange">Price Range</label>
                    <select
                        id="priceRange"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="low">$ (Budget)</option>
                        <option value="medium">$$ (Moderate)</option>
                        <option value="high">$$$ (Premium)</option>
                    </select>

                    {/* Ratings */}
                    <label htmlFor="rating">Minimum Rating</label>
                    <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="4">4 Stars & Up</option>
                        <option value="3">3 Stars & Up</option>
                        <option value="2">2 Stars & Up</option>
                        <option value="1">1 Star & Up</option>
                    </select>

                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
        </div>
    );
}

export default SearchFilterPage;
