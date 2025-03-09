import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from '@modules/Home/api/slice';
import categoriesReducer from '@modules/Categories/api/slice';
import cartReducer from '@modules/Cart/api/slice';
import accountReducer from '@modules/Account/api/slice';

export default combineReducers({
    home: homeReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    account: accountReducer
})