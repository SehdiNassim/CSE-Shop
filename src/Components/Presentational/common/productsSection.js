import React from 'react';
import recproducts from '../../../data/products.json'
import Product from './Product';


const ProductsSection = ({
    products = [...recproducts.data],
    loading = false,
    title = '',
}) => {
    return <section>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 d-flex justify-content-center'>
                    <p className='title' style={{ textAlign: "center", textAlignLast: "center" }}>{title}</p>
                </div>
            </div>
            {
                !loading && (<div className='row justify-content-center'>
                    {products.map((product, i) => (
                        <Product
                            key={i}
                            product={product}
                        />
                    ))}
                </div>)
            }
        </div>
    </section>
}

export default ProductsSection