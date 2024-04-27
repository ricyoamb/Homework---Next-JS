'use client'
import { deleteBook, editBook } from '@/fetching/books'
import { useRouter } from 'next/navigation'

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              {book.title} ({book.year})
            </h2>
            <p className="text-gray-600">{book.author}</p>
          </div>
          <img
            src={`http://localhost:3000/${book.image}`}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-600">Publisher: {book.publisher}</p>
            <p className="text-gray-600"> {book.pages} Pages</p>
          </div>
          <div className="flex justify-center items-center p-4 bg-gray-200">
            <button
              onClick={() => handleEdit(book.id)}
              className="bg-red-500 px-4 py-2 rounded-lg text-white mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(book.id)}
              className="bg-blue-500 px-4 py-2 rounded-lg text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Books
