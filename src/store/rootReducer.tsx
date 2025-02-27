import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from '@modules/Home/api/slice';
import categoriesReducer from '@modules/Categories/api/slice';

export default combineReducers({
    home: homeReducer,
    categories: categoriesReducer
})