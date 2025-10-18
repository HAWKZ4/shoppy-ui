import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/auth/login", "/auth/signup"];

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("Authentication")?.value;

  if (
    !auth &&
    !publicRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
