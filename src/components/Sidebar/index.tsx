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
    const userModules = Object.values(modules as string).filter(module => module !== "Study Manager")

    return (
        <>
            <div className={`h-screen ${openSidebar ? 'w-60' : 'w-20'} transition-all bg-darkGray rounded-r-md relative`}>
                <div className="w-full flex items-center justify-between relative p-4 pb-0 pt-5 flex-col">
                    <div className="flex w-full relative">
                        <SidebarHeader userName="Naruto" />
                        <SidebarCollapsedButton onClick={handleChangeOpenSidebar} />
                    </div>
                    <Separator className="my-4 bg-white opacity-20" />
                </div>
                <ul>
                    {userModules?.map((module) => (
                        <SidebarItem>
                            <Link
                                className="no-underline text-white whitespace-nowrap flex gap-5 items-center"
                                href={MENU_MODULES[module] ?? ''}
                                target="_blank"><div>{MODULE_ICONS[module]}</div> {module}</Link>
                        </SidebarItem>
                    ))}
                </ul>
                <button><span className="text-white">Opa</span></button>
            </div>
        </>
    )
}