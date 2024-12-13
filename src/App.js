
import './App.css';
import { Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import FetchAllCategoryData from './component/sections/FetchAllCategoryData';
import ShoppingCartData from './component/sections/ShoppingCartData';
import NavBar from './component/sections/NavBar';
import AllFilterSection from './component/sections/DropDownFilterForEachSections';
import { useSelector } from 'react-redux';
import IndividualCategoryDetailPage from './component/sections/IndividualCategoryDetailPage';
import Slider from './component/sections/Slider';
import TrendingItems from './component/sections/TrendingItems';
import IndexPageAllCategory from './component/sections/IndexPageAllCategory';
import Footer from './component/sections/Footer';

function App() {

  const filterCategory = useSelector((state) => state.categoryFilter.filterCategory);
  const dropDownBrandSelectedItem = useSelector((state) => state.dropDownBrandSelectedItemFilter.dropDownBrandSelectedItem);
  const dropDownDiscountSelectedItem = useSelector((state) => state.dropDownDiscountSelectedItemFilter.dropDownDiscountSelectedItem);
  return (
    <div>
      <NavBar />
      <Slider />
      <TrendingItems/>
      <IndexPageAllCategory/>
      <Footer/>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* <div className='leftDiv'>
          <AllFilterSection category={filterCategory} />
        </div> */}
        <div className='rightDiv'>
          <Routes>

            <Route path='/' element={<FetchAllCategoryData />} />

            <Route path="/cartData" element={<ShoppingCartData />} />
          </Routes>
          <IndividualCategoryDetailPage category={filterCategory} brandFilter={dropDownBrandSelectedItem} discountFilter={dropDownDiscountSelectedItem} />
        </div>
      </div>
    </div>
  );
}
export default App;
