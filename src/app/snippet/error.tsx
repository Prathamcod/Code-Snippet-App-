"use client"
import React from "react";
import { RefreshCw, TriangleAlert } from 'lucide-react';
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
function Error() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">
                    <TriangleAlert />  Something went wrong
                </h1>

                <p className="text-muted-foreground">
                    An unexpected error occurred while processing your request.
                    Please try again.
                </p>
            </div>

            <Link href={"/"}>
                <Button
                    className="cursor-pointer"
                >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
            </Link>
        </div>
    )
}

export default Error;
