import React from 'react'
import './button.css'


const Button = ({
    onClick = f => f,
    children,
    style,
    type = 'primary'
}) => {
    type= ['primary', 'secondary'].includes(type) ? type : 'primary'
    return <button className={type+'-button'} style={{ ...style }} onClick={e => onClick()}>
        {
            type === 'primary' && (<>
                <span></span>
                <span></span>
                <span></span>
                <span></span></>)
        }
        {children}
    </button>
}

export default Button