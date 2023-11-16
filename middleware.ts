import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { auth as authLib } from "@app/libs";
import { LOCAL_STORAGE_KEYS } from "@app/constants";

export function middleware(request: NextRequest) {
  const auth = request.cookies.get(LOCAL_STORAGE_KEYS.AUTH);
  const isLoginOrRegister =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";

  if (request.nextUrl.pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  if (!auth) {
    return authLib.onRequest(request);
  }

  const authObject = JSON.parse(auth.value) as any;
  const isAuthenticated = authObject?.state?.isAuthenticated ?? false;

  if (isAuthenticated) {
    if (isLoginOrRegister) {
      return NextResponse.redirect(new URL("/boards", request.nextUrl));
    } else {
      return NextResponse.next();
    }
  } else {
    return authLib.onRequest(request);
  }
}
