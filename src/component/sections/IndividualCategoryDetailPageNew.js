import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../paginationComponent/Pagination';
import SingleProductDetailPage from '../singleProductDetailComponent/SingleProductDetailPage';
import { addToCart } from '../sliceComponent/CartSlice';
import NavBar from './NavBar'

function IndividualCategoryDetailPageNew(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [currentProductId, setCurrentProductId] = useState(1);
    const postsPerPage = 8;

    const data = useSelector((state) => state.allData.data.products);
    let filterBrands = props.brandFilter;
    let filteredData;

    let filterDiscount = props.discountFilter
    const loading = useSelector((state) => state.allData.loading);
    const error = useSelector((state) => state.allData.error);

    const dispatch = useDispatch();

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (id) => {
        setOpen(true);
        setCurrentProductId(id);
    };

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.length === 0) return <h1>No data available</h1>;

    if (props.category === '' || props.category === 'all') {
        filteredData = data;
    }
    else {
        filteredData = data.filter(data => data.category === props.category);
    }
    debugger
    console.log("filterb " + filterBrands);
    if (filterBrands) {
        filteredData = filteredData.filter((data) => data.brand.toLowerCase().includes(filterBrands));
        console.log("filter brand data" + JSON.stringify(filteredData));
    }

    if (filterDiscount) {
        filteredData = filteredData.filter((data) => data.discount === filterDiscount);
        console.log("filter discount data" + JSON.stringify(filteredData));
    }
    return (
        <div>
            <NavBar />
            <section class="page-search">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            {/* <!-- Advance Search --> */}
                            <div class="advance-search nice-select-white">
                                <form>
                                    <div class="align-items-center">
                                        {/* <div class="form-group col-xl-9 col-lg-3 col-md-6"> */}
                                        <div class="col-lg-8 ">             
                                            <input type="text" class="form-control my-2 my-lg-0" id="inputtext4" placeholder="What are you looking for ?" />
                                        </div>


                                        {/* <div class="form-group col-xl-2 col-lg-3 col-md-6"> */}
                                        <div className='col-lg-2'>
                                            <button type="submit" class="btn btn-primary active w-100">Search Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-sm">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="search-result bg-gray">
                                <h2 style={{ textTransform: "capitalize" }}>Results For {props.category}</h2>
                                <p>123 Results on 12 December, 2017</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="category-sidebar">
                                <div class="widget filter">
                                    <h4 class="widget-header">Show Produts</h4>
                                    <select>
                                        <option>Popularity</option>
                                        <option value="1">Top rated</option>
                                        <option value="2">Lowest Price</option>
                                        <option value="4">Highest Price</option>
                                    </select>
                                </div>

                                <div class="widget product-shorting">
                                    <h4 class="widget-header">By Price</h4>
                                    <div> 
                                        <button type="button" class="btn btn-main"> Under 500 </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main"> <span>&#8377;</span>500 - <span>&#8377;</span>1000 </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main"> <span>&#8377;</span>1000 - <span>&#8377;</span>2000</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main">  Over <span>&#8377;</span>2000</button>
                                    </div>
                                </div>

                                <div class="widget product-shorting">
                                    <h4 class="widget-header">By Discount</h4>
                                    <div> 
                                        <button type="button" class="btn btn-main"> 5%off or more </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main"> 10%off or more </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main"> 15%off or more</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main">  20%off or more</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main">  25%off or more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8">
                            <div class="category-search-filter">
                                <div class="row">
                                    <div class="col-md-6 text-center text-md-left">
                                        <strong>Short</strong>
                                        <select>
                                            <option>Most Recent</option>
                                            <option value="1">Most Popular</option>
                                            <option value="2">Lowest Price</option>
                                            <option value="4">Highest Price</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 text-center text-md-right mt-2 mt-md-0">
                                        <div class="view">
                                            <strong>Views</strong>
                                            <ul class="list-inline view-switcher">
                                                <li class="list-inline-item">
                                                    <a href="#!" onclick="event.preventDefault();" class="text-info"><i class="fa fa-th-large"></i></a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="ad-list-view.html"><i class="fa fa-reorder"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--new comment start --> */}
                            <div className='pro-container'>
                                {(filteredData) ?
                                    (
                                        (filteredData.slice(indexOfFirstPost, indexOfLastPost).map((data) => (
                                            <div className="pro" key={data.id} >
                                                <div class="des" >
                                                    <img src={data.image} alt="noImage" onClick={() => handleOpen(data.id)} />
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
                                        )))
                                    ) :
                                    (<h1>data is missing</h1>)
                                }
                            </div>
                            <Pagination
                                length={filteredData.length}
                                postsPerPage={postsPerPage}
                                currentPage={currentPage}
                                handlePagination={handlePagination}
                            />
                            {/* new comment ends */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IndividualCategoryDetailPageNew