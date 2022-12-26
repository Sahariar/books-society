import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return <Component {...pageProps} />
}
