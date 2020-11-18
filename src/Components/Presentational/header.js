import React from 'react'
import './header.css'


const Header = () => {
    return <header>
        <nav className='d-flex flex-row justify-content-between align-items-center'>
            <img className='cse-img' src='img/cse-footer.png' alt='cse-logo'/>
            <div className='nav-btn'>
                <div className='burger'></div>
            </div>
            <div className='d-flex'>
                <div className='nav-btn'>
                    <img src='img/category.svg' alt='category'/>
                </div>
                <div className='nav-btn'>
                    <img src='img/shopping-bag.svg' alt='cart'/>
                </div>
            </div>
        </nav>
    </header>
}

export default Header