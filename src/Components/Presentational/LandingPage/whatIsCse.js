import React from 'react'
import './whatIsCse.css'
import Button from '../button';

const WhatIsCse = () => {
    return <section id='what-is-cse' className='what-is-cse'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 d-flex justify-content-center'>
                    <p style={{ marginBottom: '-8px' }}>Welcome to CSE SHOP</p>
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <p className='title' style={{ textAlign: "center", textAlignLast: "center" }}>What is CSE ?</p>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <img src='/img/CSE.png' />
                </div>
                <div className='w-100'></div>
                <div className='col-10 col-md-8 mt-4 mb-4'>
                    <p style={{ textAlign: "justify", textAlignLast: 'center' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <a href="http://" target="_blank" rel='noreferrer'>
                        <Button>SEE MORE</Button>
                    </a>
                </div>
            </div>
        </div>
    </section>
}

export default WhatIsCse