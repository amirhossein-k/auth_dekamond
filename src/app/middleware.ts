import { NextRequest, NextResponse } from "next/server";
import { GetSession } from "./lib/auth";



export async function middleware(req:NextRequest) {
    
    const sessionUser = await GetSession(req.cookies.toString())

    // مسیرعمومی
    const publicPath = ['/register']

    if(!sessionUser && !publicPath.includes(req.nextUrl.pathname)){
        return NextResponse.redirect(new URL('/register',req.url))
    }
    return NextResponse.next()
}