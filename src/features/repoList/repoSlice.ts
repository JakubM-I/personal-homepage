import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface RepoState {
    repos: any[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: RepoState = {
    repos: [],
    isLoading: false,
    isError: false,
};

const repoSlice = createSlice({
    name: "repoList",
    initialState,

    reducers: {
        loadRepos: (state: RepoState) => {
            state.isLoading = true;
        },

        setRepos: (state: RepoState, { payload }) => {
            state.repos = payload;
            state.isLoading = false;
        },

        loadError: (state: RepoState) => {
            state.isLoading = false;
            state.isError = true;
        },

        cancelError: (state: RepoState)=> {
            state.isError = false;
        }
    }
});

export const repoStateSelector = (state: RootState) => state.repos;
export const reposSelector = (state: RootState) => repoStateSelector(state).repos;
export const reposWithHomePageSelector = (state: RootState) => repoStateSelector(state).repos.filter(repo => repo.homepage !== null);
export const isLoadingSelector = (state: RootState) => repoStateSelector(state).isLoading;
export const isErrorSelector = (state: RootState) => repoStateSelector(state).isError;

export const { loadRepos, setRepos, loadError, cancelError } = repoSlice.actions;
export default repoSlice.reducer;