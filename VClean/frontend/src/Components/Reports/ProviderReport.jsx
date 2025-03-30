import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reports.css';

function ProviderReport() {
    const [report, setReport] = useState(null);

    useEffect(() => {
        axios.get('/api/reports/provider/1') // change '1' to dynamic id later
            .then(res => setReport(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!report) return <p>Loading Provider Report...</p>;

    return (
        <div className="report-card">
            <h2>Service Provider Report</h2>
            <p><strong>Provider Name:</strong> {report.providerName}</p>
            <p><strong>Total Earnings:</strong> ${report.totalEarnings}</p>
            <p><strong>Completed Bookings:</strong> {report.totalCompletedBookings}</p>
            <h3>Customer Reviews:</h3>
            <ul>
                {report.customerReviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProviderReport;
