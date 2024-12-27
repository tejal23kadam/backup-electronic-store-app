
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import AudioCategory from './component/sections/AudioCategory';
import ShoppingCartData from './component/sections/ShoppingCartData';
import TermsAndConditions from './component/sections/TermsAndConditions';
import IndexPage from './component/sections/IndexPage';
import ContactUs from './component/sections/ContactUs';
import AboutUS from './component/sections/AboutUs';
import EWest from './component/sections/EWest';
import AppliancesCategory from './component/sections/AppliancesCategory';
import GamingCategory from './component/sections/GamingCategory';
import LaptopCategory from './component/sections/LaptopCategory';
import MobileCategory from './component/sections/MobileCategory';
import TvCategory from './component/sections/TvCategory';
import SingleProductDetailPage from './component/singleProductDetailComponent/SingleProductDetailPageNew';

function App() {

  // const filterCategory = useSelector((state) => state.categoryFilter.filterCategory);
  // const dropDownBrandSelectedItem = useSelector((state) => state.dropDownBrandSelectedItemFilter.dropDownBrandSelectedItem);
  // const dropDownDiscountSelectedItem = useSelector((state) => state.dropDownDiscountSelectedItemFilter.dropDownDiscountSelectedItem);
  return (
    <div>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path="/cartData" element={<ShoppingCartData />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/aboutUs" element={<AboutUS/>} />
        <Route path="/eWest" element={<EWest/>} />
        <Route path="/audio" element={<AudioCategory/>} />
        <Route path="/appliances" element={<AppliancesCategory/>} />
        <Route path="/gaming" element={<GamingCategory/>} />
        <Route path="/laptop" element={<LaptopCategory/>} />
        <Route path="/mobile" element={<MobileCategory/>} />
        <Route path="/tv" element={<TvCategory/>} />
        <Route path="/product-details" element={<SingleProductDetailPage/>} />

      </Routes>
      {/* <IndividualCategoryDetailPage category={filterCategory} brandFilter={dropDownBrandSelectedItem} discountFilter={dropDownDiscountSelectedItem} /> */}
    </div>
  );
}
export default App;
