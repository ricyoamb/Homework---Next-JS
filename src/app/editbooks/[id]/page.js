'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { editBook } from '@/fetching/books'
import Swal from 'sweetalert2'

const putBook = () => {
  const router = useRouter()
  const params = useParams()
  const { id } = params

  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [publisher, setPublisher] = useState()
  const [year, setYear] = useState()
  const [pages, setPages] = useState()

  const handleEdit = async () => {
    try {
      await editBook(+id, {
        title,
        author,
        publisher,
        year,
        pages,
      })
      Swal.fire({
        icon: 'success',
        title: 'Book Updated!',
        text: 'Book updated successfully!',
      })
      router.push('/')
    } catch (error) {
      console.error('Error updating book:', error)
      Swal.fire({
        icon: 'error',
        title: 'Failed To Update Book!',
        text: 'Failed to update book.',
      })
    }
  }

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="bg-gray-400 flex flex-col px-10 py-20 space-y-4 rounded-lg">
        <h1 className="text-xl font-bold text-center mb-5">Edit book</h1>

        <input
          type="text"
          placeholder="Enter new title"
          className="px-2 py-3"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter new author"
          className="px-2 py-3"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter new publisher"
          className="px-2 py-3"
          onChange={(e) => setPublisher(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter new year"
          className="px-2 py-3"
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter new pages"
          className="px-2 py-3"
          onChange={(e) => setPages(e.target.value)}
        />

        <button
          type="button"
          onClick={() => {
            handleEdit()
          }}
          className="bg-blue-500 px-4 py-2 rounded-xl"
        >
          Edit Book
        </button>
      </div>
    </div>
  )
}

export default putBook
