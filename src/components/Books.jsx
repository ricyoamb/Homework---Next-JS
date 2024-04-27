'use client'
import Link from 'next/link'
import { deleteBook } from '@/fetching/books'
import { editBook } from '@/fetching/books'
import { useRouter } from 'next/navigation'

const Books = ({ books }) => {
  const router = useRouter()

  const handleDelete = async (id) => {
    await deleteBook(id)
    router.refresh()
  }
  const handleEdit = async (id) => {
    await editBook()
    router.push('/editbooks')
  }
  return (
    <>
      <Link href={'/books'}>CREATE BOOKS</Link>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Year</th>
            <th>Pages</th>
            <th>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.year}</td>
                <td>{book.pages}</td>
                <td><a href={book.imageUrl}>{book.imageUrl}</a></td>
                <td>
                  <button type="button" onClick={(e) => handleEdit(book.id)}>
                    Edit
                  </button>{' '}
                  <button type="button" onClick={(e) => handleDelete(book.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Books
