import { api } from "@/lib/api";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { NextRequest, NextResponse } from "next/server";
import { Axios } from "axios";

export async function GET(request: NextRequest){
    const { searchParams } = new URL(request.url)
    const code = searchParams.get("code")

    const redirectTo = request.cookies.get("redirectTo")?.value

    const registerResponse = await api.post("/register", {
        code,
    })

    const { token } = registerResponse.data

    const redirectUrl = redirectTo ?? new URL('/', request.url)

    const cookiesSpiresInSeconds = 60 * 60 * 24 * 30
    
    return NextResponse.redirect(redirectUrl, {
        headers: {
            "Set-Cookie": `token=${token}; Path=/; max-age=${cookiesSpiresInSeconds}`
        },
    })

} 
