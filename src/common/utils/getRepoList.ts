export const getRepoList = async () => {
    const response = await fetch("https://api.github.com/users/JakubM-I/repos");
    const repos = await response.json();
    return repos;
}