import '@/styles/scss/style.scss'
import '@/styles/scss/_custom.scss'
import '@/styles/scss/bootstrap-icons.scss'
import '@/styles/scss/fontawesome.scss'
import Script from 'next/script'

export default function App({ Component, pageProps }) {

  return (
    <>
    <Component {...pageProps} />
        <Script src="assets/js/bootstrap.bundle.js" />
        <Script src='assets/js/custom.js'/>
        <Script src='assets/js/cv-slider-vertical.js'/>
  <Script src="https://cdn.jsdelivr.net/npm/glightbox-ssr@3.0.8/dist/js/glightbox.min.js" />
</>

  )
}
