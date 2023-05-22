import { Camera, ChevronLeft } from "lucide-react"
import Link from "next/link"


export default function NewMemory(){
    return(
        <div className="flex flex-1 flex-col gap-4">
            <Link href={"/"} className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
                <ChevronLeft className="w-4 h-4"/>
                voltar a timeLine
            </Link>

            <form className="flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-4">
                    <label htmlFor="midia" className="flex cursor-pointer items-center
                    gap-1.5 text-sm text-gray-200 hover:text-gray-100"><Camera className="w-6 h-6"/> Anexar mídia</label>
                    <input type="file" name="#" id="midia" className="invisible"/>

                    <label htmlFor="isPublic" className="flex items-center
                    gap-1.5 text-sm text-gray-200">
                        <input type="checkbox" name="isPublic" id="isPublic" value="true" className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"/>
                        tornar memória pública
                    </label>
                </div>

                <textarea name="content" spellCheck="false" className="w-full
                flex-1 resize-none rounded border-0 bg-transparent p-2 text-lg leading-relaxed text-gray-200
                placehoder:text-gray-400 focus:ring-0" placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."></textarea>

            </form>
        </div>
    )
}