import React, { useState } from 'react';
import './BookingPage.css';

function BookingPage() {
    // State for booking form inputs
    const [serviceType, setServiceType] = useState('home');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');

    // State for “service provider” acceptance
    const [bookingStatus, setBookingStatus] = useState(null);
    // Could be 'accepted', 'rejected', or null

    const handleBookingSubmit = (e) => {
        e.preventDefault();

        // In a real app, you'd call an API endpoint here
        console.log('Booking details:', { serviceType, date, time, notes });

        // Reset form fields
        setServiceType('home');
        setDate('');
        setTime('');
        setNotes('');

        // For demo: set status to null (i.e., pending acceptance)
        setBookingStatus('pending');
    };

    // Simulate service provider acceptance/rejection
    const handleAcceptBooking = () => setBookingStatus('accepted');
    const handleRejectBooking = () => setBookingStatus('rejected');

    return (
        <div className="booking-page">
            <div className="booking-card">
                <h2>Book a Cleaning Service</h2>
                <p>Choose a service type, date, and time to schedule your cleaning.</p>

                <form onSubmit={handleBookingSubmit} className="booking-form">
                    {/* Service Type */}
                    <label htmlFor="serviceType">Service Type</label>
                    <select
                        id="serviceType"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        required
                    >
                        <option value="home">Home Cleaning</option>
                        <option value="office">Office Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="move-in-out">Move In/Out</option>
                    </select>

                    {/* Date */}
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />

                    {/* Time */}
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />

                    {/* Additional Notes */}
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea
                        id="notes"
                        rows="3"
                        placeholder="Any special instructions?"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />

                    <button type="submit" className="book-button">Book Now</button>
                </form>

                {/* Service Provider Acceptance/Rejection (Demo) */}
                {bookingStatus === 'pending' && (
                    <div className="provider-actions">
                        <p className="pending-text">Booking pending. Service provider actions:</p>
                        <button onClick={handleAcceptBooking} className="accept-button">Accept</button>
                        <button onClick={handleRejectBooking} className="reject-button">Reject</button>
                    </div>
                )}
                {bookingStatus === 'accepted' && (
                    <p className="accepted-text">Your booking has been accepted!</p>
                )}
                {bookingStatus === 'rejected' && (
                    <p className="rejected-text">Your booking has been rejected.</p>
                )}
            </div>
        </div>
    );
}

export default BookingPage;
