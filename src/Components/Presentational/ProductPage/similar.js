import React, {useEffect} from 'react';
import prdcts from '../../../data/products.json'
import ProductsSection from './../common/productsSection';
import { withRouter } from 'react-router';


const Similar = ({
        products=[...prdcts.data],
        loading=false,
        getSimilarProducts=f=>f,
        match,
}) => {

    useEffect(()=>{
        getSimilarProducts(match.params.id)
    },[getSimilarProducts,match])

    return <ProductsSection title='Similar Products' products={products} loading={loading}></ProductsSection>
}

export default withRouter(Similar)