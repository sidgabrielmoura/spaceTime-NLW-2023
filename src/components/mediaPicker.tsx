"use client"

import { ChangeEvent, useState } from "react"

export function MediaPicker() {
    const [preview, setPreview] = useState<string | null>(null)

    function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target

        if (!files) {
            return
        }

        const previewUrl = URL.createObjectURL(files[0])

        setPreview(previewUrl)
    }


    return (
        <>
            <input onChange={onFileSelected} name="coverUrl" type="file" id="midia" accept="image/*" className="invisible" />
            {preview && (<img src={preview} alt="" className="w-[400px] aspect-video rounded-lg object-cover" />)}
        </>

    )


}