import '../styles/globals.css';
import '../styles/dashboard.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return(
    <SessionProvider session={pageProps.session}>
  <Component {...pageProps} />
  </SessionProvider>
  )
}
