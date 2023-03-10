import '../styles/globals.scss'
import {initReactI18next} from 'react-i18next';
import i18next from 'i18next';
import Backend from 'i18next-http-backend';

i18next.use(initReactI18next)
.use(Backend)
.init({
  backend:{
    loadPath: '/translations/{{ lng }}/translations.json'
  },
  lng:'fr',
  fallbackLng:'fr'
})

export default function App({ Component, pageProps }) {
  return(
    <Component {...pageProps} />
  )
}
