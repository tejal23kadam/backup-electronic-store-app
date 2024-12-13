import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
    ]
};
function Slider() {
    // return (
    //     <div className='container'>            
    //         <OwlCarousel className='owl-theme' {...options} >
    //             <div className='item'>
    //                 <img className='owlCarousalImg' src={require('../../images/img1.jpg')} alt="no img" />
    //             </div>
    //             <div className='item'>
    //                 <img className='owlCarousalImg' src={require('../../images/img2.jpg')} alt="no img" />
    //             </div>
    //         </OwlCarousel>
    //     </div>       
    // )
    return (
        <section class="hero-area bg-1 text-center overly">
            {/* <!-- Container Start --> */}
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        {/* <!-- Header Contetnt --> */}
                        <div class="content-block">
                            <h1>Buy & Sell Near You </h1>
                            <p>Join the millions who buy and sell from each other everyday in local communities around the world</p>

                        </div>
                        {/* <!-- Advance Search --> */}
                        <div class="advance-search">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12 col-md-12 align-content-center">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-xl-6 col-lg-3 col-md-6">
                                                    <input type="text" class="form-control my-2 my-lg-1" id="inputtext4"
                                                        placeholder="What are you looking for" />
                                                </div>
                                                <div class="form-group col-lg-3 col-md-6">
                                                    <select class="w-100 form-control mt-lg-1 mt-md-2">
                                                        <option class="option selected"> Choose Category</option>
                                                        <option value="1">Top rated</option>
                                                        <option value="2">Lowest Price</option>
                                                        <option value="4">Highest Price</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-xl-2 col-lg-3 col-md-6 align-self-center">
                                                    <button type="submit" class="btn btn-primary active w-100">Search Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Container End --> */}
        </section>



    )
}

export default Slider