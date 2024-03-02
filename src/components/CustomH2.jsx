import React from 'react'

function CustomH2({ children, className }) {
    return (
        <h2 className={`text-2xl text-center font-Comfortaa font-semibold ${className} `}>{children}</h2>
    )
}

export default CustomH2