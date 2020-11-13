import React from 'react'
import './linked-text.css'


const LinkedText=({
    children,
    onCLick=f=>f,
})=>{
    return <p className='linked-text' onClick={e=>onCLick()}>
        {children}
    </p>
}

export default LinkedText