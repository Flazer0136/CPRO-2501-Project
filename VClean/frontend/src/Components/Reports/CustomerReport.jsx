import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reports.css';

function CustomerReport() {
    const [report, setReport] = useState(null);

    useEffect(() => {
        axios.get('/api/reports/customer/1') // change '1' to dynamic id later
            .then(res => setReport(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!report) return <p>Loading Customer Report...</p>;

    return (
        <div className="report-card">
            <h2>Customer Report</h2>
            <p><strong>Customer Name:</strong> {report.customerName}</p>
            <h3>Booking History:</h3>
            <ul>
                {report.bookingHistory.map((booking, index) => (
                    <li key={index}>{booking}</li>
                ))}
            </ul>
            <h3>Feedback Given:</h3>
            <ul>
                {report.feedbackGiven.map((feedback, index) => (
                    <li key={index}>{feedback}</li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerReport;
