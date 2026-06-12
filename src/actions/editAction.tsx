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

export async function createsnippet(
    prevState: {
        message: string;
        success: boolean;
    },
    formData: FormData
) {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.trim().length < 4) {
        return {
            success: false,
            message: "Title must be at least 4 characters long.",
        };
    }

    if (typeof code !== "string" || code.trim().length < 8) {
        return {
            success: false,
            message: "Code must be at least 8 characters long.",
        };
    }

    await prisma.snippet.create({
        data: {
            title: title.trim(),
            code: code.trim(),
        },
    });

    return {
        success: true,
        message: "Snippet created successfully 🎉",
    };
    redirect("/")
}