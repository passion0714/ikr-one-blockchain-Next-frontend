import Link from 'next/link' 

export async function getStaticProps(context) {
  
  return { props:{} }
}


export default function Custom404(props) {
  return <h1>Oops! The page was not found</h1>
         <a href="/">Go to homepage</a>
}
