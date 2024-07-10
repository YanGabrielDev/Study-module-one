'use client'
import { Separator } from "../ui/separator"
import { SidebarHeader } from "./SidebarHeader"
import { SidebarCollapsedButton } from "./SidebarCollapsedButton"
import { useState } from "react"
import { USER_KEY } from "@/constants/localStorageKeys.constants"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { SidebarItem } from "./SidebarItem"
import { MENU_MODULES } from "@/constants/modules.constants"
import Link from "next/link"
import { MODULE_ICONS } from "@/constants/moduleIcons.constants"

export const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const { getLocalStorageItem } = useLocalStorage(USER_KEY)
    const { modules } = getLocalStorageItem()
    const handleChangeOpenSidebar = () => setOpenSidebar(!openSidebar)
    console.log(modules);

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
                <ul>
                    {modules?.map((module: "Study Timer") => (
                        <SidebarItem>
                            <Link
                                className="no-underline text-white whitespace-nowrap flex gap-6"
                                href={MENU_MODULES[module] ?? ''}
                                target="_blank">{MODULE_ICONS[module]} {module}</Link>
                        </SidebarItem>
                    ))}
                </ul>
                <button><span className="text-white">Opa</span></button>
            </div>
        </>
    )
}