import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import styles from './product.module.css'


const Product = ({
    product,
}) => {
    return (
        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center text-center">
            <Link to={`/products/${product.id}?type=${product.itemName ? "item":"bundle"}`} className={`${styles['product-img']}`}>
                <img src={product.image} alt="product"/>
            </Link>
                <Link to={`/products/${product.id}?type=product`}>
                    <p className={styles['product-title']}>{product.itemName || product.bundleName}</p>
                </Link>
                <p className={styles['product-price']}>{(product.price || product.items.reduce((a,b)=> a+b.price, 0)).toFixed(2)+"DA"}</p>
        </div>
    )
}

export default withRouter(Product)
