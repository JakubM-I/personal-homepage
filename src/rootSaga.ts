import { all } from "redux-saga/effects";
import { repoSaga } from "./features/repoList/repoSaga";

export default function* rootSaga() {
    yield all(
        [
            repoSaga(),
        ]
    )
};