"use client"
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Snippet } from "../lib/generated/prisma/client";

import { Button } from "./ui/button";
import { SaveCodeSnippet } from "../actions/editAction";
import { Separator } from "./ui/separator";
import { Save } from "lucide-react"; // Added elegant icon

function EditorSnippetMonaco({ snippetData }: { snippetData: Snippet }) {
    const [code, setCode] = useState(snippetData.code)

    const changeEdit = (value: string = "") => {
        setCode(value)
    }
    const saveSnippet = SaveCodeSnippet.bind(null, snippetData.id, code)

    return (
        <section className="max-w-7xl mx-auto space-y-6 py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-6">


                <form action={saveSnippet} className="flex items-center justify-between">

                    <h1 className="text-white text-2xl font-bold tracking-tight">
                        Your Code Editor
                    </h1>


                    <Button
                        type="submit"
                        className="px-5 py-2 text-sm font-medium bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-xl flex items-center gap-2 transition-all shadow-sm"
                    >
                        <Save className="size-4 stroke-[2.5]" /> Save
                    </Button>
                </form>


                <Separator className="h-px bg-zinc-800" />


                <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#1e1e1e] shadow-2xl p-2">
                    <Editor
                        height="65vh"
                        theme="vs-dark"
                        defaultLanguage="javascript"
                        defaultValue={code}
                        onChange={changeEdit}
                        loading={<div className="h-full w-full flex items-center justify-center text-zinc-400 text-sm">Loading editor...</div>}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            lineNumbers: "on",
                            roundedSelection: true,
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                            padding: { top: 16, bottom: 16 }
                        }}
                    />
                </div>

            </div>
        </section>
    )
}

export default EditorSnippetMonaco;