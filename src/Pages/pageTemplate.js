import React from 'react'
import Header from './../Components/Container/Header';
import Footer from './../Components/Presentational/footer';
import SideBar from './../Components/Container/Sidebar';


const Page=({
    children,
})=>{
    return <div>
        <Header></Header>
        <SideBar></SideBar>
        {children}
        <Footer></Footer>
    </div>
}

export default Page