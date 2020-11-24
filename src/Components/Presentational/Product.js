import React, { Component } from 'react'

export class Product extends Component {

    render() {
        return (
            <div className="col-12 col-lg-4 row justify-content-center text-center">
                <div className="col-12">
                    <img src={this.props.product.src} alt="product"/>
                </div>
                <div className="col-12">
                    <p>{this.props.product.title}</p>
                </div>
            </div>
        )
    }
}

export default Product
