import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("access_token")?.value;

    const isAuthAdminPage = request.nextUrl.pathname === "/auth/login-admin"

    const isProtectedAdminRoute = request.nextUrl.pathname.startsWith("/admin");

    // user not logged in but accessing protected route
    if (!token && isProtectedAdminRoute) {
        return NextResponse.redirect(new URL("/auth/login-admin", request.url));
    }

    // user logged in but accessing login page
    if (token && isAuthAdminPage) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    return NextResponse.next();
}