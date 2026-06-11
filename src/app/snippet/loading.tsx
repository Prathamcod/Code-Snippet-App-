import React from "react";
import { Code } from "lucide-react";
import { Spinner } from "../../components/ui/spinner";
function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <h1>Code Snippet <Code className="size-20" /></h1>
            <Spinner className="size-10" />
        </div>
    )
}

export default Loading
