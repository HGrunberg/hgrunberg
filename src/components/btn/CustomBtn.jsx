import React from 'react'
import './CustomBtn.css'

function CustomBtn({ children, className, customOnClick }) {
    return (
        <button className={` cursor-pointer font-Comfortaa w-max border-primary border-2 px-4 py-2 rounded-2xl shadow-sm hover:bg-primary transition-all duration-250 ${className}`} onClick={customOnClick}>
            {children}
        </button>
    )
}

export default CustomBtn