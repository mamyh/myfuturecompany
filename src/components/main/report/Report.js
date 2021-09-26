import React from 'react'

const Report = ({ reports = [] }) => {
    console.log(reports);
    const { } = reports
    return (
        <div className="report">
            <p>Total employee : {reports.length}</p>
        </div>
    )
}
export default Report;
