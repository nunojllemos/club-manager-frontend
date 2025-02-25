import { NextRequest, NextResponse } from 'next/server'

// Define protected routes
const protectedRoutes = ['/dashboard', '/admin']

export function middleware(req: NextRequest) {
    const token = req.cookies.get('auth-token')?.value // Example: Using cookies for auth

    // Check if user is trying to access a protected route
    if (protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url)) // Redirect to login if not authenticated
        }
    }

    return NextResponse.next() // Allow request to continue
}

// Define routes where middleware should apply
export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*'], // Apply to all pages under /dashboard & /admin
}
