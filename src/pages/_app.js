import '@/styles/globals.css'
import '@/styles/style.css'
import '@/styles/scss/style.scss'
import '@/styles/scss/_custom.scss'
import '@/styles/scss/bootstrap-icons.scss'
import '@/styles/scss/fontawesome.scss'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <Script src='/js/bootstrap.bundle.js'/>
        <Script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
    integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"
     />
    <Script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"/>
        <Script async src='/js/custom.js'/>
        <Script async src='/js/cv-slider-vertical.js'/>
        <Script type="text/javascript"/>
  </>

  )
}
