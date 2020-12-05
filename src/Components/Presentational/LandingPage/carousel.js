import React, {useState} from 'react';
import Button from '../button';
import './carousel.css';

const Carousel = () => {
    const [currentImage, setImage] = useState('/img/cse-carousel.png');

    // 2-TODO: 2-Add switch image logic
    return <div className="carousel py-3">
        <div className="container">

            <div className="row d-md-flex align-items-center">

                {/*1-TODO : 1-Use the switch button component instead*/}
                <div className="col-1">
                    <img src={"/img/switch-button.png"}
                         className="switch-button d-none d-md-block"/>
                    <img src="/img/switch-arrow.png"
                         className="switch-arrow d-none d-md-block"/>
                </div>
                {/*1-*/}

                <div
                    className="col-12 col-md-10 slider-container d-flex flex-column align-items-center justify-content-center ">
                    <img src={currentImage} className="img-container"></img>
                    <div className="dots"></div>
                </div>

                {/*1-*/}
                <div className="col-1">
                    <img src="/img/switch-button.png"
                         className="switch-button d-none d-md-block"/>
                    <img src="/img/switch-arrow.png"
                         className="switch-arrow switch-arrow-right d-none d-md-block"/>
                </div>
                {/*1-*/}
            </div>

            <div className="row my-3 d-flex justify-content-center">
                <Button>ABOUT CSE</Button>
            </div>
        </div>
    </div>;
};

export default Carousel;
