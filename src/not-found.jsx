import Link from 'next/link'

export default function NotFound() {
  return (
    <main class="text-center">
    <h2 class="text-center">There was a problem</h2>
   <p>Go back to the <Link href="/">Homepage</Link></p>
    </main>
    )
}
