"use client"
import { Camera } from "lucide-react";
import { FormEvent } from "react";
import { MediaPicker } from "./mediaPicker";

export function NewMemoryForm() {
    function HandleCreateMemory(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        console.log(Array.from(formData.entries()))
    }

    return (
        <form className="flex flex-1 flex-col gap-2" onSubmit={HandleCreateMemory}>
            <div className="flex items-center gap-4">
                <label htmlFor="midia" className="flex cursor-pointer items-center
                    gap-1.5 text-sm text-gray-200 hover:text-gray-100"><Camera className="w-6 h-6" /> Anexar mídia</label>
                <MediaPicker />

                <label htmlFor="isPublic" className="flex items-center
                    gap-1.5 text-sm text-gray-200">
                    <input type="checkbox" name="isPublic" id="isPublic" value="true" className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500" />
                    tornar memória pública
                </label>
            </div>

            <textarea name="content" spellCheck="false" className="w-full
                flex-1 resize-none rounded border-0 bg-transparent p-2 text-lg leading-relaxed text-gray-200
                placehoder:text-gray-400 focus:ring-0" placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."></textarea>

            <button type="submit" className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600">Salvar</button>
        </form>

    )
}