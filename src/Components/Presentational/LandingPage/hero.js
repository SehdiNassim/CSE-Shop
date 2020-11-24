import React from 'react'
import Button from '../button';
import './hero.css'

const Hero=()=>{
    return <section id='hero'>
        <div className='container'>
            <div className='row align-items-center justify-content-around mt-4'>
                <div className='col-12 col-sm-7 justify-content-start align-items-center t-start'>
                    <p className="t-start">Take your <br />CSE look right now</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.</p>
                    <a href="http://" target="_blank" rel='noreferrer'>
                        <Button>DISCOVER</Button>
                    </a>
                </div>
                <div className='col-12 col-sm-5 align-self-center'>
                    <img class="img-fluid img-responsive" src="/img/cseshop.png" alt="cse shop"/>
                </div>
            </div>
        </div>
    </section>
}

export default Hero