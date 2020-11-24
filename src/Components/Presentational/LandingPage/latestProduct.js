import React, { Component } from 'react'
import Product from '../Product'
import products from '../../../data/products.json'

export class latestProduct extends Component {
    constructor(props) {
                 super(props);
                 this.state = {
                     latestProducts: [],
                 }
             }
        
             componentDidMount() {
                 this.setState({ latestProducts: products.data })
             }

    render() {
        return (
            <section id='our-latest-product'>
                <div className='container'>
                     <div className='row justify-content-center'>
                         <div className='col-12 d-flex justify-content-center'>
                             <p className='title' style={{ textAlign: "center", textAlignLast: "center" }}>Our latest product.</p>
                         </div>
                     </div>
                     <div className='row justify-content-center'>
                            {this.state.latestProducts.map(product => (
                                <Product 
                                    key={products.id}
                                    product={product}
                                />
                            ))}
                     </div>
                </div>
            </section>
        )
    }
}

export default latestProduct

