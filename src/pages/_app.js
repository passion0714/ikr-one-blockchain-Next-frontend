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
    <title>Inspire Home Remodeling | Learn how we build your project</title>
        <meta name="description" content="Remodeling simplified. Leasrn about our specialized consultants who are experienced designers and project managers and with you every step of the way. Build a home transforming Inspire experience." />
        <meta property="og:title" content="Inspire Kitchen Remodeling" />
        <meta name="keywords" content="home remodeling near me, project, learn, build, inspire, home remodeling loan,home remodeling ideas, home remodeling contractors near me, kitchen remodeling contractors near me, home remodeling 17055, west shore home, home improvement 0 down, home remodeling near Harrisburg PA, kitchen and bath remodeling contractors, home renovation loan calcutor, kitchen remodeling 17011, home renovation grants, home remodeling contractor near 17025, home remodeling central PA, central pa home pros, home pros of central pa, home remodeling harrisburg pa, kitchen remodeling harrisburg pa, bathroom remodeling harrisburg pa, home remodeling pros of central pa, home remodeling pros of central pa reviews, home remodeling pros of central pa llc, home remodeling pros of central pa photos, whole house remodel contractors near me, home remodeling where to start, home construction harrisburg pa, your bath and kitchen, home remodeling designer near me, bathroom remodeling near me, home renovation central pa, examples of home repairs, home renovation contractors harrisburg pa, basement remodeling" />
        <meta
          property="og:description"
          content="Modernize your home with a locally owned company who manages your project in its entirety."
        />
        <meta
          property="og:image"
          content="https://quantumone.b-cdn.net/IHR-500-png.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

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
