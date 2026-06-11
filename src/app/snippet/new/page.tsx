import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { prisma } from "@/src/lib/prisma";

import { redirect } from "next/navigation";
import React from "react";
import { Code2, Sparkles } from "lucide-react";

function CreateSnippet() {
    async function createsnippet(formData: FormData) {
        "use server"
        const title = formData.get("title") as string
        const code = formData.get("code") as string
        const snippet = await prisma.snippet.create({
            data: {
                title,
                code
            }
        })
        console.log("Create snippet", snippet)
        redirect("/")
    }

    return (
        <section className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
                <h1 className="text-white text-3xl font-bold tracking-tight flex items-center gap-2">
                    <Code2 className="size-7 text-zinc-400" /> Create a Snippet
                </h1>
                <p className="text-zinc-400 text-sm mt-1">Save a reusable code snippet to your portal hub.</p>
            </div>

            <form className="space-y-6" action={createsnippet}>

                <div className="flex flex-col space-y-2">

                    <Label htmlFor="title" className="text-zinc-200 text-sm font-medium">
                        Title
                    </Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="e.g., Quick Sort Algorithm"
                        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 rounded-xl focus-visible:ring-zinc-700 h-11 transition-all"
                    />
                </div>


                <div className="flex flex-col space-y-2">
                    <Label htmlFor="code" className="text-zinc-200 text-sm font-medium">
                        Code Snippet Content
                    </Label>

                    <Textarea
                        name="code"
                        id="code"
                        placeholder="paste or write your code logic blocks here..."
                        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 rounded-xl font-mono text-sm min-h-60 focus-visible:ring-zinc-700 p-4 leading-relaxed transition-all"
                    />
                </div>


                <div className="pt-2">

                    <Button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                        <Sparkles className="size-4 stroke-[2.5]" /> Add new Snippet
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default CreateSnippet;