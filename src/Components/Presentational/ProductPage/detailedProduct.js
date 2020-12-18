import React, { useEffect, useState } from 'react';
import './detailedProduct.css'
import Button from './../common/button';
import LinkedText from './../common/linked-text';
import { withRouter } from 'react-router';
import qs from 'query-string'

const DetailedProduct = ({
    product,
    match,
    location,
    loading = false,
    getProduct = f => f,
    addToCart = f => f,
}) => {

    useEffect(()=>{
        window.scrollTo(0,0)
        console.log(qs.parse(location.search))
        console.log(location)
    },[location])
    const colors = ["white", "#4B9DC1", "#232637"]
    const sizes = ["Small", "Medium", "Large", "X-Large"]
    const images = ["/img/sweat.png", "/img/image 2.png", "/img/sweat.png", "/img/image 2.png"]
    const [color, setColor] = useState(colors[0])
    const [size, setSize] = useState(sizes[0])
    const [imgIndex, setImgIndex] = useState(0)
    return <section>
        <div className="container px-0 detailed-product pt-5 mt-5">
            {!loading &&
                <div className="row justify-content-center p-0 m-0">
                    <div className='col-10 col-md-5 d-flex justify-content-center mb-3'>
                        <p>Products / Full SET / Aout 2020</p>
                    </div>
                    <div className='co-10 col-md-7'></div>
                    <div className="col-11 mb-3 mb-md-0 col-sm-10 col-md-5">
                        <img className='product-img' src={images[imgIndex]} alt='product img' />
                        <div className='d-flex w-100 justify-content-center px-2 px-sm-0 flex-wrap mt-2 mt-sm-4'>
                            {images.map((s,i) => {
                                return <div className={`mini-imgs-container my-2 my-sm-0 mx-2 ${i === imgIndex ? 'is-selected' : ''}`}>
                                    <div style={{border:".5px solid white",borderRadius:'50%',padding:"12px",cursor:'pointer'}} onClick={e=>setImgIndex(i)}>
                                        <img src={s} style={{ width: "50px", height: '50px'}} alt='product'/>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-10 offset-0 col-sm-10 col-md-6 offset-md-1 d-flex flex-column">
                        <h3>FULL SET</h3>
                        <h1 className='title mb-4' style={{ textAlign: 'start', textAlignLast: 'start' }}>CSE LOOK</h1>
                        <div className='d-flex flex-column mb-1'>
                            <h5 className=''>Description:</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. V
                            estibulum fermentum vel ligula rutrum placerat. Integer molestie nisi sem.</p>
                        </div>
                        <div className='d-flex flex-column mb-2'>
                            <h5 className=''>Size:</h5>
                            <div className='d-flex ml-0 ml-sm-5 flex-wrap'>
                                {
                                    sizes.map(s => {
                                        return <p className={'product-size m-2' + (s === size ? ' is-selected' : '')}
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
                                        return <span className={'product-color m-2' + (color === clr ? ' is-selected ' : '')}
                                            onClick={e => setColor(clr)}>
                                            <div style={{ backgroundColor: clr }}></div>
                                        </span>
                                    })
                                }
                            </div>

                        </div>
                        <Button>ADD TO CART - 5000,00 DA -</Button>
                        <div className='d-flex w-100 justify-content-center mt-3'>
                            <LinkedText style={{ fontFamily: 'GilroyExtraBold', fontSize: '1.2rem' }}>Shopping now!</LinkedText>
                        </div>
                    </div>
                </div>
            }
        </div>
    </section>
}

export default withRouter(DetailedProduct)