import React, { useState, useEffect } from 'react';
import Cards from './Cards/Cards';

import "./Main.css";
import Report from './report/Report';

const Main = () => {
    const [employees, setemployees] = useState([]);
    const [reports, setReports] = useState([])
    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then(res => res.json())
            .then(data => { setemployees(data) })

    }, []);
    const addEmployee = (employee) => {
        let newReport;
        const employeeIsExists = reports.find((reportEmployee) => employee.name === reportEmployee.name);
        if (employeeIsExists) {
            newReport = [...reports];
        } else {
            newReport = [...reports, employee];
        }
        // console.log(newReport);
        setReports(newReport);
    };
    return (
        <div className="main">
            <Cards employees={employees} addEmployee={addEmployee} />
            <Report reports={reports}></Report>
        </div>
    )
}

export default Main;