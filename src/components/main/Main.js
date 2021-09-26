import React, { useState, useEffect } from 'react';
import Cards from './Cards/Cards';

import "./Main.css";
import Report from './report/Report';

const Main = () => {
    const [employees, setemployees] = useState([]);
    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then(res => res.json())
            .then(data => { setemployees(data) })

    }, [])
    return (
        <div className="main">
            <Cards employees={employees} />
            <Report></Report>
        </div>
    )
}

export default Main;