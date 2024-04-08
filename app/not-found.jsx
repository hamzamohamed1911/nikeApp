import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-coral-red  text-lg mb-4">The page you're looking for does not exist.</p>
      <Link className="text-coral-red text-lg hover:underline" href="/">
        Go back to home
      </Link>
    </div>
  )
}