import { takeEvery } from "redux-saga/effects";
import { toogleTheme } from "./themeSlice";

function* LocalStorageWorker () {

};

export function* themeSaga () {
    yield takeEvery(toogleTheme.type, LocalStorageWorker);
}