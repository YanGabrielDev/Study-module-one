import { ChevronLeft } from "lucide-react"
import { ComponentProps } from "react"
interface SidebarCollapsedButtonProps extends ComponentProps<"button"> {

}
export const SidebarCollapsedButton = ({ ...props }: SidebarCollapsedButtonProps) => {
    return (
        <button className="outline-none border-none bg-darkGray rounded-lg p-2 absolute top-0 bottom-0 left-full"
            {...props}
        >
            <ChevronLeft color="#fff" size="20px" />
        </button>
    )
}