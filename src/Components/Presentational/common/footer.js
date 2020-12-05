import React from 'react'
import './footer.css'


const Footer = () => {
    return <footer>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-sm-12">
                    <div className="row mt-5 mb-3">
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-lg-4">
                                    <h3 className="title">
                                        Follow Us.
                                </h3>
                                    <div className="input-group my-5" id="email">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default"><img src="/img/communications.svg" alt='.'/></span>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Default" style={{ borderStyle: 'hidden' }}
                                            aria-describedby="inputGroup-sizing-default" placeholder="Enter your email address" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="point-to"><img className="bounceRight" src="/img/point-to.svg" alt='.'/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 justify-content-md-center">
                        <div className="col-lg-10">
                            <div className="social-btns col-sm">
                                <div className="row">
                                    <div className="col"><a className="btn" href="https://www.facebook.com/club.scientifique.esi/"
                                        target="_blank" rel='noreferrer'><i className="fab fa-facebook-f"></i></a></div>
                                    <div className="col"><a className="btn"
                                        href="https://www.youtube.com/channel/UCHgeF6ELJW0Pt1vYoAomCig"
                                        target="_blank" rel='noreferrer'><i className="fab fa-youtube"></i></a></div>
                                    <div className="col"><a className="btn" href="https://twitter.com/CSESI_Club" target="_blank" rel='noreferrer'><i
                                        className="fab fa-twitter"></i></a></div>
                                    <div className="col"><a className="btn" href="https://www.instagram.com/cse.club/"
                                        target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a></div>
                                    <div className="col"><a className="btn" href="https://www.linkedin.com/company/cse-club/"
                                        target="_blank" rel='noreferrer'><i className="fab fa-linkedin-in"></i></a></div>
                                    <div className="col"><a className="btn" href="https://medium.com/@cse_18061" target="_blank" rel='noreferrer'><i
                                        className="fab fa-medium-m"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-12">
                            <p className="footer_made">Made with ❤️ by <img src="/img/cse-footer.png" alt='.'></img></p>
                        </div>
                    </div>
                    <div className="row p-2 p-md-0 mb-4 links text-left">
                        <div className="col-6 col-lg-4 mt-3">
                            <h3 className="bold">About CSE</h3>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>About</p>
                            </a>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>Projects</p>
                            </a>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>Shop</p>
                            </a>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>Vision</p>
                            </a>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>Contact Us</p>
                            </a>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>Media Coverage</p>
                            </a>
                        </div>
                        <div className="col-6 col-lg-4 mt-3">
                            <h3 className="bold">CSE Events</h3>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>HackIT</p>
                            </a>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>Leapfrog Hack</p>
                            </a>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>CasbahTech hackathon</p>
                            </a>
                            <a href="http://" target="_blank" rel='noreferrer'>
                                <p>DesignFest</p>
                            </a>
                        </div>
                        <div className="col-6 col-lg-4 mt-3">
                            <div className="row" >
                                <div className="col-lg-8">
                                    <h3 className="bold">Resources</h3>
                                    <a href="http://" target="_blank" rel='noreferrer'>
                                        <p>FAQ</p>
                                    </a>
                                    <a href="http://" target="_blank" rel='noreferrer'>
                                        <p>Code of Conduct</p>
                                    </a>
                                </div>
                                <div className="col-lg-8">
                                    <h3 className="bold">Partner</h3>
                                    <a href="http://" target="_blank" rel='noreferrer'>
                                        <p>Become a partner</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="copyright">Copyright © {new Date().getFullYear()} Club Scientifique de l'ESI. All
                            Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer