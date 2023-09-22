import React from 'react'

function CustomH3({ children, className}) {
    return (
        <h3 className={`${className} text-md text-center font-Comfortaa font-semibold text-primary`}>{children}</h3>
    )
}

export default CustomH3