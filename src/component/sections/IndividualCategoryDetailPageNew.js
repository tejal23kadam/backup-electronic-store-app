import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../paginationComponent/Pagination';
import { Link } from 'react-router-dom';
import { addToCart } from '../sliceComponent/CartSlice';
import NavBar from './NavBar'
import { addToProductIDFilter } from '../sliceComponent/ProductIdSlice';

function IndividualCategoryDetailPageNew(props) {

    const data = useSelector((state) => state.allData.data.products);
    const loading = useSelector((state) => state.allData.loading);
    const error = useSelector((state) => state.allData.error);

    let [currentPage, setCurrentPage] = useState(1);
    let [brand, setbrand] = useState("⬇️ Select a brand ⬇️")
    let [filterDiscount, setFilterDiscount] = useState(null);
    let [filterPrice, setFilterPrice] = useState(null);
    let [filteredData, setFilteredData] = useState(data);
    const dispatch = useDispatch();

    let brandDistinctValues;

    const postsPerPage = 8;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    let handlebrandChange = (e) => {
        setbrand(e.target.value)
    }
    const handlePriceFilter = (min, max) => {
        setFilterPrice({ min, max });
    };
    const handleDiscountFilter = (val) => {
        console.log("val is " + val);
        setFilterDiscount(val);
    };
   
    //get brand for each category
    let individualBrandData = data.filter(datas => datas.category.toLowerCase() === props.category.toLowerCase());
    useEffect(() => {
        let tempFilteredData = individualBrandData;

        // Brand Filter
        if (brand !== '⬇️ Select a brand ⬇️') {
            tempFilteredData = tempFilteredData.filter(data => data.brand.toLowerCase().includes(brand.toLowerCase()));
        }

        // Price Filter
        if (filterPrice) {
            tempFilteredData = tempFilteredData.filter(data => data.price >= filterPrice.min && data.price <= filterPrice.max);
        }

        //discount filter 
        if (filterDiscount > 0) {
            tempFilteredData = tempFilteredData.filter((data) => data.discount >= filterDiscount);
        }

        setFilteredData(tempFilteredData);
    }, [brand, filterPrice, filterDiscount, individualBrandData]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.length === 0) return <h1>No data available</h1>;


    //stores the unique brands for selected category

    const propertyValues = individualBrandData.map(obj => obj['brand']);
    var newArray = propertyValues.map(function (x) { return x.toLowerCase() })
    const uniqueValuesSet = new Set(newArray);
    brandDistinctValues = Array.from(uniqueValuesSet);
    console.log("brandDistinctValues = " + brandDistinctValues);    

    return (
        <div>
            <NavBar />
            <section class="page-search">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-10 col-md-8 advance-search ">
                            <input type="text" class="form-control my-2 my-lg-0" id="inputtext4" placeholder="What are you looking for ?" />
                        </div>
                        <div className='col-lg-2 col-xl-2 col-md-4 advance-search align-self-center'>
                            <button type="submit" class="btn btn-primary active w-100">Search Now</button>
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
                                <p>{filteredData.length} Results Available</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="category-sidebar">
                                <div class="widget filter">
                                    <h4 class="widget-header">Show Brands</h4>

                                    <select onChange={handlebrandChange}>
                                        <option defaultValue="⬇️ Select a brand ⬇️"> -- Select a brand -- </option>
                                        {brandDistinctValues.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
                                    </select>
                                </div>

                                <div class="widget product-shorting">
                                    <h4 class="widget-header">By Price</h4>
                                    <div>
                                        <button type="button" class="btn btn-main" onClick={() => handlePriceFilter(0, 500)}> Under 500 </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main" onClick={() => handlePriceFilter(500, 1000)}> <span>&#8377;</span>500 - <span>&#8377;</span>1000 </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main" onClick={() => handlePriceFilter(1000, 2000)}>  <span>&#8377;</span>1000 - <span>&#8377;</span>2000</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main" onClick={() => handlePriceFilter(2000)}>   Over <span>&#8377;</span>2000</button>
                                    </div>
                                </div>

                                <div class="widget product-shorting">
                                    <h4 class="widget-header">By Discount</h4>
                                    <div>
                                        <button type="button" class="btn btn-main" onClick={() => handleDiscountFilter(5)}> 5%off or more </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main" onClick={() => handleDiscountFilter(10)}> 10%off or more </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main" onClick={() => handleDiscountFilter(15)}> 15%off or more</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main" onClick={() => handleDiscountFilter(20)}>  20%off or more</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-main" onClick={() => handleDiscountFilter(25)}>  25%off or more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8">

                            {/* <!--new comment start --> */}
                            <div className='pro-container'>
                                {(filteredData) ?
                                    (
                                        (filteredData.slice(indexOfFirstPost, indexOfLastPost).map((data) => (
                                            <div className="pro " key={data.id} >
                                                <div class="des" >
                                                    <Link to="/product-details"><img src={data.image} onClick={() => { dispatch(addToProductIDFilter(data.id)) }} alt="noImage" /></Link>
                                                    <h5 className="overme">{data.title} </h5>
                                                    <div>
                                                        {
                                                            (data.discount) ? (
                                                                <div style={{ display: "flex" }}>
                                                                    <h5><s>{data.price}</s> </h5>
                                                                    <h4><span>&#8377;</span>{Math.trunc(data.price - ((data.price * data.discount) / 100))}</h4>
                                                                    <div style={{ display: "flex" }}>
                                                                        <p class="discount">{data.discount}%</p> off

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