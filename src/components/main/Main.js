import React, { useState, useEffect } from 'react';
import Cards from './Cards/Cards';

import "./Main.css";
import Report from './report/Report';

const Main = () => {
    const [employees, setemployees] = useState([]);
    const [report, setReport] = useState([])
    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then(res => res.json())
            .then(data => { setemployees(data) })

    }, []);
    const addEmployee = (employee) => {
        const newReport = [...report, employee];
        setReport(newReport);
    };
    return (
        <div className="main">
            <Cards employees={employees} add={addEmployee} />
            <Report report={report}></Report>
        </div>
    )
}

export default Main;