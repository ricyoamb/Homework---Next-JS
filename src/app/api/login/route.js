import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const secretKey = process.env.JWT_SECRET

export const POST = async (req, { params }) => {
  try {
    const { name, email, password } = await req.json()

    const foundUser = await prisma.user.findUnique({ where: { email } })

    if (!foundUser) throw { name: 'InvalidCredentials' }

    const comparePassword = bcrypt.compareSync(password, foundUser.password)

    if (comparePassword) {
      const accesToken = jwt.sign(
        {
          id: foundUser.id,
          email: foundUser.email,
        },
        secretKey
      )
      cookies().set({
        name: 'accesToken',
        value: 'accesToken',
        maxAge: '60 * 60 * 24 * 7',
      })

      return NextResponse.json(
        {
          message: 'Login succesfull',
          accesToken,
        },
        { status: 200 }
      )
    } else {
      throw { name: 'InvalidCredentials' }
    }
  } catch (err) {
    if (err.name === 'InvalidCredentials') {
      return NextResponse.json({ message: 'Wrong email or password' })
    }
    console.log(err)
    return NextResponse.json({ message: 'Internal server error' })
  }
}
