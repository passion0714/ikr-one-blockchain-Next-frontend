import Link from 'next/link' 

export async function getStaticProps(context) {
  
  return { props:{} }
}

export default function Custom404(props) {
  return <h1> 404 - Page not found</h1>

}
