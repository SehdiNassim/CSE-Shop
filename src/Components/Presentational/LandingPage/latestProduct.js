import React, { useEffect } from 'react'
import prdcts from '../../../data/products.json'
import ProductsSection from './../common/productsSection';

const LatestProduct = ({
    products = [...prdcts.data],
    loading = false,
    getLatestProducts = f => f
}) => {

    useEffect(() => {
        getLatestProducts()
    }, [getLatestProducts])

    return <ProductsSection title='Our Latest Products' products={products} loading={loading}></ProductsSection>
}


export default LatestProduct

