import React from 'react'
import NavBar from './NavBar'
import Slider from './Slider'
import TrendingItems from './TrendingItems'
import IndexPageAllCategory from './IndexPageAllCategory'
import Footer from './Footer'
import FetchAllCategoryData from './FetchAllCategoryData'

function IndexPage() {
    return (
        <div>
            <NavBar />
            <Slider />
            <TrendingItems />
            <IndexPageAllCategory />
            <Footer />
            <FetchAllCategoryData />
        </div>
    )
}

export default IndexPage