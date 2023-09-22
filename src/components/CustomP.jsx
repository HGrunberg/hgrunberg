import React from 'react'

function CustomP({ children, className, alignment, weight }) {
    return (
        <p className={`${alignment ? alignment : 'text-center'} ${weight ? weight : 'text-regular'} ${className} text-base font-Comfortaa`}>{children}</p>
    )
}

export default CustomP