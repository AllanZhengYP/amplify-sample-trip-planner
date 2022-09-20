import { Authenticator } from "@aws-amplify/ui-react";
import AppContainer from '../components/AppContainer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Authenticator.Provider><AppContainer><Component {...pageProps} /></AppContainer></Authenticator.Provider>;
}

export default MyApp
