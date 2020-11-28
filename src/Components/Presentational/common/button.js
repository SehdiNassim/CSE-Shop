import React from 'react'
import './button.css'


const Button = ({
    onClick = f => f,
    children,
    style,
}) => {
    return <button style={{...style}} onClick={e=>onClick()}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
</button>
}

export default Button