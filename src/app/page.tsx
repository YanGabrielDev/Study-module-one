'use client'
import { Sidebar } from "@/components/Sidebar";
import { getTasks } from "@/services/tasks.service";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getTasks()
  }, [])
  return (
    <main className="grid grid-cols-12 h-full w-full">
      <div className="col-span-2">
        <Sidebar />
      </div>
    </main>
  );
}
