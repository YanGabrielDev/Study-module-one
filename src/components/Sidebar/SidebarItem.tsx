import { ReactNode } from "react"

interface SidebarItemProps {
    children: ReactNode
}
export const SidebarItem = ({ children }: SidebarItemProps) => {
    return <li className="px-5">{children}</li>
}