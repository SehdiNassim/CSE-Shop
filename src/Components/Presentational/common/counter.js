import React from 'react'
import './counter.css'

const Counter = ({
    count = 0,
    setCount = f => f,
    style,
    inCartItem = false,
}) => {
    return <div className={inCartItem ? 'counter cart-item-counter' : 'counter'} style={{ ...style }}>
        <span className='counter-minus' onClick={
            e => {
                if (count > 1) {
                    setCount(count - 1)
                }
            }
        }>-</span>
        <input type="number" className='counter-input' min="1" value={count}
            onChange={e => {
                e.preventDefault()
                var value = parseInt(e.target.value)
                if (value > 0) {
                    setCount(value)
                }
            }} />
        <span className='counter-plus' onClick={
            e => setCount(count + 1)
        }>+</span>
    </div>
}

export default Counter