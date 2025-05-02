import { all } from "redux-saga/effects";
import { repoSaga } from "./features/repoList/repoSaga";
import { themeSaga } from "./features/themeSwitch/themeSaga";

export default function* rootSaga() {
    yield all(
        [
            repoSaga(),
            themeSaga(),
        ]
    )
};