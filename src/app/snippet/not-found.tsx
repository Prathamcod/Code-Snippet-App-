import React from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Repeat } from 'lucide-react';
function Notfound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-5">
            <h1 className="text-9xl text-red-500 font-extrabold text-shadow-2xl text-shadow-black">404</h1>
            <p className="text-6xl font-semibold text-gray-400">Page Not Found</p>
            <Link href={"/"}>  <Button variant={"default"} size={"lg"} className="bg-blue-500 hover:bg-blue-400 text-gray-300 text-base font-semibold">Try again <Repeat /> </Button></Link>
        </div>
    )
}

export default Notfound
