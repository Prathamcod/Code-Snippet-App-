import { Button } from "@/src/components/ui/button";
import { prisma } from "@/src/lib/prisma";
import React from "react";
import Link from "next/link";
import { DeleteSnippetAction } from "@/src/actions/editAction";
import { Edit2, Trash2, ArrowLeft } from "lucide-react";

type Props = {
    params: Promise<{ id: string }>
}

async function page({ params }: Props) {
    const id = parseInt((await params).id)
    const snippets = await prisma.snippet.findUnique({
        where: {
            id
        }
    })

    if (!snippets) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] gap-3">
                <h1 className="text-xl font-medium text-zinc-200">Snippet not found</h1>
                <Link href="/">
                    <Button variant="link" className="text-zinc-400 hover:text-white">
                        <ArrowLeft className="size-4 mr-2" /> Back to dashboard
                    </Button>
                </Link>
            </div>
        )
    }

    const deleteSnippetCode = DeleteSnippetAction.bind(null, id)

    return (
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-6">

            <div className="flex items-center justify-between">

                <h1 className="text-white text-3xl font-bold tracking-tight">
                    {snippets?.title}
                </h1>

                <div className="flex items-center gap-3">

                    <Link href={`/snippet/${id}/edit`}>
                        <Button
                            variant={"default"}
                            size={"lg"}
                            className="px-4 py-2 text-sm font-medium bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-xl flex items-center gap-2 transition-all shadow-sm"
                        >
                            <Edit2 className="size-4" /> Edit
                        </Button>
                    </Link>


                    <form action={deleteSnippetCode}>
                        <Button
                            variant={"destructive"}
                            size={"lg"}
                            className="px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-500 text-white rounded-xl flex items-center gap-2 transition-all shadow-sm border border-red-700"
                        >
                            <Trash2 className="size-4" /> Delete
                        </Button>
                    </form>
                </div>
            </div>


            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">

                <div className="flex items-center justify-between bg-zinc-950 px-4 py-2 border-b border-zinc-800">
                    <span className="text-xs font-mono text-zinc-500 selection:bg-transparent">Source Code</span>
                </div>
                <pre className="p-6 overflow-x-auto font-mono text-sm leading-relaxed text-zinc-100 selection:bg-zinc-800">
                    <code>{snippets?.code}</code>
                </pre>
            </div>

        </section >
    )
}

export default page;