import { call, put, takeEvery } from "redux-saga/effects";
import { setData, setError, setLoading } from "./slice";
import { GET_CATEGORIES } from "./constants";
import { fetchCategoriesData } from "./api";




function* fetchCategoriesApiData():any {
    try {
        yield put(setLoading());
        const data = yield call(fetchCategoriesData);
        yield put(setData(data));
    } catch (error:any) {
        yield put(setError(error.message))
    }
}

function* categoriesSaga() {
    yield takeEvery(GET_CATEGORIES, fetchCategoriesApiData);
}

export default categoriesSaga