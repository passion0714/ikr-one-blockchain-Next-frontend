import '@/styles/scss/style.scss'
import '@/styles/scss/_custom.scss'
import '@/styles/scss/bootstrap-icons.scss'
import '@/styles/scss/fontawesome.scss'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />

    <Script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"/>
        <Script src='/js/custom.js'/>
        <Script src='/js/cv-slider-vertical.js'/>
        <Script type="text/javascript"/>
  </>

  )
}
