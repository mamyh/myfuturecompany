import React from 'react';
import logo from '../../../images/images.png';
import "./Logo.css";
const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" className="logo-img" />
        </div>
    )
}
export default Logo;
