"use server"

import { redirect } from "next/navigation"
import { prisma } from "../lib/prisma"

export const SaveCodeSnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code
        }
    })
    redirect(`/snippet/${id}`)
}
export const DeleteSnippetAction = async (id: number) => {
    await prisma.snippet.delete({
        where: {
            id
        },
    })
    redirect("/")
}