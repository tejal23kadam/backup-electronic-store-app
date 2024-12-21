import React from 'react'
import '../../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 7,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
};

function IndexPageAllCategory() {
    return (
        <div>
            <section class=" section">
                {/* <!-- Container Start --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            {/* <!-- Section title --> */}
                            <div class="section-title">
                                <h2>All Categories</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, provident!</p>
                            </div>
                            <div class="row">
                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <i class="bi bi-tv icon-bg-1"></i>
                                            <h4><Link to="/appliances">Appliances</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <i class="bi bi-mic icon-bg-2"></i>
                                            <h4><Link to="/audio">Audio</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <i class="bi bi-cassette icon-bg-3"></i>
                                            <h4><Link to="/gaming">Gaming</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}


                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <i class="bi bi-laptop-fill icon-bg-5"></i>
                                            <h4><Link to="/laptop">Laptop</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}

                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <i className="bi bi-phone-vibrate icon-bg-7"></i>
                                            <h4><Link to="/mobile">Mobile</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">

                                        <div class="header">
                                            <i class="bi bi-pip icon-bg-8"></i>
                                            <h4><Link to="/tv">Tv</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}


                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>

            <section class="popular-deals section bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2>Discover Leading Brands</h2>
                                <p>Explore a curated selection of leading brands, where innovation meets quality.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {/* <!-- offer 01 --> */}
                        <div class="col-lg-12">

                            <div className='container'>
                                <OwlCarousel className='owl-theme' {...options} >

                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/sony.jpg')} alt="no img" />
                                    </div>
                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/Microsoft.jpg')} alt="no img" />
                                    </div>
                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/apple_logo-512.jpg')} alt="no img" />
                                    </div>
                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/lg.jpg')} alt="no img" />
                                    </div>
                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/samsung.jpg')} alt="no img" />
                                    </div>
                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/jbl.jpg')} alt="no img" />
                                    </div>
                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/logitech.jpg')} alt="no img" />
                                    </div>
                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/mi.jpg')} alt="no img" />
                                    </div>
                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/boat1.png')} alt="no img" />
                                    </div>
                                    <div className='item leading-brand-img'>
                                        <img class="card-img-top img-fluid" src={require('../../images/asus.jpg')} alt="no img" />
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="call-to-action">
                {/* <!-- Container Start --> */}
                <div className='bg-3 section-sm"'>
                    <div class="container ">
                        <div class="row justify-content-md-center text-center">
                            <div class="col-md-12 col-lx-8">
                                <div class="content-holder mt-5">
                                    <h2>Sustainable Electronics, Responsible Disposal</h2>
                                    <img class="e-waste-img img-fluid mb-5 mt-5" src={require('../../images/green-e-waste-logo.png')} alt="no img" />
                                    <div class="row">
                                        <div class=" col-sm-4 mb-5 ">
                                            <h3>1</h3>
                                            <h4>Collect e-Waste</h4>
                                            <h5>Gather electronic waste for eco-friendly disposal and recycling.</h5>
                                        </div>
                                        <div class=" col-sm-4 mb-5 ">
                                            <h3>2</h3>
                                            <h4>Drop Off</h4>
                                            <h5>Drop off your e-waste at designated centers for responsible recycling.</h5></div>
                                        <div class=" col-sm-4 mb-5">
                                            <h3>3</h3>
                                            <h4>Contribute to Change</h4>
                                            <h5>Join us to make a difference and shape a better future together.</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>

            <section class=" section">
                {/* <!-- Container Start --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                {/* <!-- Category list --> */}
                                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header-text">
                                            <i class="bi bi-clipboard-check-fill icon-bg-1"></i>
                                            <h4>Extended Warranty</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header-text">
                                            <i class="bi bi-box-arrow-in-right icon-bg-2"></i>
                                            <h4>Free Delivery</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header-text">
                                            <i class="bi bi-truck icon-bg-3"></i>
                                            <h4>Same day shipping</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}


                                {/* <!-- Category list --> */}
                                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header-text">
                                            <i class="bi bi-clock-history icon-bg-5"></i>
                                            <h4>Easy installment</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}



                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>




        </div>
    )
}

export default IndexPageAllCategory