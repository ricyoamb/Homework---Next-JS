import prisma from '@/lib/prisma'
import Books from '@/components/Books'

const getData = async () => {
  try {
    const data = await prisma.book.findMany()

    return data
  } catch (err) {
    console.log(err)
  }
}

export default async function Home() {
  const data = await getData()
  return (
    <div>
      <h1 className="z-10 text-3xl font-bold text-gray-100">
        Welcome to My Bookstore
      </h1>
      <Books books={data} />
    </div>
  )
}
