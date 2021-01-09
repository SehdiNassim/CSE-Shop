import React from 'react'
import { withRouter } from 'react-router'
import ConditionalLink from '../common/conditionalLink'
import './sidebar.css'
import CartItem from './cartItem';
import Button from '../common/button';
import LinkedText from '../common/linked-text';


const SideBar = ({
    isOpen,
    onClose = f => f,
    location,
    cart = [],
    onDelete = f => f,
    onSetCount = f => f,
}) => {
    return <div className={isOpen ? 'sidebar-container isOpen' : 'sidebar-container'}>
        <div>
            <div className={isOpen ? 'sidebar isOpen' : 'sidebar'}>
                <div className='container-fluid sidebar-content'>
                    <div className='row d-flex justify-content-around align-items-center' style={{ padding: '32px 12px', borderBottom: '.5px solid white' }}>
                        <ConditionalLink to='/cart' condition={location.pathname !== '/cart'}>
                            <div className='nav-btn' onClick={e => {
                                onClose()
                            }}>
                                <img src='/img/shopping-bag.svg' alt='cart' />
                                <span className='cart-length' style={{ display: cart.length ? '' : 'none' }}>{cart.length}</span>
                            </div>
                        </ConditionalLink>
                        <h6>Shopping bag</h6>
                        <div className='nav-btn'>
                            <img src='/img/close.png' alt='close' onClick={e => onClose()} />
                        </div>
                    </div>
                    <div className='cart-list' style={{ flex: "1" }}>
                        {
                            cart.map((product, i) => <CartItem key={i} product={product} onDelete={e => onDelete(i)}
                                setCount={(count) => onSetCount(i, count)} onLinkClick={e => onClose()}> </CartItem>)
                        }
                    </div>
                    <div className='row p-3 justify-content-center' style={{ borderTop: '1px solid white' }}>
                        <div className='col-10 d-flex justify-content-between mt-1 mb-2'>
                            <h6>Subtotal</h6>
                            <h6>{cart.reduce((previous, current) => {
                                return previous + (current.price || current.items.reduce((a, b) => a + b.price, 0)) * current.count
                            }, 0).toFixed(2) + " DA"}</h6>
                        </div>
                        <div className='col-10 col-sm-auto mt-3 mb-1'>
                            <p style={{ fontSize: '.7rem', textAlign: 'center', textAlignLast: "center" }}>Coupons, taxes and shipping calculated at checkout</p>
                        </div>
                        <div className='w-100'></div>
                        <div className='col-10'>
                            <Button style={{ width: '100%' }}>CHECKOUT</Button>
                        </div>
                        <div className='col-auto mt-3' onClick={e=> onClose()}>
                            <ConditionalLink to='/products' condition={location.pathname !== '/products'}>
                                <LinkedText>CONTINUE SHOPPING</LinkedText>
                            </ConditionalLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default withRouter(SideBar)