import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Code } from 'lucide-react';

function Navbar() {
    return (
        <>
            <header className="bg-white/80 backdrop-blur-md sticky top-0 border-b border-zinc-100 w-full transition-colors">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-zinc-900 hover:text-indigo-600 transition-colors cursor-pointer">
                        <Code className="size-8 stroke-2" />
                        <span className="font-bold text-xl tracking-tight hidden sm:block">DevPortal</span>
                    </div>
                    
                    {/* Action Button */}
                    <Button 
                        variant={"default"} 
                        size={"lg"} 
                        className="px-5 py-2.5 text-sm font-medium bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Login
                    </Button>
                </div>
            </header >
           
            <Separator className="h-px bg-zinc-100" />
        </>
    )
}

export default Navbar;