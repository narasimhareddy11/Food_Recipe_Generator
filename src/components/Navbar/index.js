import React from 'react';
import './index.css'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h3 className="brand-title">
                    Fav<span className='brand-highlight'>ReciGen</span>
                </h3>
            </div>
            <ul className="nav-links">
                <li className="nav-link"><a href="#home">Home</a></li>
                <li className="nav-link"><a href="#about">About me</a></li>
                <li className="nav-link"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
