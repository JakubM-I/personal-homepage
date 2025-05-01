import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getRepoList } from "../../common/utils/getRepoList";
import { loadRepos, setRepos } from "./repoSlice";

function* fetchReposWorker() {
    try {
        const repos = yield call(getRepoList);
        yield delay(2000);
        yield put(setRepos(repos));

    } catch (error) {
        console.log(error);
    }
}

export function* repoSaga() {
    yield takeEvery(loadRepos.type, fetchReposWorker);
}