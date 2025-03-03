import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './common/utils/theme.ts'
import App from './App.tsx'
import StyledGlobal from './styledGlobal.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <App />
    </ThemeProvider>
  </StrictMode>
)
