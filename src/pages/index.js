import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Link from 'next/link'

export const metadata = {
  title: 'Inspire Home Remodeling | Kitchen, bath, sunroom remodeling central PA',
  description: 'Remodeling simplified. Our specialized consultants are experienced designers and project managers who are with you every step of the way. Remodel your home with a locally owned and operated business. Our professional designers work with all budgets and manage your project in its entirety with a highly personalized approach. www.inspirehrd.com.',
  category: 'General home remodeling', 
  keywords: ['home remodeling near me', 'home remodeling loan', 'home remodeling ideas', 'home remodeling contractors near me', 'kitchen remodeling contractors near me', 'home remodeling 17055', 'west shore home', 'home improvement 0 down', 'home remodeling near Harrisburg PA', 'kitchen and bath remodeling contractors', 'home renovation loan calcutor', 'kitchen remodeling 17011', 'home renovation grants', 'home remodeling contractor near 17025', 'home remodeling central PA', 'central pa home pros', 'home pros of central pa', 'home remodeling harrisburg pa', 'kitchen remodeling harrisburg pa', 'bathroom remodeling harrisburg pa', 'home remodeling pros of central pa', 'home remodeling pros of central pa reviews', 'home remodeling pros of central pa llc', 'home remodeling pros of central pa photos', 'whole house remodel contractors near me', 'home remodeling where to start', 'home construction harrisburg pa', 'your bath and kitchen', 'home remodeling designer near me', 'bathroom remodeling near me', 'home renovation central pa', 'examples of home repairs', 'home renovation contractors harrisburg pa', 'basement remodeling' ],
  
}


