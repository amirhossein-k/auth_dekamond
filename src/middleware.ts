import { NextRequest, NextResponse } from "next/server";



// export async function middleware(req:NextRequest) {
    
    // const sessionUser = await GetSession(req.cookies.toString())

//     // مسیرعمومی
//     const publicPath = ['/register','/']

//     if(!sessionUser && !publicPath.includes(req.nextUrl.pathname)){
//         return NextResponse.redirect(new URL('/register',req.url))
//     }
//     return NextResponse.next()
// }




export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicPath =
    path === "/" || path === "/register" || path === "/verifyemail";

  const home = path === "/";

  const tokken = req.cookies.get("session")?.value || "";

  if (isPublicPath && tokken && !home) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }
  if (!isPublicPath && !tokken && home) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (!isPublicPath && !tokken) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile", "/register", "/verifyemail",'/dashboard'],
};

