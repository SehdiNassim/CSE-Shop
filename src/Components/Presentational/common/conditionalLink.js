import React from 'react'
import { Link } from 'react-router-dom'


const ConditionalLink = ({
    to = '',
    condition = true,
    children,
}) => {
    return condition ?
        <Link to={to}>
            {children}
        </Link>
        :
        <div>
            {children}
        </div>
}

export default ConditionalLink