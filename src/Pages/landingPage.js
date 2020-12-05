import React, { Fragment } from 'react'
import Hero from './../Components/Presentational/LandingPage/hero';
import LatestProduct from './../Components/Presentational/LandingPage/latestProduct';
import FeaturedProduct from './../Components/Presentational/LandingPage/featuredProduct';
import Carousel from './../Components/Presentational/LandingPage/carousel';

const LandingPage = () => {
    return <Fragment>
        <Hero></Hero>
        <Carousel/>
        <LatestProduct></LatestProduct>
        <FeaturedProduct></FeaturedProduct>
    </Fragment>
}

export default LandingPage