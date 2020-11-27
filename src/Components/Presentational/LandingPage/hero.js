import React from 'react'
import Button from '../button';


const Hero=()=>{
    return <section id='hero'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-7 row'>
                    <div className='col-12'>
                    <p className='title'>Take your <br />CSE look right now</p>
                    </div>
                    <div className='col-12'>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.</p>
                    </div>
                    <div className='col-12'>
                    <a href="http://" target="_blank" rel='noreferrer'>
                        <Button>DISCOVER</Button>
                    </a>
                </div>
                </div>
                <div className='col-12 col-md-5'>
                    {/* <img src="/img/cseshop.png"/> */}
                </div>
            </div>
        </div>
    </section>
}

export default Hero