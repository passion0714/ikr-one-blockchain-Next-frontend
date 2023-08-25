import '@/styles/scss/style.scss'
import '@/styles/scss/_custom.scss'
import '@/styles/scss/bootstrap-icons.scss'
import '@/styles/scss/fontawesome.scss'
import Script from 'next/script'
import GLightbox from 'glightbox'

export default function App({ Component, pageProps }) {
  const lightboxGallery = GLightbox({
    selector: '.glightbox1'
  })

  const lightbox = GLightbox({
    'href': 'https://youtu.be/eTD0WWFIDAg',
    'type': 'video',
    'source': 'youtube',
    'width': 900,
    'autoPlayVideos': 'true',
  });
  return (
    <>
    <Component {...pageProps} />

        <Script src='assets/js/custom.js'/>
        <Script src='assets/js/cv-slider-vertical.js'/>
  </>

  )
}
