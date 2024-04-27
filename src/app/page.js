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
      
      <Books books={data} />
    </div>
  )
}
