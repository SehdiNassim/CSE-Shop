import React from 'react'
import './button.css'


const Button = ({
    onClick = f => f,
    children,
}) => {
    return <button onClick={e=>onClick()}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
</button>
}

export default Button