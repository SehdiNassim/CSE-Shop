import React from 'react'
import { Link } from 'react-router-dom'


const ConditionalLink = ({
    to = '',
    condition = true,
    children,
    style,
    className,
}) => {
    return condition ?
        <Link className={className} style={{...style}} to={to}>
            {children}
        </Link>
        :
        <>
            {children}
        </>
}

export default ConditionalLink