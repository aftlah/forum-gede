import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const url = request.nextUrl

    if (url.pathname === '/dashboard') {
        return NextResponse.redirect(new URL('/dashboard/profile', request.url))
    }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }