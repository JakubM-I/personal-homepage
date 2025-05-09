export const getRepoList = async () => {
    try{
        const response = await fetch("https://api.github.com/users/JakubM-I/repos");
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const repos = await response.json();
        return repos;
    } catch (error) {
        throw error
    }

}