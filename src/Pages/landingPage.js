import React from 'react'
import Page from './pageTemplate';
import Hero from './../Components/Presentational/LandingPage/hero';
import WhatIsCse from './../Components/Presentational/LandingPage/whatIsCse';
import LatestProduct from './../Components/Presentational/LandingPage/latestProduct';
import FeaturedProduct from './../Components/Presentational/LandingPage/featuredProduct';

const LandingPage = () => {
    return <Page>
        <Hero></Hero>
        <WhatIsCse></WhatIsCse>
        <LatestProduct></LatestProduct>
        <FeaturedProduct></FeaturedProduct>
    </Page>
}

export default LandingPage