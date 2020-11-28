import React, { Fragment } from 'react'
import Hero from './../Components/Presentational/LandingPage/hero';
import LatestProduct from './../Components/Presentational/LandingPage/latestProduct';
import FeaturedProduct from './../Components/Presentational/LandingPage/featuredProduct';

const LandingPage = () => {
    return <Fragment>
        <Hero></Hero>
        <LatestProduct></LatestProduct>
        <FeaturedProduct></FeaturedProduct>
    </Fragment>
}

export default LandingPage