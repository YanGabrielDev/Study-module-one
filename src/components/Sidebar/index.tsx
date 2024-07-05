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
            <div className={`h-screen  w-full ${openSidebar ? 'w-60' : 'w-24'} transition-all p-6 bg-darkGray rounded-xl relative`}>
                <div className="w-full flex items-center justify-between relative">
                    <SidebarHeader userName="Naruto" />
                    <SidebarCollapsedButton onClick={handleChangeOpenSidebar} />
                </div>
                <Separator className="my-4 bg-white opacity-20" />
            </div>
        </>
    )
}