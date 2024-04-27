import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const GET = async (req, { params }) => {
  try {
    const { id } = params
    const data = await prisma.book.findUnique({
      where: {
        id: +id,
      },
    })
    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.log(err)

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params

    await prisma.book.delete({
      where: {
        id: +id,
      },
    })

    return NextResponse.json({ message: 'book deleted succesfull' })
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const PUT = async (req, { params }) => {
  try {
    const { id } = params
    const { title, author, publisher, year, pages } = await req.json()

    const book = await prisma.book.update({
      where: { id: +id },
      data: {
        title,
        author,
        publisher,
        year: +year,
        pages: +pages,
      },
    })

    return NextResponse.json({ message: 'Book edited succesfull', book })
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
