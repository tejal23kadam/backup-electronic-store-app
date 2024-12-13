import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
};

function TrendingItems() {
    return (
        <section class="popular-deals section bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title">
                            <h2>Trending Adds</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magnam.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {/* <!-- offer 01 --> */}
                    <div class="col-lg-12">

                        <div className='container'>
                            <OwlCarousel className='owl-theme' {...options} >
                                <div className='item'>
                                    <div class="product-item bg-light">
                                        <div class="card">
                                            <div class="thumb-content">
                                                {/* <!-- <div class="price">$200</div> --> */}
                                                <a href="single.html">
                                                    <img class="card-img-top img-fluid" src={'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg'} alt="no img" />
                                                </a>
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title"><a href="single.html">11inch Macbook Air</a></h4>
                                                <ul class="list-inline product-meta">
                                                    <li class="list-inline-item">
                                                        <a href="single.html"><i class="fa fa-folder-open-o"></i>Electronics</a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="category.html"><i class="fa fa-calendar"></i>26th December</a>
                                                    </li>
                                                </ul>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
                                                <div class="product-ratings">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div class="product-item bg-light">
                                        <div class="card">
                                            <div class="thumb-content">
                                                {/* <!-- <div class="price">$200</div> --> */}
                                                <a href="single.html">
                                                    <img class="card-img-top img-fluid" src={'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692944486283-8193DNNjZFS._SL1500_.jpg'} alt="no img" />
                                                </a>
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title"><a href="single.html">card1</a></h4>
                                                <ul class="list-inline product-meta">
                                                    <li class="list-inline-item">
                                                        <a href="single.html"><i class="fa fa-folder-open-o"></i>Furnitures</a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="category.html"><i class="fa fa-calendar"></i>26th December</a>
                                                    </li>
                                                </ul>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
                                                <div class="product-ratings">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='item'>
                                    <div class="product-item bg-light">
                                        <div class="card">
                                            <div class="thumb-content">
                                                {/* <!-- <div class="price">$200</div> --> */}
                                                <a href="single.html">
                                                    <img class="card-img-top img-fluid" src={'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691073671025-galaxy%20S21%20FE.jpg'} alt="no img" />
                                                </a>
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title"><a href="single.html">card data </a></h4>
                                                <ul class="list-inline product-meta">
                                                    <li class="list-inline-item">
                                                        <a href="single.html"><i class="fa fa-folder-open-o"></i>Furnitures</a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="category.html"><i class="fa fa-calendar"></i>26th December</a>
                                                    </li>
                                                </ul>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p>
                                                <div class="product-ratings">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TrendingItems
