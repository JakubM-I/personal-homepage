import ListBlock from "./components/ListBlock"
import { StyledAppWrapper } from "./styledApp"
import { skillList } from "./common/utils/skillsList"
import { wantToLernList } from "./common/utils/wantToLernList"

function App() {

  return (
    <StyledAppWrapper>
      <h1>Personal HomePage</h1>
      <ListBlock title="My skillset includes 🛠️" content={skillList} />
      <ListBlock title="What I want to learn next 🚀" content={wantToLernList} />
    </StyledAppWrapper>
  )
}

export default App
