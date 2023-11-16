import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function onRequest(request: NextRequest) {
  const isLoginOrRegister =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";

  if (isLoginOrRegister) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export default { onRequest };
