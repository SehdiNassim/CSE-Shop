import React from 'react'
import './cartItem.css'
import Counter from './../common/counter';


const CartItem = ({
    article,
    onDelete = f => f,
    setCount = f => f,
}) => {
    return <div className='row cart-item' style={{ margin: 0 }}>
        <div className='col-auto '>
            <img src={article.src} alt='acticle-img' className='cart-item-img' />
        </div>
        <div className='col d-flex flex-column justify-content-between'>
            <h6 className='cart-item-title'>{article.title}</h6>
            <p className='cart-item-category'>{article.category}</p>
            <p className='cart-item-price'>{article.price.toFixed(2)+" DA"}</p>
        </div>
        <div className='col-3 d-flex flex-column justify-content-between align-items-end'>
            <Counter inCartItem count={article.count} setCount={setCount}/>
            <p className='remove-item' onClick={onDelete}>Remove item</p>
        </div>
    </div>
}

export default CartItem