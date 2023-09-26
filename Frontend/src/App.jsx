import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { baseTheme } from './styles/themes'
import AppRouter from './routes/appRouter'

function App() {

  return (
    <>
      <ThemeProvider theme={baseTheme} >
        <GlobalStyle/>
        <div className='app-container main-font'>
          <AppRouter/>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
