import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import './header.css'
import ConditionalLink from './conditionalLink';
import updateHeaderBg from './../../../helpers/headerBg';


const Header = ({
    onShopClick = f => f,
    location,
    cartLength
}) => {
    useEffect(() => {
       updateHeaderBg()
    }, [])
    return <header>
        <div className='header-bg'></div>
        <nav className='d-flex flex-row justify-content-between align-items-center'>
            <img className='cse-logo' src='img/cse-footer.png' alt='cse-logo' />
            <img className='cse-logo-mobile' src='img/Logo without signature.png' alt='cse-logo' />
            <div className='nav-btn'>
                <div className='burger'></div>
            </div>
            <div className='d-flex'>
                <ConditionalLink to='/products' condition={location.pathname !== '/products'}>
                    <div className='nav-btn category-logo'>
                        <img src='img/category.svg' alt='category' />
                    </div>
                </ConditionalLink>
                <div className='nav-btn' onClick={e => {
                    onShopClick()
                }}>
                    <img src='img/shopping-bag.svg' alt='cart' />
                    <span className='cart-length' style={{ display: cartLength ? '' : 'none' }}>{cartLength}</span>
                </div>
            </div>
        </nav>
    </header>
}

export default withRouter(Header)