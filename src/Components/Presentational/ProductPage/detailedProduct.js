import React, { useEffect, useState } from 'react';
import './detailedProduct.css'
import Button from './../common/button';
import LinkedText from './../common/linked-text';
import { withRouter } from 'react-router';
import qs from 'query-string'
import CrudActions from '../../../Store/crud/actions'
import addProduct from './../../../Store/cart/action creators/addProduct';
import { connect } from 'react-redux';
import Loader from './../common/loader';
import { Link } from 'react-router-dom';

const DetailedProduct = ({
    crud,
    match,
    location,
    getProduct = f => f,
    addToCart = f => f,
}) => {

    useEffect(() => {
        const type = qs.parse(location.search).type
        console.log(type)
        getProduct({ id: match.params.id, type: type })
    }, [location,match,getProduct])

    const { product, loading } = crud
    const colors = ["white", "#4B9DC1", "#232637"]
    const sizes = ["Small", "Medium", "Large", "X-Large"]
    const images = [product.image, "/img/image 2.png", "/img/sweat.png", "/img/image 2.png"]
    const [color, setColor] = useState(colors[0])
    const [size, setSize] = useState(sizes[0])
    const [imgIndex, setImgIndex] = useState(0)
    return <section>
        <div className="container px-0 detailed-product pt-5 mt-5">
            {loading ? <Loader /> :
                <div className="row justify-content-center p-0 m-0">
                    <div className='col-10 col-md-5 d-flex justify-content-center mb-3'>
                        <p>Products / Full SET / Aout 2020</p>
                    </div>
                    <div className='co-10 col-md-7'></div>
                    <div className="col-11 mb-3 mb-md-0 col-sm-10 col-md-5">
                        <img className='product-img' src={product.image} alt='product img' />
                        <div className='d-flex w-100 justify-content-center px-2 px-sm-0 flex-wrap mt-2 mt-sm-4'>
                            {images.map((s, i) => {
                                return <div className={`mini-imgs-container my-2 my-sm-0 mx-2 ${i === imgIndex ? 'is-selected' : ''}`} key={i}>
                                    <div style={{ border: ".5px solid white", borderRadius: '50%', padding: "12px", cursor: 'pointer' }} onClick={e => setImgIndex(i)}>
                                        <img src={s} style={{ width: "50px", height: '50px' }} alt='product' />
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-10 offset-0 col-sm-10 col-md-6 offset-md-1 d-flex flex-column">
                        <h3>{product.category}</h3>
                        <h1 className='title mb-4' style={{ textAlign: 'start', textAlignLast: 'start' }}>{product.itemName || product.bundleName}</h1>
                        <div className='d-flex flex-column mb-1'>
                            <h5 className=''>Description:</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. V
                            estibulum fermentum vel ligula rutrum placerat. Integer molestie nisi sem.</p>
                        </div>
                        <div className='d-flex flex-column mb-2'>
                            <h5 className=''>Size:</h5>
                            <div className='d-flex ml-0 ml-sm-5 flex-wrap'>
                                {
                                    sizes.map((s, i) => {
                                        return <p key={i} className={'product-size m-2' + (s === size ? ' is-selected' : '')}
                                            onClick={e => setSize(s)}>
                                            {s}</p>
                                    })
                                }
                            </div>
                        </div>
                        <div className='d-flex flex-column mb-4'>
                            <h5 className=''>Color:</h5>
                            <div className='d-flex ml-0 ml-sm-5 flex-wrap'>
                                {
                                    colors.map((clr, index) => {
                                        return <span key={index} className={'product-color m-2' + (color === clr ? ' is-selected ' : '')}
                                            onClick={e => setColor(clr)}>
                                            <div style={{ backgroundColor: clr }}></div>
                                        </span>
                                    })
                                }
                            </div>

                        </div>
                        <Button onClick={e => addToCart({ ...product, count: 1 })}>{`ADD TO CART - ${(product.price || product.items ? (product.price || product.items.reduce((a, b) => a + b.price, 0)) : 0).toFixed(2)} DA -`}</Button>
                        <div className='d-flex w-100 justify-content-center mt-3'>
                            <Link to='/products'>
                                <LinkedText style={{ fontFamily: 'GilroyExtraBold', fontSize: '1.2rem' }}>Shopping now!</LinkedText>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    </section>
}
const mapStateToProps = ({ crud }) => ({
    crud: crud
})
const mapDispatchToProps = (dispatch) => ({
    getProduct: (payload) => dispatch({
        type: CrudActions.GET_PRODUCT,
        payload: payload
    }),
    addToCart: (product) => dispatch(addProduct(product))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailedProduct))