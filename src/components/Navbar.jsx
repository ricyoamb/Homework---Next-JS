'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className="bg-blue-300 w-full h-20 flex justify-between items-center px-8">
      <div className="text-white text-2xl font-bold hover:text-gray-500">
        <Link href="/">My Bookstore</Link>
      </div>

      <div className="flex gap-8">
        <Link href="/books">
          <button className="px-4 py-2 bg-blue-500 text-white hover:text-gray-500">
            Create
          </button>
        </Link>
        <button
          className="px-4 py-2 bg-blue-500 text-white hover:text-gray-500"
          onClick={() => router.push('/login')}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Navbar
