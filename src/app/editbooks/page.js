'use client'

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

const putBook = () => {
  const router = useRouter()
  const params = useParams()

  const { id } = params

  useEffect(() => {
    router.push(`/editbooks/${id}`)
  }, [id])

  return null
}

export default putBook
