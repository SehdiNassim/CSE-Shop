import React from 'react';
import './cart.css'
import CartItem from './../CartPage/cartItem';
import MobileCartItem from './../Sidebar/cartItem';
import Button from './../common/button';


const Cart = ({
    cart = [],
    onDelete = f => f,
    onSetCount = f => f,
}) => {
    return <section>
        <div className="container-fluid cart-section p-0">
            <div className='row justify-content-center mt-5 mb-1 mb-sm-5 mx-0'>
                <div className='col-12 d-flex justify-content-center'>
                    <p className='title'
                        style={{
                            textAlign: "center",
                            textAlignLast: "center",
                            marginBottom:'50px'
                        }}>Shopping Bag</p>
                </div>
            </div>
            <div className='container cart-products-list px-5'>
                <div className='row pb-3 mb-2' style={{ borderBottom: '1px solid white' }}>
                    <div className='col-2'>Products</div>
                    <div className='col-2 offset-4'>Quantity</div>
                    <div className='col-2 offset-1'>Total</div>
                </div>
                {
                    cart.map((article, i) => <CartItem
                        key={i}
                        article={article}
                        onDelete={e => onDelete(i)}
                        setCount={(count) => onSetCount(i, count)}> </CartItem>)
                }
            </div>
            <div className='container-fluid cart-products-mobile-list p-0'>
                {
                    cart.map((article, i) => <MobileCartItem
                        key={i}
                        article={article}
                        onDelete={e => onDelete(i)}
                        setCount={(count) => onSetCount(i, count)}> </MobileCartItem>)
                }
            </div>
            <div className="container px-0 px-md-5">
                <div className='row justify-content-center justify-content-sm-between align-items-end mt-3'>
                    <div className='col-10 col-sm-4 p-0'>
                        <Button style={{ width: '100%' }} type='secondary'>Continue SHOPPINg</Button>
                    </div>
                    <div className='col-10 col-sm-4 d-flex flex-column align-items-center align-items-sm-end mt-5 m-0 p-0'>
                        <div className='d-flex justify-content-between mb-3' style={{ width: '80%' }}>
                            <h6 style={{fontFamily:'GilroyLight'}}>Subtotal</h6>
                            <h6 style={{fontFamily:'GilroyExtraBold'}}>{cart.reduce((previous, current) => {
                                return previous + current.price * current.count
                            }, 0).toFixed(2) + " DA"}</h6>
                        </div>
                        <p style={{fontSize:'.7rem'}}>Coupons, taxes and shipping calculated at checkout</p>
                        <Button style={{ width: '100%' }}>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Cart