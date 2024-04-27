import { NextResponse } from 'next/server'

export function middleware(request) {
  const loginPath = ['/login', '/api/login']

  if (loginPath.some((v) => v === request.nextUrl.pathname)) {
    return NextResponse.next()
  } else {
    const accesToken = request.cookies.get('accesToken')

    if (accesToken) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}

export const config = {
  matcher: ['/login', '/api/:function', '/'],
}
