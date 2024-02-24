import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'


function CustomNavLink({ customLinkTo, name, customOnClick }) {
    return (
        <li className='nav-item'>
            <NavLink style={({ isActive }) => {
                return {
                    borderBottom: isActive ? "8px solid #d3bb7b" : undefined,
                };
            }} to={customLinkTo} target={name === "Planio" ? '_blank' : name === "Cookiecare.io" ? "_blank" : undefined} className='nav-links' onClick={customOnClick}>
                {name}
            </NavLink>
        </li>
    )
}

export default CustomNavLink