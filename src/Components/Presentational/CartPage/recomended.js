import React from 'react';
import recproducts from '../../../data/products.json'
import Product from './../common/Product';


const Recomended = ({
        products=[...recproducts.data],
}) => {
    return <section>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 d-flex justify-content-center'>
                    <p className='title' style={{ textAlign: "center", textAlignLast: "center" }}>Recommended Products</p>
                </div>
            </div>
            <div className='row justify-content-center'>
                {products.map((product,i) => (
                    <Product
                        key={i}
                        product={product}
                    />
                ))}
            </div>
        </div>
    </section>
}

export default Recomended