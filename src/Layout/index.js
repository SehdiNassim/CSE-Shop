import React, { Fragment, useEffect } from 'react'
import {withRouter} from 'react-router'
import Header from './../Components/Container/Header';
import Footer from './../Components/Presentational/common/footer';
import SideBar from './../Components/Container/Sidebar';


const Layout=({
    children,
    location
})=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])
    return <Fragment>
        <Header></Header>
        <SideBar></SideBar>
        {children}
        <Footer></Footer>
    </Fragment>
}

export default withRouter(Layout)