import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script async src='/js/bootstrap.bundle.js'></script>
        <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
    integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous"
    async></script>
    <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
        <script async src='/js/custom.js'></script>
        <script async src='/js/cv-slider-vertical.js'></script>
        <script type="text/javascript">
          const lightboxGallery = GLightbox({
            'selector'= '.glightbox1'
          })

          const lightbox = GLightbox({
            'href'= 'https://youtu.be/eTD0WWFIDAg',
            'type'= 'video',
            'source'= 'youtube',
            'width'= 900,
            'autoPlayVideos'= 'true',
         });
  </script>
      </body>
    </Html>
  )
}
