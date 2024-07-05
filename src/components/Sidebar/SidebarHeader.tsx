import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface SidebarHeaderProps {
    userName: string
}
export const SidebarHeader = ({ userName }: SidebarHeaderProps) => {
    return (
        <div className="flex gap-4 items-center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm text-white opacity-80 whitespace-nowrap">{userName}</span>
        </div>
    )
}