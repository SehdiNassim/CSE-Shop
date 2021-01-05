import React, { Fragment } from 'react'
import Header from './../Components/Container/Header';
import Footer from './../Components/Presentational/common/footer';
import SideBar from './../Components/Container/Sidebar';


const Layout=({
    children,
})=>{
    return <Fragment>
        <Header></Header>
        <SideBar></SideBar>
        {children}
        <Footer></Footer>
    </Fragment>
}

export default Layout