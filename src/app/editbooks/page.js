'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { editBook } from '@/fetching/books'

export default function putBook() {
  const { id } = params
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [publisher, setPublisher] = useState()
  const [year, setYear] = useState()
  const [pages, setPages] = useState()
  const params = useParams()
  const router = useRouter()

  const handleEdit = async () => {
    await editBook({ title, author, publisher, year, pages })
    router.push('/')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Publisher"
        onChange={(e) => setPublisher(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Year"
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Pages"
        onChange={(e) => setPages(e.target.value)}
      />
      <button type="button" onClick={handleEdit}>
        Submit
      </button>
    </div>
  )
}
