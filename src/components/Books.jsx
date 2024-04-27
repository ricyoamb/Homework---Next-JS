'use client'
import Image from 'next/image'
import { deleteBook, editBook } from '@/fetching/books'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Books = ({ books }) => {
  const router = useRouter()

  const handleDelete = async (id) => {
    await deleteBook(id)
    router.refresh()
  }
  const handleEdit = async (id) => {
    await editBook(id)
    router.push(`/editbooks/${id}`)
  }
  return (
    <>
      <Link href={'/books'}>CREATE BOOKS</Link>
      {books.map((book, index) => (
        <div
          className="bg-gray-300 rounded-xl w-full px-10 py-20 flex flex-col gap-y-3 "
          key={index}
        >
          <Image
            src={book.imageUrl}
            alt="Book Cover Image"
            width={300}
            height={300}
            className="object-cover "
          />
          <p className="text-xl font-bold">
            Book Title :{' '}
            <span className="font-normal text-md">{book.title}</span>
          </p>
          <p className="text-xl font-bold">
            Author : <span className="font-normal text-md">{book.author}</span>
          </p>
          <p className="text-xl font-bold">
            Publisher :{' '}
            <span className="font-normal text-md">{book.publisher}</span>
          </p>
          <p className="text-xl font-bold">
            Year : <span className="font-normal text-md">{book.year}</span>
          </p>
          <p className="text-xl font-bold">
            Pages : <span className="font-normal text-md">{book.pages}</span>
          </p>

          <div className="flex justify-between items-center text-center text-white mt-10">
            <button
              onClick={() => handleEdit(book.id)}
              className="bg-red-500 w-fit px-4 py-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(book.id)}
              className="bg-blue-500 w-fit px-4 py-2"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Books
