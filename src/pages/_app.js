import '@/styles/scss/style.scss'
import '@/styles/scss/_custom.scss'
import '@/styles/scss/bootstrap-icons.scss'
import '@/styles/scss/fontawesome.scss'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />

        <Script src='/js/custom.js'/>
        <Script src='/js/cv-slider-vertical.js'/>
        <Script type="text/javascript">
        const lightboxGallery = GLightbox({"{"}
  selector: '.glightbox1'
  {"}"}) const lightbox = GLightbox({"{"}
  'href': 'https://youtu.be/eTD0WWFIDAg', 'type': 'video', 'source': 'youtube',
  'width': 900, 'autoPlayVideos': 'true',
  {"}"});
  </Script>
  </>

  )
}
