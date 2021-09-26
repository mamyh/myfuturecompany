import React from 'react'
import Logo from './logo/Logo';
import Content from './content/Content';
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <Logo></Logo>
            <Content></Content>
        </div>
    )
}

export default Header;