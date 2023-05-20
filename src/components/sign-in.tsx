import { User } from "lucide-react"
export function SignIn(){
    return(
        <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} className="flex items-center gap-3 text-left">
        <div className="flex h-10 w-10 items-center justify-center bg-gray-400 rounded-full">
            < User className="h-5 w-5 text-gray-500"/>
        </div>
        <p className="text-sm leading-snug max-w-[140px] hover:text-gray-50 transition-colors"><span className="underline "> Crie sua conta</span> e salve suas memórias!</p>
        </a>
    )
}