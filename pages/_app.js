import '../styles/globals.css'
import AppProvider from '../contexts'
import 'fontsource-roboto';


function MyApp({ Component, pageProps }) {
  return (<AppProvider>
    <Component {...pageProps} />
  </AppProvider>)
  
}

export default MyApp
