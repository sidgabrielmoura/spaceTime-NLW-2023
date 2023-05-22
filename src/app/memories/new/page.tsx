import { NewMemoryForm } from "@/components/newMemoryForm"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"


export default function NewMemory(){
    return(
        <div className="flex flex-1 flex-col gap-4">
            <Link href={"/"} className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
                <ChevronLeft className="w-4 h-4"/>
                voltar a timeLine
            </Link>

            <NewMemoryForm/>
        </div>
    )
}