import React from 'react'
import './header.css'


const Header = ({
    onShopClick = f => f,
}) => {
    return <header>
        <div className='header-bg'></div>
        <nav className='d-flex flex-row justify-content-between align-items-center'>
            <img className='cse-logo' src='img/cse-footer.png' alt='cse-logo' />
            <img className='cse-logo-mobile' src='img/Logo without signature.png' alt='cse-logo' />
            <div className='nav-btn'>
                <div className='burger'></div>
            </div>
            <div className='d-flex'>
                <div className='nav-btn category-logo'>
                    <img src='img/category.svg' alt='category' />
                </div>
                <div className='nav-btn' onClick={e => {
                    onShopClick()
                }}>
                    <img src='img/shopping-bag.svg' alt='cart' />
                </div>
            </div>
        </nav>
    </header>
}

export default Header