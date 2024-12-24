import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToProductIDFilter } from '../sliceComponent/ProductIdSlice';
import { addToCart } from '../sliceComponent/CartSlice';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 5,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        767: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
};

function TrendingItems() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.allData.data.products);
    const [randomItems, setRandomItems] = useState([]);

    useEffect(() => {
        if (data) {
            // Generate 7 random items from the data
            let selectedItems = [];
            for (let i = 0; i < 7; i++) {
                let randomIndex = Math.floor(Math.random() * data.length);
                selectedItems.push(data[randomIndex]);
            }
            setRandomItems(selectedItems); // Update the state with random items
        }
    }, [data]); // Trigger effect when data changes
    console.log("random items ++ ", randomItems);
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

                        {/* <div className='container'> */}
                        {/* <OwlCarousel className='owl-theme' {...options} >
                                {(randomItems) ?
                                    (
                                        (randomItems.map((data) => (
                                            <div className='item'>
                                                <div class="product-item bg-light">
                                                    <div class="card">
                                                        <Link to="/product-details"><img src={data.image} onClick={() => { dispatch(addToProductIDFilter(data.id)) }} alt="noImage" /></Link>
                                                        <div class="card-body">

                                                            <div class="des" >
                                                                <div className="pro" key={data.id} >
                                                                    <div class="des" >
                                                                         <Link to="/product-details"><img src={data.image} onClick={() => { dispatch(addToProductIDFilter(data.id)) }} alt="noImage" /></Link> 
                                                                        <h5 className="overme">{data.title} </h5>
                                                                        <div>
                                                                            {
                                                                                (data.discount) ? (
                                                                                    <div style={{ display: "flex" }}>
                                                                                        <h5><s>{data.price}</s> </h5>
                                                                                        <h4><span>&#8377;</span>{Math.trunc(data.price - ((data.price * data.discount) / 100))}</h4>
                                                                                        <div style={{ display: "flex", paddingTop: "6px" }}>
                                                                                            <p class="discount">{data.discount}%</p>
                                                                                            <p>off</p>
                                                                                        </div>
                                                                                    </div>
                                                                                ) :
                                                                                    (
                                                                                        <h4><span>&#8377;</span>{data.price}</h4>
                                                                                    )
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <i onClick={() => { dispatch(addToCart(data)) }} className="fal bi bi-cart cart" ></i>
                                                                </div>
                                                            </div>
                                                            <i className="fal bi bi-cart cart" ></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )))
                                    ) :
                                    (<h1>data is missing</h1>)
                                }
                            </OwlCarousel> */}
                        {/* </div> */}


                        <div className='container'>
                            <OwlCarousel className="owl-theme" {...options}>
                                {randomItems.length > 0 ? (
                                    randomItems.map((item) => (
                                        <div key={item.id} className="item">
                                            <div className="product-item bg-light">
                                                <div className="card">
                                                    <Link
                                                        to="/product-details"
                                                        onClick={() => addToProductIDFilter(item.id)}
                                                    >
                                                        <img src={item.image} alt={item.title || 'Product Image'} />
                                                    </Link>
                                                    <div className="card-body">
                                                        <div className="pro">
                                                            <div className="des">
                                                                <h5 className="overme">{item.title}</h5>
                                                                <div>
                                                                    {item.discount ? (
                                                                        <div style={{ display: 'flex' }}>
                                                                            <h5>
                                                                                <s>{item.price}</s>{' '}
                                                                            </h5>
                                                                            <h4>
                                                                                <span>&#8377;</span>
                                                                                {Math.trunc(
                                                                                    item.price - (item.price * item.discount) / 100
                                                                                )}
                                                                            </h4>
                                                                            <div style={{ display: 'flex', paddingTop: '6px' }}>
                                                                                <p className="discount">{item.discount}%</p>
                                                                                <p>off</p>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <h4>
                                                                            <span>&#8377;</span>
                                                                            {item.price}
                                                                        </h4>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <i
                                                                onClick={() => addToCart(item)}
                                                                className="fal bi bi-cart cart"
                                                            ></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <h3>No trending items available</h3>
                                )}
                            </OwlCarousel>   

                    </div>
                </div>
            </div>
        </div>
        </section >

    )
}

export default TrendingItems
