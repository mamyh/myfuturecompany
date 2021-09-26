import React from 'react'
import Card from './card/Card';
import "./Cards.css";
const Cards = ({ employees }) => {
    // console.log(employees)
    return (
        <div className="cards">
            {employees.map(employee => <Card key={Math.random() * 1000} employee={employee} />)}
        </div>
    )
}

export default Cards;