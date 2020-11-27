import React from 'react'
import './cartList.css'

const CartList=({
    children
})=>{
    return  <div className='container-fluid cart-list'>
        {children}
    </div>
}

export default CartList