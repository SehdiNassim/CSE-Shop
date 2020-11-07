import React from 'react'
import Header from './../Components/Presentational/header';
import Footer from './../Components/Presentational/footer';
import Hero from './../Components/Presentational/LandingPage/hero';
import WhatIsCse from './../Components/Presentational/LandingPage/whatIsCse';
import LatestProduct from './../Components/Presentational/LandingPage/latestProduct';
import FeaturedProduct from './../Components/Presentational/LandingPage/featuredProduct';

const LandingPage=()=>{
    return <div>
        <Header></Header>
        <Hero></Hero>
        <WhatIsCse></WhatIsCse>
        <LatestProduct></LatestProduct>
        <FeaturedProduct></FeaturedProduct>
        <Footer></Footer>
    </div>
}

export default LandingPage