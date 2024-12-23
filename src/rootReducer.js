import { combineReducers } from '@reduxjs/toolkit';
import AllDataReducer from './component/sliceComponent/AllDataSlice';
import CartReducer from './component/sliceComponent/CartSlice';
import CategoryFilterReducer from './component/sliceComponent/CategoryFilterSlice';
import DropDownBrandSelectedItemFilterReducer from './component/sliceComponent/DropDownBrandSelectedItemSlice';
import dropDownDiscountSelectedItemFilterReducer from './component/sliceComponent/DropDownDiscountSelectedItemSlice ';
import productIDFilterReducer from './component/sliceComponent/ProductIdSlice';

const rootReducer = combineReducers({
	allData: AllDataReducer	,
	cart:CartReducer,
	categoryFilter:CategoryFilterReducer,
	dropDownBrandSelectedItemFilter:DropDownBrandSelectedItemFilterReducer,
	dropDownDiscountSelectedItemFilter:dropDownDiscountSelectedItemFilterReducer,
	productIDFilter:productIDFilterReducer,
})

export default rootReducer;