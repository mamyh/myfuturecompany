import React from 'react';
import "./Card.css";
const Card = ({ employee }) => {
    const { name, img, role, salary, country } = employee;
    return (
        <div className="card">
            <div className="employee-image">
                <img className="image" src={img} alt="Employee image" />
            </div>
            <p className="employee-name">Name: {name}</p>
            <p className="employee-role">Role : {role}</p>
            <p className="employee-country">Country: {country}</p>
            <p className="employee-salary">Salary : {salary}</p>
            <button type="button" className="add-employee"  ><i className="fas fa-user"></i> Add Employee </button>

        </div>
    )
}

export default Card;