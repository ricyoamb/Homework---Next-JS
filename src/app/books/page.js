'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBook, uploadImage } from '@/fetching/books'

export default function makeBook() {
  const [title, setTitle] = useState(' ')
  const [author, setAuthor] = useState(' ')
  const [publisher, setPublisher] = useState(' ')
  const [year, setYear] = useState(' ')
  const [pages, setPages] = useState(' ')
  const [imageUrl, setImageUrl] = useState('')
  const router = useRouter()

  const handleCreate = async () => {
    await createBook({ title, author, publisher, year, pages, imageUrl })
    router.push('/')
    router.refresh()
  }

  const handleImageUrl = async (e) => {
    const image = e.target.files[0]
    const formData = new FormData()

    formData.append('image', image)

    const response = await uploadImage(formData)

    if (response.image_url) {
      setImageUrl(response.image_url)
    }
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
      <input
        type="file"
        placeholder="Enter Image"
        onChange={(e) => handleImageUrl(e)}
      />
      <button type="button" onClick={handleCreate}>
        Submit
      </button>
    </div>
  )
}
