import React from 'react'

const Report = ({ report = [] }) => {
    console.log(report);
    const { } = report
    return (
        <div className="report">
            <p>Total employee : {report.length}</p>
        </div>
    )
}
export default Report;
