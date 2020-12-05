import React, {useEffect} from 'react';
import recproducts from '../../../data/products.json'
import ProductsSection from './../common/productsSection';


const Recomended = ({
        products=[...recproducts.data],
        loading=false,
        getRecomendedProducts=f=>f
}) => {

    useEffect(()=>{
        getRecomendedProducts()
    },[getRecomendedProducts])

    return <ProductsSection title='Recomended Products' products={products} loading={loading}></ProductsSection>
}

export default Recomended