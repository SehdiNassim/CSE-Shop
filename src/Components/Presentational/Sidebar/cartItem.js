import React from 'react'
import './cartItem.css'
import Counter from './../common/counter';
import { withRouter } from 'react-router-dom';
import ConditionalLink from './../common/conditionalLink';


const CartItem = ({
    product,
    onDelete = f => f,
    onLinkClick = f => f,
    setCount = f => f,
    location,
    style,
}) => {
    return <div className='cart-item d-flex flex-row align-items-center' style={{ ...style }}>
        <ConditionalLink to={`/products/${product.id}?type=${product.itemName ? "item":"bundle"}`}
            condition={location.pathname !== `/products/${product.id}`}>
            <img src={product.image} alt='product-img' className='cart-item-img' onClick={onLinkClick} />
        </ConditionalLink>
        <div className='cart-item-content d-flex flex-column'>
            <div className='d-flex flex-row justify-content-between'>
                <div style={{ flex: 1 }}>
                    <ConditionalLink to={`/products/${product.id}?type=${product.itemName ? "item":"bundle"}`}
                        condition={location.pathname !== `/products/${product.id}`}>
                        <h6 className='cart-item-title' onClick={onLinkClick}>{product.itemName || product.bundleName}</h6>
                    </ConditionalLink>
                    <p className='cart-item-category'>{product.category}</p>
                </div>
                <div className='d-flex justify-content-end' style={{ width: "40%" }}>
                    <Counter inCartItem count={product.count} setCount={setCount} />
                </div>
            </div>
            <div className='d-flex flex-row justify-content-between'>
                <p className='cart-item-price'>{(product.price * product.count).toFixed(2) + " DA"}</p>
                <p className='remove-item' onClick={onDelete}>Remove item</p>
            </div>
        </div>
    </div>
}

export default withRouter(CartItem)