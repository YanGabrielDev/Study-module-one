'use client'
import { Separator } from "@/components/ui/separator";
import { getTasks } from "@/services/tasks.service";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getTasks()
  }, [])
  return (
    <main className="grid grid-cols-12 h-full w-full">
      <div className="col-span-2 h-screen bg-darkGray p-4">
        <span className="text-white text-2xl">Task Manager</span>
        <Separator className="my-4" />
        <Link className="text-white" href="https://study-module-two.vercel.app/" target="_blank">Module 2</Link>
      </div>
    </main>
  );
}
