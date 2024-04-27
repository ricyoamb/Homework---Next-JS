import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const GET = async (req, { params }) => {
  try {
    const data = await prisma.book.findMany()
    return NextResponse.json(
      {
        data,
      },
      { status: 200 }
    )
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const POST = async (req, { params }) => {
  try {
    const { title, author, publisher, year, pages } = await req.json()
    await prisma.book.create({
      data: {
        title,
        author,
        publisher,
        year: parseInt(year),
        pages: parseInt(pages),
        image: null,
      },
    })
    return NextResponse.json({ message: 'Book created succesfully' })
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
