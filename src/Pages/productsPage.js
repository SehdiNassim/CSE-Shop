import React, { Fragment } from 'react'
import Similar from './../Components/Presentational/ProductPage/similar'
import DetailedProduct from './../Components/Presentational/ProductPage/detailedProduct';


const ProductPage=()=>{
    return <Fragment>
        <DetailedProduct/>
        <Similar/>
    </Fragment>
}

export default ProductPage