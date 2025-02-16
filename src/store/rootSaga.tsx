import { all, fork } from "redux-saga/effects";
import homeSaga from "@modules/Home/api/saga";

export default function* rootSaga() {
    yield all([
        fork(homeSaga),
    ])
}