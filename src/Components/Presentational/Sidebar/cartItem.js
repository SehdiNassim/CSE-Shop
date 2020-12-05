import React from 'react'
import './cartItem.css'
import Counter from './../common/counter';


const CartItem = ({
    article,
    onDelete = f => f,
    setCount = f => f,
    style
}) => {
    return <div className='cart-item d-flex flex-row align-items-center' style={{...style}}>
        <img src={article.src} alt='acticle-img' className='cart-item-img' />
        <div className='cart-item-content d-flex flex-column'>
            <div className='d-flex flex-row justify-content-between'>
                <div style={{flex: 1}}>
                    <h6 className='cart-item-title'>{article.title}</h6>
                    <p className='cart-item-category'>{article.category}</p>
                </div>
                <div className='d-flex justify-content-end' style={{width:"40%"}}>
                    <Counter inCartItem count={article.count} setCount={setCount} />
                </div>
            </div>
            <div className='d-flex flex-row justify-content-between'>
                <p className='cart-item-price'>{(article.price * article.count).toFixed(2) + " DA"}</p>
                <p className='remove-item' onClick={onDelete}>Remove item</p>
            </div>
        </div>
    </div>
}

export default CartItem