import React from 'react';
import './Report.css';

const Report = ({ reports = [] }) => {
    // console.log(reports);
    let names = reports.map((report) => report.name);
    let salaries = reports.reduce((salary, report) => salary + report.salary, 0);

    return (
        // this is from report 
        <div>
            <div className="report">
                <p><i className="fas fa-user"></i>  Total employee : {reports.length}</p>
                <h1 style={{ fontSize: '10px', fontWeight: "700" }}>Employee Names :{names.length ? names.join(' ') : 'No one '}</h1>
                <p>total salary of Employees: ${salaries ? salaries : 0}</p>
            </div>

        </div>
    )
}
export default Report;
