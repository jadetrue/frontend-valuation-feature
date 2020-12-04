import {ThemeProvider} from "styled-components"
import {theme} from "../theme"
import "../styles/globals.css"

function App({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
