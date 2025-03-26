import { useSelector } from "react-redux";
import BlockTitle from "../../common/BlockTitle"
import { StyledLogoWrapper, StyledPortfolio, StyledRepoDescription, StyledRepoItem, StyledRepoLink, StyledRepoList, StyledRepoTitle, StyledSubtitle } from "./styled";
import { reposSelector } from "../../features/repoList/repoSlice";

const RepoList: React.FC = () => {
    const repos = useSelector(reposSelector);
    console.log(repos);

    return (
        <StyledPortfolio>
            <StyledLogoWrapper>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C8.95 0 0 8.95 0 20C0 28.85 5.725 36.325 13.675 38.975C14.675 39.15 15.05 38.55 15.05 38.025C15.05 37.55 15.025 35.975 15.025 34.3C10 35.225 8.7 33.075 8.3 31.95C8.075 31.375 7.1 29.6 6.25 29.125C5.55 28.75 4.55 27.825 6.225 27.8C7.8 27.775 8.925 29.25 9.3 29.85C11.1 32.875 13.975 32.025 15.125 31.5C15.3 30.2 15.825 29.325 16.4 28.825C11.95 28.325 7.3 26.6 7.3 18.95C7.3 16.775 8.075 14.975 9.35 13.575C9.15 13.075 8.45 11.025 9.55 8.275C9.55 8.275 11.225 7.75 15.05 10.325C16.65 9.875 18.35 9.65 20.05 9.65C21.75 9.65 23.45 9.875 25.05 10.325C28.875 7.725 30.55 8.275 30.55 8.275C31.65 11.025 30.95 13.075 30.75 13.575C32.025 14.975 32.8 16.75 32.8 18.95C32.8 26.625 28.125 28.325 23.675 28.825C24.4 29.45 25.025 30.65 25.025 32.525C25.025 35.2 25 37.35 25 38.025C25 38.55 25.375 39.175 26.375 38.975C34.275 36.325 40 28.825 40 20C40 8.95 31.05 0 20 0Z" fill="currentColor" />
                </svg>
            </StyledLogoWrapper>
            <BlockTitle title="Portfolio" />
            <StyledSubtitle>My recent projects</StyledSubtitle>
            <StyledRepoList>
                <StyledRepoItem>
                    <StyledRepoTitle>Movies Browser</StyledRepoTitle>
                    <StyledRepoDescription>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</StyledRepoDescription>
                    <StyledRepoDescription>Demo: <StyledRepoLink href="#">http://link.demo.com</StyledRepoLink></StyledRepoDescription>
                    <StyledRepoDescription>Code: <StyledRepoLink href="#">http://link.code.com</StyledRepoLink></StyledRepoDescription>
                </StyledRepoItem>
                <StyledRepoItem>
                    <StyledRepoTitle>Movies Browser</StyledRepoTitle>
                    <StyledRepoDescription>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</StyledRepoDescription>
                    <StyledRepoDescription>Demo: <StyledRepoLink href="#">http://link.demo.com</StyledRepoLink></StyledRepoDescription>
                    <StyledRepoDescription>Code: <StyledRepoLink href="#">http://link.code.com</StyledRepoLink></StyledRepoDescription>
                </StyledRepoItem>
                <StyledRepoItem>
                    <StyledRepoTitle>Movies Browser</StyledRepoTitle>
                    <StyledRepoDescription>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</StyledRepoDescription>
                    <StyledRepoDescription>Demo: <StyledRepoLink href="#">http://link.demo.com</StyledRepoLink></StyledRepoDescription>
                    <StyledRepoDescription>Code: <StyledRepoLink href="#">http://link.code.com</StyledRepoLink></StyledRepoDescription>
                </StyledRepoItem>
                <StyledRepoItem>
                    <StyledRepoTitle>Movies Browser</StyledRepoTitle>
                    <StyledRepoDescription>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</StyledRepoDescription>
                    <StyledRepoDescription>Demo: <StyledRepoLink href="#">http://link.demo.com</StyledRepoLink></StyledRepoDescription>
                    <StyledRepoDescription>Code: <StyledRepoLink href="#">http://link.code.com</StyledRepoLink></StyledRepoDescription>
                </StyledRepoItem>
            </StyledRepoList>
        </StyledPortfolio>
    )
};

export default RepoList;