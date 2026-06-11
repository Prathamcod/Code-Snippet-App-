import React from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import { prisma } from "@/src/lib/prisma";
import { Plus, ArrowRight } from "lucide-react"; 

async function HomePage() {
  const snippets = await prisma.snippet.findMany()
  
  if (!snippets || snippets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-3 text-center">
        <h1 className="text-2xl font-semibold text-zinc-100">No snippets found</h1>
        <p className="text-zinc-400 text-sm">Get started by creating your very first code snippet.</p>
        <Link href={"/snippet/new"} className="mt-2">
          <Button size="sm" className="bg-white text-zinc-900 hover:bg-zinc-200">Create Snippet</Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
     
        <div className="py-5 flex items-center justify-between">
        
          <h1 className="text-white text-3xl font-bold tracking-tight">
            Snippets
          </h1>
          <Link href={"/snippet/new"}>
     
            <Button variant={"default"} size={"lg"} className="px-5 py-2.5 text-base font-medium bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-xl gap-2 transition-all shadow-sm">
              <Plus className="size-4" /> New
            </Button>
          </Link>
        </div>
    
        <Separator className="h-px bg-zinc-800" />

        
        <div className="mt-8 flex flex-col gap-4">
          {
            snippets.map((items) => {
              return (
                <div 
                  key={items.id} 
                 
                  className="flex items-center justify-between p-5 bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm rounded-xl transition-all duration-200 group hover:shadow-md"
                >
                 
                  <h1 className="font-medium text-zinc-900 text-lg">
                    {items.title}
                  </h1>
                  <Link href={`/snippet/${items.id}`}>
                   
                    <Button 
                      variant={"outline"} 
                      size={"sm"} 
                      className="gap-1.5 font-medium border-zinc-300 text-zinc-700 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 rounded-lg transition-all"
                    >
                      View <ArrowRight className="size-3.5 text-zinc-500 transition-colors" />
                    </Button>
                  </Link>
                </div>
              )
            })
          }
        </div>

      </section >
    </>
  )
}

export default HomePage