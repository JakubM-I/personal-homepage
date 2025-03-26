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
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadRepos } from "./features/repoList/repoSlice"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRepos())
  }, [])


  return (
    <ThemeProvider theme={lightTheme}>
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
