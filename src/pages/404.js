import Link from 'next/link' 

export async function getStaticProps(context) {
  
  return { props:{} }
}

export default function Custom404(props) {
  return 
      (
     <>
       <p>Oops! The page was not found</p>
           <Link class="text-decoration-none mx-auto" href="https://inspirehrd.com" passHref> 
            <button class="btn-flat btn-sm mt-4 mt-lg-0 order-1 order-lg-2 mx-auto" id="home" onClick="window.location.href='https://inspirehrd.com'">
            Go to Home Page
   </button>
            </Link>
    </>
    )
}
