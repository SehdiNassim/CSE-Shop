import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import ConditionalLink from './conditionalLink';
import styles from './product.module.css'


const Product = ({
    product,
    location
}) => {
    return (
        <div className="col-12 col-lg-4 row justify-content-center text-center">
            <Link to={`/products/${product.id}?type=product`} className={`col-12 ${styles['product-img']}`}
                condition={location.pathname !== `/products/${product.id}`}>
                <img src={product.src} alt="product" className="" />
            </Link>
            <div className="col-12">
                <ConditionalLink to={`/products/${product.id}?type=product`}
                    condition={location.pathname !== `/products/${product.id}`}>
                    <p className='hover-underline'>{product.title}</p>
                </ConditionalLink>
            </div>
            <div className="col-12">
                <p className={styles['product-price']}>{product.price}</p>
            </div>
        </div>
    )
}

export default withRouter(Product)
