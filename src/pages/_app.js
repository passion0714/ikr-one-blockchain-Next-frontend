import '@/styles/scss/style.scss'
import '@/styles/scss/_custom.scss'
import '@/styles/scss/bootstrap-icons.scss'
import '@/styles/scss/fontawesome.scss'
import Head from "next/head"
import Script from 'next/script'

export default function App({ Component, pageProps }) {

  return (
    <>
 

    <Head>
    <link rel="stylesheet" href="assets/css/style.css"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
  <link rel="stylesheet" href="assets/css/fontawesome.css"/>
  <link rel="stylesheet" href="assets/css/bootstrap-icons.css"/>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"/>
  <link href="https://fonts.cdnfonts.com/css/brittany-signature" rel="stylesheet"/>
  <link href="https://fonts.cdnfonts.com/css/blacksword" rel="stylesheet"/>

    </Head>
       
        <Script src="assets/js/bootstrap.bundle.js" />
        <Script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
                integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" />
        <Script src='assets/js/custom.js'/>
        <Script src='assets/js/cv-slider-vertical.js'/>
        <Script src="https://cdn.jsdelivr.net/npm/glightbox-ssr@3.0.8/dist/js/glightbox.min.js" />
     <Component {...pageProps} />
</>

  )
}
