import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './sidebar.css'


const SideBar = ({
    isOpen,
    onClose = f => f,
    match
}) => {
    console.log(match)
    return <div className={isOpen ? 'sidebar-container isOpen' : 'sidebar-container'}>
        <div>
            <div className={isOpen ? 'sidebar isOpen' : 'sidebar'}>
                <div className='container' style={{ height: '100%' }}>
                    <div className='row d-flex justify-content-around align-items-center' style={{ padding: '32px 12px', borderBottom: '.5px solid white' }}>
                        {
                            match.path !== '/cart' ?
                                <Link to='/cart'>
                                    <div className='nav-btn' onClick={e => {
                                        onClose()
                                    }}>
                                        <img src='img/shopping-bag.svg' alt='cart' />
                                    </div>
                                </Link>
                                :
                                <div className='nav-btn' onClick={e => {
                                    onClose()
                                }}>
                                    <img src='img/shopping-bag.svg' alt='cart' />
                                </div>
                        }
                        <h6 style={{ margin: '0', padding: '0', fontFamily: 'GilroyExtraBold' }}>Shopping bag</h6>
                        <div className='nav-btn'>
                            <img src='img/close.png' alt='close' onClick={e => onClose()} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default withRouter(SideBar)