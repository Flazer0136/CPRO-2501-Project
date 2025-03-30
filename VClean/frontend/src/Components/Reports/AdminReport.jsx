import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminReport() {
    const [report, setReport] = useState(null);

    useEffect(() => {
        axios.get('/api/reports/admin')
            .then(res => setReport(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!report) return <p>Loading report...</p>;

    return (
        <div className="report-card">
            <h2>Admin Report</h2>
            <p>Total Users: {report.totalUsers}</p>
            <p>Total Bookings: {report.totalBookings}</p>
            <p>Total Revenue: ${report.totalRevenue}</p>
            <h3>Feedback Summaries:</h3>
            <ul>
                {report.feedbackSummaries.map((feedback, index) => (
                    <li key={index}>{feedback}</li>
                ))}
            </ul>
        </div>
    );
}

export default AdminReport;
