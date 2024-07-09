'use client'
import { Separator } from "../ui/separator"
import { SidebarHeader } from "./SidebarHeader"
import { SidebarCollapsedButton } from "./SidebarCollapsedButton"
import { useState } from "react"

export const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(false)

    const handleChangeOpenSidebar = () => setOpenSidebar(!openSidebar)

    return (
        <>
            <div className={`h-screen ${openSidebar ? 'w-60' : 'w-24'} transition-all bg-darkGray rounded-r-md relative`}>
                <div className="w-full flex items-center justify-between relative p-6 pb-0 flex-col">
                    <div className="flex w-full relative">
                        <SidebarHeader userName="Naruto" />
                        <SidebarCollapsedButton onClick={handleChangeOpenSidebar} />
                    </div>
                    <Separator className="my-4 bg-white opacity-20" />
                </div>
                <button><span className="text-white">Opa</span></button>
            </div>
        </>
    )
}