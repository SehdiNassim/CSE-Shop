import React from 'react'
import './linked-text.css'


const LinkedText=({
    children,
    onClick=f=>f,
    style={}
})=>{
    return <p className='linked-text' style={{...style}} onClick={e=>onClick()}>
        {children}
    </p>
}

export default LinkedText