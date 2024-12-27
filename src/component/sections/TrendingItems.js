import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
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
    // autoplay: true,
    dots: true,
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
        980: {
            items: 3
        },
       
        1440: {
            items: 5
        }
    }
};

function TrendingItems() {
    
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
                            <h2>Trending Items</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {/* <!-- offer 01 --> */}
                    <div class="col-lg-12">
                        <div className='container'>
                            <OwlCarousel className="owl-theme" {...options}>
                                {randomItems.length > 0 ? (
                                    randomItems.map((item) => (
                                        <div key={item.id} className="item">
                                            <div className="product-item bg-light">
                                                <div className="card">

                                                    <div className="card-body">
                                                        <div className="owlCarousal-pro">
                                                            <div className="des">                                                               
                                                                <Link to="/product-details" onClick={() => addToProductIDFilter(item.id)}><img src={item.image} alt="noImage" /></Link>
                                                                <h5 className="overme">{item.title}</h5>
                                                                <div>
                                                                    {item.discount ? (
                                                                        <div>
                                                                            <h5>
                                                                                <s>{item.price}</s>{' '}
                                                                            </h5>
                                                                            <h4>
                                                                                <span>&#8377;</span>
                                                                                {Math.trunc(
                                                                                    item.price - (item.price * item.discount) / 100
                                                                                )}
                                                                            </h4>
                                                                            <div style={{ display: 'flex' }}>
                                                                                <p className="trending-discount">{item.discount}%</p>
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
                                                            <div class="cardbuttons">
                                                                <button class="atc-btn" >
                                                                <i onClick={() => addToCart(item)} className="fal bi bi-cart "></i>
                                                                    Add to cart
                                                                </button>
                                                            </div>
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
