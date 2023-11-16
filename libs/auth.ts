import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ROUTES } from "@app/constants";

function onRequest(request: NextRequest) {
  const isLoginOrRegister =
    request.nextUrl.pathname === ROUTES.login ||
    request.nextUrl.pathname === ROUTES.register;

  if (isLoginOrRegister) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(ROUTES.login, request.nextUrl));
}

export default { onRequest };
