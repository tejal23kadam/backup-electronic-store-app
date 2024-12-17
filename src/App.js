
import './App.css';
import { Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import AudioCategory from './component/sections/AudioCategory';
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
import TermsAndConditions from './component/sections/TermsAndConditions';
import IndexPage from './component/sections/IndexPage';
import ContactUs from './component/sections/ContactUs';
import AboutUS from './component/sections/AboutUs';
import EWest from './component/sections/EWest';
import AppliancesCategory from './component/sections/AppliancesCategory';

function App() {

  const filterCategory = useSelector((state) => state.categoryFilter.filterCategory);
  const dropDownBrandSelectedItem = useSelector((state) => state.dropDownBrandSelectedItemFilter.dropDownBrandSelectedItem);
  const dropDownDiscountSelectedItem = useSelector((state) => state.dropDownDiscountSelectedItemFilter.dropDownDiscountSelectedItem);
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

      </Routes>
      {/* <IndividualCategoryDetailPage category={filterCategory} brandFilter={dropDownBrandSelectedItem} discountFilter={dropDownDiscountSelectedItem} /> */}
    </div>
  );
}
export default App;
