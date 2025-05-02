import { call, select, takeEvery } from "redux-saga/effects";
import { isDarkModeSelector, toogleTheme } from "./themeSlice";
import { useAppSelector } from "../../hooks/reduxHooks";
import { saveToLocalStorage } from "../../common/utils/localStorage";
import { SavedThemeProps } from "../../common/interfaces/interfaces";

function* LocalStorageWorker () {
    const darkMode: boolean = yield select(isDarkModeSelector);

    yield call(saveToLocalStorage, darkMode)

};

export function* themeSaga () {
    yield takeEvery(toogleTheme.type, LocalStorageWorker);
}