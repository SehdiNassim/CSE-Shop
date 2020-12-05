import React from 'react'
import './linked-text.css'


const LinkedText=({
    children,
    onCLick=f=>f,
    style={}
})=>{
    return <p className='linked-text' style={{...style}} onClick={e=>onCLick()}>
        {children}
    </p>
}

export default LinkedText