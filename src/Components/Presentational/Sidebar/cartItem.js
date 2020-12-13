import React from 'react'
import './cartItem.css'
import Counter from './../common/counter';
import { withRouter } from 'react-router-dom';
import ConditionalLink from './../common/conditionalLink';


const CartItem = ({
    article,
    onDelete = f => f,
    onLinkClick = f => f,
    setCount = f => f,
    location,
    style,
}) => {
    return <div className='cart-item d-flex flex-row align-items-center' style={{ ...style }}>
        <ConditionalLink to={`/products/${article.id}?type=product`}
            condition={location.pathname !== `/products/${article.id}`}>
            <img src={article.src} alt='acticle-img' className='cart-item-img' onClick={onLinkClick} />
        </ConditionalLink>
        <div className='cart-item-content d-flex flex-column'>
            <div className='d-flex flex-row justify-content-between'>
                <div style={{ flex: 1 }}>
                    <ConditionalLink to={`/products/${article.id}?type=product`}
                        condition={location.pathname !== `/products/${article.id}`}>
                        <h6 className='cart-item-title' onClick={onLinkClick}>{article.title}</h6>
                    </ConditionalLink>
                    <p className='cart-item-category'>{article.category}</p>
                </div>
                <div className='d-flex justify-content-end' style={{ width: "40%" }}>
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

export default withRouter(CartItem)