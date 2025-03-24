export const getRepoList = async () => {
    const response = await fetch("http://localhost:5173/test-repo.json");
    const repos = await response.json();
    return repos;
}