export default function Home() {
  
  const [isLoading, setIsLoading] = useState(false)
  const [lightbox, setLightbox] = useState(null);
  const [lightboxGallery, setLightboxGallery] =useState(null);
  const [floatinginputfirstname, setFloatingInputFirstname] = useState(null);
  const [floatinginputemail, setFloatingInputEmail] = useState(null);
  const [floatinginputfirstname3, setFloatingInputFirstname3] = useState(null);
  const [floatingpassword2, setFloatingPassword2] = useState(null);
  const [floatingpassword3, setFloatingPassword3] = useState(null);
  const [floatinginputemail3, setFloatingInputEmail3] = useState(null);
  const [floatingtextareamessage, setFloatingTextareaMessage] = useState(null);
  
  
  useEffect(() => {
    const setupLightbox = () => {
    
      const lg = GLightbox({
            selector: '.glightbox1'
          })
      const lb = GLightbox({
        href: "https://youtu.be/eTD0WWFIDAg",
        type: "video",
        source: "youtube", //vimeo, youtube or local
        width: 900,
        autoPlayVideos: "true",
      });

      lb.on("close", () => {
        lb.close();
      });
      setLightboxGallery(lg);
      setLightbox(lb);
    };

    setTimeout(() => {
      setupLightbox();
    }, 500);
  }, []);

 

  const displayGallery = (evt) => {
    if (lightbox) {
      console.log("trying to show movie");
      console.log(GLightbox);
      console.log(typeof window);
      console.log(lightbox);

      lightbox.open();
    }
  };
  
  
  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
 
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/login', {
        method: 'POST',
        body: formData,
      })
 
      // Handle response if necessary
      const data = await response.json()
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }

  return (
    <>
      <Head>
        <title>Inspire Home Remodeling best design, renovation, and home make-over deals on kitchens, baths, sunrooms in central PA including Camp Hill, Harrisburg, Mechanicsburg, Hershey, Linglestown, Camp Hill, West Shore, East Shore, York, Lancaster. </title>
        <meta name="description" content="Modernize your home with a locally owned and operated business. Our professional designers work with all budgets and manage your project in its entirety with a highly personalized approach. Learn more and schedule up to two free consults at wwww.inspirehrd.com." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body data-bs-spy="scroll" data-bs-target="#spy-section">

   {/* START THE NAVBAR SECTION */}

  <nav class="navbar navbar-expand-lg bg-transparent sticky-top border-bottom border-primary p-lg-0 p-3 menu"
    id="spy-section">
    <div class="container">
    
        
    
       <Image src='https://quantumone.b-cdn.net/Ihr-svg.svg' width={110} height={60} alt="inspire-logo" />
      
      {/* COLOR SWITCHER ON MOBILE SCREEN ONLY */}
    
      <div class="theme-switcher switcher-sm d-flex align-items-center justify-content-center d-lg-none ms-auto me-3 me-md-4">
        <button class="btn--theme-switcher btnsm me-2 light-dark-btn">
          <i class="fas fa-moon light-dark-icon"></i>
        </button>
        <div class="dropdown theme-switcher__color-picker">
          <button class="btn--theme-switcher btnsm dropdown-toggle color-toggle-btn" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-palette"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end shadow-lg">
            <div class="color-box">
              <button class="btn--color primary-theme"></button>
              <button class="btn--color secondary-theme"></button>
            </div>
          </div>
        </div>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title fw-bold text-primary" id="offcanvasNavbarLabel">Inspire HRD</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-start flex-grow-1">
            <li class="nav-item my-auto">
              <a class="nav-link" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item my-auto">
              <a class="nav-link" aria-current="page" href="#process">Process</a>
            </li>
            <li class="nav-item my-auto">
              <a class="nav-link" aria-current="page" href="#testimonial">Reviews</a>
            </li>
            <li class="nav-item my-auto">
              <a class="nav-link" href="#gallery">Gallery</a>
            </li>
            <li class="nav-item my-auto">
              <a class="nav-link" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation">Free Consult</a>
            </li>

          </ul>
          <ul class="navbar-nav justify-content-end flex-grow-1">
            <li class="nav-item my-auto me-lg-4 me-0">
              <a class="nav-link btn--show-modal" id="login-signup" href="#">Begin</a>
            </li>
            <div
              class="theme-switcher me-lg-4 me-0 d-flex align-items-center justify-content-center order-2 order-lg-1 mt-4 mt-lg-0">
              <button class="btn--theme-switcher me-2 light-dark-btn">
                <i class="fas fa-moon light-dark-icon"></i>
              </button>
              <div class="dropdown theme-switcher__color-picker">
                <button class="btn--theme-switcher dropdown-toggle color-toggle-btn" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-palette"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end shadow-lg">
                  <div class="color-box">
                    <button class="btn--color primary-theme"></button>
                    <button class="btn--color secondary-theme"></button>
                  </div>
                </div>
              </div>
            </div>
            
            <Link class="text-decoration-none mx-auto" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" passHref> 
            <button class="btn-flat btn-sm mt-4 mt-lg-0 order-1 order-lg-2 mx-auto" id="get-estimate" onClick="window.location.href='https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation'">
            Get estimate
   </button>
            </Link>
              
          </ul>
        </div>
      </div>
    </div>
  </nav>

  {/*START THE HERO SECTION*/}

  <section class="hero section" id="home">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 my-auto hero__intros pt-5 pt-xl-4">
          <h1 class="display-2">Remodeling simplified.</h1>
          <p class="display-2--description">Our specialized consultants are experienced designers and project managers who are with you every step of the way.</p>
          <div class="hero__intros--ctas d-flex align-items-center">
            <Link class="text-decoration-none" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" passHref>
              <button class="btn-flat btn-sm" onClick="window.location.href='https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation'" id="get-estimate">Get estimate</button>
            </Link>
            {/* <div class="video-box">
              <a href="#" class="glightbox">
                <span>
                  <i class="fas fa-play-circle"></i>
                </span>
                <span class="border-animation border-animation--border-1"></span>
                <span class="border-animation border-animation--border-2"></span>
              </a>
            </div>
            */}
          </div>
        </div>
        <div class="col-sm-12 col-lg-6 hero__feat-images">
          <img src="images/gallery/Gervasini_After.jpg" alt="hero 1" class="hero--image1 img-fluid"/>
          <img src="images/gallery/Brown_after_3.jpg" alt="hero 2" class="hero--image2 float-end me-0 me-xl-5 img-fluid"/>
        </div>
      </div>
    </div>
  </section>

  {/* START THE GALLERY SECTION */}

  <section class="gallery section" id="gallery">
    <div class="container">
      <div class="row gallery__wrapper">
        <div class="col-md-12 col-lg-6 order-2 order-lg-1">
          <div class="gallery__wrapper__images">
            <div class="row g-3 g-md-4 scroller js-scroll-area row-right">
              <div class="col-6 col-md-6 js-scroll-slider" data-scroll-area=".js-scroll-area"
                data-auto-speed-ratio="0.5" data-scroll-ratio="0.06">
                
                <div class="gallery__wrapper__images__box js-scroll-slider__item">
                  <img src="images/gallery/Brown_before_1.jpg" alt="Gallery Image" class=""/>
                  <div class="gallery-box-info">
                    <div class="caption">
                      <a href="images/gallery/Brown_before_1.jpg" class="glightbox1">
                        <i class="fas fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="gallery__wrapper__images__box js-scroll-slider__item">
                  <img src="images/gallery/Brown_after_3.jpg" alt="Gallery Image" class=""/>
                  <div class="gallery-box-info">
                    <div class="caption">
                      <a href="images/gallery/Brown_after_3.jpg" class="glightbox1">
                        <i class="fas fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="gallery__wrapper__images__box js-scroll-slider__item">
                  <img src="images/gallery/Miller_before_1.JPG" alt="Gallery Image" class=""/>
                  <div class="gallery-box-info">
                    <div class="caption">
                      <a href="images/gallery/Miller_before_1.JPG" class="glightbox1">
                        <i class="fas fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-6 js-scroll-slider is-reverse" data-scroll-area=".js-scroll-area"
                data-auto-speed-ratio="0.5" data-scroll-ratio="0.06">
                <div class="gallery__wrapper__images__box js-scroll-slider__item">
                  <img src="images/gallery/Miller_after_1.JPG" alt="Gallery Image" class=""/>
                  <div class="gallery-box-info">
                    <div class="caption">
                      <a href="images/gallery/Miller_after_1.JPG" class="glightbox1">
                        <i class="fas fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="gallery__wrapper__images__box js-scroll-slider__item">
                  <img src="images/gallery/Miller_after_3.PNG" alt="Gallery Image" class=""/>
                  <div class="gallery-box-info">
                    <div class="caption">
                      <a href="images/gallery/Miller_after_3.PNG" class="glightbox1">
                        <i class="fas fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="gallery__wrapper__images__box js-scroll-slider__item">
                  <img src="images/gallery/Gervasini_After.jpg" alt="Gallery Image" class=""/>
                  <div class="gallery-box-info">
                    <div class="caption">
                      <a href="images/gallery/Gervasini_Before1.jpg" class="glightbox1">
                        <i class="fas fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="gallery__wrapper__images__box js-scroll-slider__item">
                  <img src="images/gallery/Gervasini_After.jpg" alt="Gallery Image" class=""/>
                  <div class="gallery-box-info">
                    <div class="caption">
                      <a href="images/gallery/Gervasini_After.jpg" class="glightbox1">
                        <i class="fas fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="gallery__wrapper__images__box js-scroll-slider__item">
                  <img src="images/gallery/image-2.jpg" alt="Gallery Image" class=""/>
                  <div class="gallery-box-info">
                    <div class="caption">
                      <a href="images/gallery/image-2.jpg" class="glightbox1">
                        <i class="fas fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="gallery__wrapper__images__box js-scroll-slider__item">
                  <img src="images/gallery/image-1.jpg" alt="Gallery Image" class=""/>
                  <div class="gallery-box-info">
                    <div class="caption">
                      <a href="images/gallery/image-1.jpg" class="glightbox1">
                        <i class="fas fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 order-1 order-lg-2">
          <div class="gallery__wrapper--cta d-flex align-items-center justify-content-center mx-auto">
            <h3 class="display-4 mb-4">
              Look at what we’ve done!
            </h3>
            <p class="mb-4 lead">Discover the transforming Inspire experience! </p>
            <a href="#gallery" class="btn-outline btn-sm me-auto">View project gallery</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* START THE FEATURED IN SECTION 

  <section class="featured-in px-3 px-md-0 section" id="featured-in">
    <div class="container">
      <div class="row text-center py-5">
        <div class="col-sm-6 col-lg-3 mb-xl-0 mb-5">
          <div class="featured-in__company-logo-wrapper d-flex align-items-center justify-content-center">
            <img src="images/featuted-in/Press01.png" alt="houzz" class=""/>
          </div>
          <div class="featured-in__company-text">
            <p class="mb-0">"Inspire offers high quality materials without overhead costs."</p>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 mb-xl-0 mb-5">
          <div class="featured-in__company-logo-wrapper d-flex align-items-center justify-content-center">
            <img src="images/featuted-in/Press02.png" alt="fc" class=""/>
          </div>
          <div class="featured-in__company-text">
            <p class="mb-0">"From start to finish, your personal consultant is with you every step of the way."
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 mb-md-0 mb-5">
          <div class="featured-in__company-logo-wrapper d-flex align-items-center justify-content-center">
            <img src="images/featuted-in/Press03.png" alt="new york times" class=""/>
          </div>
          <div class="featured-in__company-text">
            <p class="mb-0">"Most companies pass customers to a separate representative for each part of the process leading to fine details being lost in translation and higher costs"</p>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 mb-xl-0 mb-lg-5">
          <div class="featured-in__company-logo-wrapper d-flex align-items-center justify-content-center">
            <img src="images/featuted-in/Press04.png" alt="chinese" class=""/>
          </div>
          <div class="featured-in__company-text">
            <p class="mb-0">“The experience and commitment of your personal consultant will alone save you $1K's"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
     */}

  {/* START THE PROCESS SECTION */}

  <section class="process section" id="process">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6">
          <div class="process__headline-wrapper me-auto">
            <h3 class="display-3--title text-body mb-5 mb-lg-1">A simple and streamlined process</h3>
             </div>
             </div>
            
           <div class="col-md-6">
             <div class="process__intro-wrapper ms-auto pe-3">
                <p class="display-3--intro text-body fa-inverse lead pb-3">
                    You'll work with the same consultant for the entirety of the project. It's helpful to think of our consultants as designers, project managers, purchasing agents, and advisors wrapped into one. </p>
                     <a href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" class="display-3--link text-link fw-bold">How can I schedule a consult?</a>
               </div>
              </div>
             </div>
           <div class="row gx-sm-5">
             <div class="col-xl-4 col-md-6 mb-5 mb-xl-0">
               <div class="process__card">
                   <div class="process__card__imgwrap">
                     <img class="process__card__imgwrap--image img-fluid" src="images/process/Process 01.png" alt="Process 01"/>
                     <span>01</span>
                   </div>
                 <div class="process__card__body">
                   <h5 class="process__card__body--title text-body">Wish List</h5>
                   <p class="process__card__body--text text-body">Meet your personal consultant and discuss your wish list.</p>
                   </div>
                  </div>
                </div>
             
                <div class="col-xl-4 col-md-6 mb-5 mb-xl-0">
                 <div class="process__card">
                  <div class="process__card__imgwrap">
                       <img class="process__card__imgwrap--image img-fluid" src="images/process/Process 02.png" alt="Process 02"/>
                       <span>02</span>
                    </div>
                      <div class="process__card__body">
                       <h5 class="process__card__body--title text-body">Interactive Reveal</h5>
                        <p class="process__card__body--text text-body">Refine and finalize your vision during a face-to-face creativity session with your designer</p>
                      </div>
                 </div>
                </div>
                <div class="col-xl-4 col-md-6">
                 <div class="process__card">
                    <div class="process__card__imgwrap">
                     <img class="process__card__imgwrap--image img-fluid" src="images/process/Process 03.png" alt="Process 03"/>
                      <span>03</span>
                      </div>
                     <div class="process__card__body">
                      <h5 class="process__card__body--title text-body">Complimentary Shopping </h5>
                    <p class="process__card__body--text text-body">Save yourself up to a month of time and thousands of $ by physically shopping for materials with your experienced consultant! </p>
                    </div>
             
                  </div> 
               </div>
              
            </div>
          </div>
    
  </section>

  {/* START THE TESTIMONIAL SECTION */}

  <section class="testimonial section" id="testimonial">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="images/testimonial/testimonial-featured.png" alt="testimonial featured"
            class="img-fluid testimonial__featured mb-4 mb-md-0"/>
        </div>
        <div class="col-md-6 my-auto">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="testimonial__card">
                  <div class="ratings">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="testimonial__card--text">
                    She did an amazing job right from the start - from helping us choose the new countertops, sink, faucets, custom backsplash, new shower and more to building design options to 
                    give us a preview of our choices.
                  </p>
                  <div class="testimonial__card--name">
                    <p>— Divi M.</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial__card">
                  <div class="ratings">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="testimonial__card--text">
                    Denise and her installers were professional, courteous and knowledgeable. The advice she gave me made my kitchen appear bigger! I am very happy with my experience.
                  </p>
                  <div class="testimonial__card--name">
                    <p>— Barbara F.</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial__card">
                  <div class="ratings">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="testimonial__card--text">
                    We had our kitchen remodeled. I cannot say enough good things about Denise, the meticulous contractors, and experience overall!
                  </p>
                  <div class="testimonial__card--name">
                    <p>— Robin B.</p>
                  </div>
                </div>
              </div>
            </div>
            <button class="testimonial__btn bi bi-arrow-left" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
            </button>
            <button class="testimonial__btn bi bi-arrow-right" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
            </button>
          </div>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-md-12 text-center">
        <Link class="text-decoration-none mx-auto" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" passHref> 
            <button class="btn-outline btn-sm btn--outline--dark" id="get-estimate" onClick="window.location.href='https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation'">
            Get estimate
   </button>
            </Link>
          
        </div>
      </div>
    </div>
  </section>

  {/*START THE MIDDLE CTA SECTION */}

  <section class="middle-cta section" id="middle-cta">
    <div class="container">
      <div class="row text-center">
        <div class="col-m-12">
          <div class="middle-cta__wrapper d-flex align-items-center justify-content-center mx-auto">
            <h1 class="display-3">Renovate your home as low as 0% APR</h1>
            <Link class="text-decoration-none mx-auto" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" passHref> 
            <button class="btn-flat btn-sm" id="get-estimate" onClick="window.location.href='https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation'">
            Explore financing
   </button>
            </Link>
          
            
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*START THE OPTIONS SECTION*/}

  <section class="options section" id="options">
    <div class="container">
      <div class="row mb-5 text-center">
        <div class="col-md-12">
          <h3 class="display-4">Our Options</h3>
        </div>
      </div>
      <div class="options-card-wrapper mx-auto">
        <div class="row g-5">
          <div class="col-md-6" id="bathroom">
            <div class="card options__card--1 m-xl-2">
              <img src="images/options/Options 01.png" class="card--image options__card--image" alt="Bathroom"/>
              <div class="card-body options__card__body">
                <h4 class="card-title options__card__body--title">Bathroom</h4>
                <p class="card-meta">4 WEEKS TO BUILD</p>
                <p class="card-text options__card__body">Build your dream bathroom with premium fixtures and finishes.
                </p>
                <Link class="text-decoration-none mx-auto" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" passHref> 
            <button class="btn-flat btn-sm" id="get-estimate" onClick="window.location.href='https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation'">
            Learn more
   </button>
            </Link>
                
              </div>
            </div>
          </div>
          <div class="col-md-6" id="kitchen">
            <div class="card options__card--2 m-xl-2">
              <img src="images/gallery/Miller_after_1.JPG" class="card--image options__card--image" alt="Kitchen"/>
              <div class="card-body options__card__body">
                <h4 class="card-title options__card__body--title">Kitchen</h4>
                <p class="card-meta">6 WEEKS TO BUILD</p>
                <p class="card-text options__card__body">Create your ideal kitchen with quality, lasting materials.</p>
                <Link class="text-decoration-none mx-auto" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" passHref> 
            <button class="btn-flat btn-small" id="get-estimate" onClick="window.location.href='https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation'">
            Learn more
   </button>
            </Link>
                
              </div>
            </div>
          </div>
      
          <div class="col-md-6" id="sunroom">
            <div class="card options__card--3 m-xl-2">
              <img src="images/options/Options 03.png" class="card--image options__card--image" alt="Sunroom"/>
              <div class="card-body options__card__body">
                <h4 class="card-title options__card__body--title">Sunroom</h4>
                <p class="card-meta">5 WEEKS TO BUILD</p>
                <p class="card-text options__card__body">Add value and comfort to your home with a beautiful sunroom.
                </p>
                <Link class="text-decoration-none mx-auto" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" passHref> 
            <button class="btn-flat btn-sm" id="get-estimate" onClick="window.location.href='https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation'">
            Learn more
   </button>
            </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6" id="basement">
            <div class="card options__card--4 m-xl-2">
              <img src="images/options/Options 04.png" class="card--image options__card--image" alt="Basement"/>
              <div class="card-body options__card__body">
                <h4 class="card-title options__card__body--title">Basement</h4>
                <p class="card-meta">7 WEEKS TO BUILD</p>
                <p class="card-text options__card__body">Create your backyard getaway with durable materials and
                  beautiful finishes.</p>
                  <Link class="text-decoration-none mx-auto" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" passHref> 
            <button class="btn-flat btn-sm" id="get-estimate" onClick="window.location.href='https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation'">
            Learn more
   </button>
            </Link>
              
              </div>
            </div>
          </div>
  
      
        </div>
      </div>
    </div>
  </section>


  

  {/* START THE BOTTOM CTA SECTION */}

  <section class="py-5 bottom-cta" id="bottom-cta">
    <div class="container py-5">
      <div class="row g-3 g-xl-5">
        <div class="col-md-12 col-lg-5 mb-5 mb-lg-0">
          <h3 class="display-4 text-white">Let’s work on your project together!</h3>
          <Link class="text-decoration-none mx-auto" href="https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation" passHref> 
            <button class="btn-flat btn-flat-white btn-sm" id="get-estimate" onClick="window.location.href='https://mailchi.mp/15df993ae86b/inspire-kitchen-remodeling-free-consultation'">
            Schedule a call
   </button>
            </Link>
          
        </div>
        <div class="col-md-12 col-lg-7 mt-auto">
          <p class="bottom-cta__email display-3 text-white text-lg-end mb-0 mb-lg-5">inquire@inspirehrd.com</p>
        </div>
      </div>
    </div>
  </section>

  {/* START THE FOOTER SECTION */}

  <footer class="section footer py-5" id="footer">
    <div class="container py-5">
      <div class="row g-3 g-xl-5">
        <div class="col-md-12 col-lg-3 d-flex align-items-start flex-column">
          <p class="lead mb-lg-auto order-2 order-lg-1">Modernize your home with a locally owned and operated business who works with all budgets and manage your project in its entirety with a highly personalized approach.</p>
          <Link class="text-decoration-none" href="#" passHref>
          <Image href="#" class="footer__logo order-1 order-lg-2 mb-5 mb-lg-0" src="https://quantumone.b-cdn.net/Ihr-svg.svg" width={128} height={76} alt="inspire-logo"/>
          </Link>
        </div>
        <div class="col-md-12 col-lg-9">
          <div class="row">
            <div class="col-md-12">
              <div class="row g-3 g-xl-5">
                <div class="col-md-12 col-lg-3 footer__col pb-1 pb-lg-0">
                  <hr class="footer__col--headline"/>
                  <p class="mt-4 mt-lg-0">Inspire's personal consultants will save you $1K's and up to 30 days of your time. Schedule a consult to learn more.</p>
                  <p class="footer__col--copyright mb-auto">© Inspire HR 2023</p>

                </div>
                <div class="col-md-12 col-lg-3 footer__col pb-1 pb-lg-0">
                  <hr class="footer__col--headline"/>
                  <ul class="footer__col--links mt-5 mt-lg-0">
                    <li><a href="#bathroom">Bathrooms</a></li>
                    <li><a href="#kitchen">Kitchens</a></li>
                    <li><a href="#backyard">Sunrooms</a></li>
                    <li><a href="#basement">Basements</a></li>
                    <li><a href="#process">How it works</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Guides</a></li>
                  </ul>
                </div>
                <div class="col-md-12 col-lg-3 footer__col pb-1 pb-lg-0">
                  <hr class="footer__col--headline"/>
                  <ul class="footer__col--links mt-5 mt-lg-0">
                    <li><a href="tel:+17173158589">7173158589</a></li>
                    <li><a href="mailto:inquire@inspirehrd.com">inquire@inspirehrd.com</a></li>
                  </ul>
                </div>
                <div class="col-md-12 col-lg-3 footer__col d-flex flex-column">
                  <hr class="footer__col--headline"/>
                  <ul class="footer__col--links tos mt-3 mt-lg-0 mb-lg-auto mb-5">
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                  {/* <p class="footer__col--credit">Developed by <a class="fw-semibold" href="https://blockchain-company.io"
                      target="_blank">The Blockchain Company.IO</a></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  {/* START THE BACK TO TOP BUTTON */}

  <a href="#" class="shadow back-to-top">
    <i class="fas fa-chevron-up"></i>
  </a>

  {/* START THE MODAL SECTION FOR LOGIN / SIGNUP */}

  <div class="mb-modal mb-hidden login-signup" id="login-signup-id">
    <button class="btn--close-modal" id="login-signup">&times;</button>
    <h2 class="mb-modal__header text-center">
      Login or Sign up to get started
    </h2>
    <div class="mb-modal__body">
      <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login-tab-pane"
            type="button" role="tab" aria-controls="login-tab-pane" aria-selected="true">Log in</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup-tab-pane" type="button"
            role="tab" aria-controls="signup-tab-pane" aria-selected="false">Sign up</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="login-tab-pane" role="tabpanel" aria-labelledby="login-tab"
          tabIndex="0">
          <form action="#">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating d-grid">
              <input class="btn-flat btn-sm mt-3" type="button" value="Log in"/>
            </div>
          </form>
        </div>
        <div class="tab-pane fade" id="signup-tab-pane" role="tabpanel" aria-labelledby="signup-tab" tabIndex="0">
          <form action="#">
            <div class="row g-2">
              <div class="col-md mb-2">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingInputFirstname" placeholder="Sammy" value={floatinginputfirstname || ''}  onChange={(e) => setFloatingInputFirstname(e.target.value)}/>
                  <label for="floatingInputFirstname">First name</label>
                </div>
              </div>
              <div class="col-md mb-2">
                <div class="form-floating">
                  <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com"
                    value={floatinginputemail || ''} onChange={(e) => setFloatingInputEmail(e.target.value)} />
                  <label for="floatingInputEmail">Email address</label>
                </div>
              </div>
              <div class="col-md-12 mb-2">
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword2" placeholder="Password" value={floatingpassword2 || ''} onChange={(e) => setFloatingPassword2(e.target.value)}/>
                  <label for="floatingPassword2">Password</label>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-floating d-grid">
                  <input class="btn-flat btn-sm" type="button" value="Sign up"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

 {/*START THE MODAL SECTION FOR GET YOUR ESTIMATE */}

  <div class="mb-modal mb-hidden get-estimate" id="get-estimate-id">
    <button class="btn--close-modal" id="get-estimate">&times;</button>
    <h2 class="mb-modal__header text-center">
      Schedule your FREE face to face consult today!
    </h2>
    <div class="mb-modal__body">
      <form action="#">
        <div class="row g-2">
          <div class="col-md mb-2">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInputFirstname3" placeholder="Sammy" value={floatinginputfirstname3 || ''}  onChange={(e) => setFloatingInputFirstname3(e.target.value)}/>
              <label for="floatingInputFirstname3">First name</label>
            </div>
          </div>
          <div class="col-md mb-2">
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInputEmail3" placeholder="name@example.com" value={floatinginputemail3 || ''}  onChange={(e) => setFloatingInputEmail3(e.target.value)}/>
              <label for="floatingInputEmail3">Email address</label>
            </div>
          </div>
          <div class="col-md-12 mb-2">
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword3" placeholder="Password" value={floatingpassword3 || ''}  onChange={(e) => setFloatingPassword3(e.target.value)}/>
              <label for="floatingPassword3">Password</label>
            </div>
          </div>
          <div class="col-md-12 mb-2">
            <div class="form-floating">
              <select class="form-select" id="floatingSelectOption" aria-label="Floating label select example">
                <option selected>Select option</option>
                <option value="1">Bathroom</option>
                <option value="2">Kitchen</option>
                <option value="3">Sunroom</option>
                <option value="4">Basement</option>
              </select>
              <label for="floatingSelectOption">Interested option</label>
            </div>
          </div>
          <div class="col-md-12 mb-2">
            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaMessage" value={floatingtextareamessage || ''}  onChange={(e) => setFloatingTextareaMessage(e.target.value)}></textarea>
              <label for="floatingTextareaMessage">Additional comments</label>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-floating d-grid">
              <input class="btn-flat btn-sm" type="button" value="Sign up"/>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="overlay mb-hidden"></div>
  </body>
  
    </>
  )
}
