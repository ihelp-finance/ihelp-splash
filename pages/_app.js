import '../styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {

     const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', '', {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
    
  return <Component {...pageProps} />
}

export default MyApp
