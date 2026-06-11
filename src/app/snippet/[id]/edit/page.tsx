import EditorSnippetMonaco from "@/src/components/editorSnippet";
import { prisma } from "@/src/lib/prisma";
import React from "react";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ id: string }>
}

async function EditSnippetCode({ params }: Props) {
    const id = parseInt((await params).id)
    const snippets = await prisma.snippet.findUnique({
        where: { id },
    })

    if (!snippets) return notFound()

    return <EditorSnippetMonaco snippetData={snippets} />

}

export default EditSnippetCode
