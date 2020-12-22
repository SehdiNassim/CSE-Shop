import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import styles from './product.module.css'


const Product = ({
    product,
}) => {
    return (
        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center text-center">
            <Link to={`/products/${product.id}?type=product`} className={`${styles['product-img']}`}>
                <img src={product.src} alt="product"/>
            </Link>
                <Link to={`/products/${product.id}?type=product`}>
                    <p className={styles['product-title']}>{product.title}</p>
                </Link>
                <p className={styles['product-price']}>{product.price}</p>
        </div>
    )
}

export default withRouter(Product)
