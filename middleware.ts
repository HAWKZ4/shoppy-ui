import { NextRequest, NextResponse } from "next/server";
import { unauthenticatedRoutes } from "./app/common/constants/routes";
import { AUTHENTICATION_COOKIE } from "./app/auth/auth-cookie";

export function middleware(request: NextRequest) {
  // Get cookie directly from the request
  const authCookie = request.cookies.get(AUTHENTICATION_COOKIE)?.value;

  const isAuthenticated = !!authCookie;
  if (
    !isAuthenticated &&
    !unauthenticatedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route.path)
    )
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
