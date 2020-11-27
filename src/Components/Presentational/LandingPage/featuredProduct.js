import React, { useState } from 'react'
import Button from './../button';
import LinkedText from './../linked-text';
import Counter from './../counter';


const FeaturedProduct = () => {

    const [count, setCount] = useState(1);

    return <section id='our-featured-product'>
        <div className='container'>
            <div className='row justify-content-center mb-4'>
                <p className='col-auto title'> Our featured product.</p>
            </div>
            <div className='row justify-content-center'>
                <div className='col-10 col-lg-6 d-flex justify-content-center'>
                    <img src='img/image 2.png' alt='featured-product' style={{ maxHeight: '100%', maxWidth: '100%' }} />
                </div>
                <div className='col-10 col-lg-6 d-flex flex-column justify-content-start'>
                    <p style={{ margin: '0' }}>CSE Look</p>
                    <p className='title' style={{ margin: '0', textAlignLast: 'start' }}>FULL SET</p>
                    <p style={{ fontSize: '1.5rem', margin: '0' }}>{(5800 * count).toFixed(2)} DA</p>
                    <Counter count={count} setCount={setCount} style={{margin:'32px 0'}}/>
                    <Button>ADD TO CART</Button>
                    <div style={{ marginTop: '32px' }}>
                        <LinkedText>View product details</LinkedText>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default FeaturedProduct