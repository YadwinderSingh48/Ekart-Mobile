import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from '@modules/Home/api/slice';

export default combineReducers({
    home: homeReducer
})