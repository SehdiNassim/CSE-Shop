import React from 'react'
import Hero from './../Components/Presentational/LandingPage/hero';
import LatestProduct from './../Components/Presentational/LandingPage/latestProduct';
import FeaturedProduct from './../Components/Presentational/LandingPage/featuredProduct';

const LandingPage = () => {
    return <div>
        <Hero></Hero>
        <LatestProduct></LatestProduct>
        <FeaturedProduct></FeaturedProduct>
    </div>
}

export default LandingPage