"use client";

import React, { useActionState } from "react";
import { Code2, Sparkles } from "lucide-react";

import { createsnippet } from "@/src/actions/editAction";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";

const initialState = {
    message: "",
    success: false,
};

function CreateSnippet() {
    const [state, formAction, isPending] = useActionState(
        createsnippet,
        initialState
    );

    return (
        <section className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                    <Code2 className="size-7 text-zinc-400" />
                    Create a Snippet
                </h1>

                <p className="text-zinc-400 text-sm mt-1">
                    Save a reusable code snippet to your portal hub.
                </p>
            </div>

       
            <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="title">
                        Title
                    </Label>

                    <Input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="e.g. Quick Sort Algorithm"
                        className="h-11"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="code">
                        Code Snippet Content
                    </Label>

                    <Textarea
                        id="code"
                        name="code"
                        placeholder="Paste or write your code here..."
                        className="min-h-60 font-mono"
                    />
                </div>

                {state.message && (
                    <div
                        className={`rounded-lg border px-4 py-3 text-sm font-medium ${state.success
                                ? "border-green-500/20 bg-green-500/10 text-green-500"
                                : "border-red-500/20 bg-red-500/10 text-red-500"
                            }`}
                    >
                        {state.message}
                    </div>
                )}

                <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto"
                >
                    <Sparkles className="size-4" />

                    {isPending
                        ? "Creating Snippet..."
                        : "Add New Snippet"}
                </Button>
            </form>
        </section>
    );
}

export default CreateSnippet;