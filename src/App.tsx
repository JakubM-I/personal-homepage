import ListBlock from "./components/ListBlock"
import { StyledAppWrapper } from "./styledApp"
import { skillList } from "./common/utils/skillsList"
import { wantToLernList } from "./common/utils/wantToLernList"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./common/utils/theme"
import StyledGlobal from "./styledGlobal"
import HeroSection from "./components/HeroSectiion"
import Footer from "./components/Footer"
import RepoList from "./components/RepoList"
import { useEffect } from "react";
import { loadRepos } from "./features/repoList/repoSlice"
import { isDarkModeSelector, toogleTheme } from "./features/themeSwitch/themeSlice"
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks"

function App() {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(isDarkModeSelector);

  useEffect(() => {
    dispatch(loadRepos())
  }, [])


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StyledGlobal />
      <StyledAppWrapper>

        <HeroSection />
        <ListBlock title="My skillset includes 🛠️" content={skillList} />
        <ListBlock title="What I want to learn next 🚀" content={wantToLernList} />
        <RepoList />
        <Footer />
      </StyledAppWrapper>
    </ThemeProvider>
  )
}

export default App
