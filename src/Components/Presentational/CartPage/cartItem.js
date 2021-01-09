import React from 'react';
import Counter from './../common/counter';
import { Link } from 'react-router-dom';


const CartItem = ({
    product,
    onDelete = f => f,
    setCount = f => f,
}) => {
    return <div className='row align-items-center py-3' style={{ borderBottom: '1px solid white' }}>
        <div className='col-2'>
            <Link to={`/products/${product.id}?type=${product.itemName ? "item":"bundle"}`}>
                <img src={product.image} alt='acticle-img' style={{ width: "100%" }} />
            </Link>
        </div>
        <div className='col-4 d-flex flex-column justify-content-center'>
            <Link to={`/products/${product.id}?type=${product.itemName ? "item":"bundle"}`}>
                <h6 className='cart-item-title'>{product.itemName || product.bundleName}</h6>
            </Link>
            <p className='cart-item-category m-0'>{product.category}</p>
        </div>
        <div className='col-2 d-flex justify-content-center'>
            <Counter inCartItem count={product.count} setCount={setCount} />
        </div>
        <div className='col-2 offset-1 d-flex'>
            <p className='m-0' >{((product.price || product.items.reduce((a,b)=> a+b.price, 0)) * product.count).toFixed(2) + " DA"}</p>
        </div>
        <div className='col-1 d-flex justify-content-center'>
            <div className="icon-box" onClick={onDelete}>
                <img src='img/Vector.png' alt='acticle-img' />
            </div>
        </div>
    </div>
}

export default CartItem