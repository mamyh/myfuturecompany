import React from 'react'
import Card from './card/Card';
import "./Cards.css";
const Cards = ({ employees, addEmployee }) => {
    // console.log(employees)
    return (
        <div className="cards">
            {employees.map(employee => <Card addEmployee={addEmployee} key={Math.random() * 1000} employee={employee} />)}
        </div>
    )
}

export default Cards;