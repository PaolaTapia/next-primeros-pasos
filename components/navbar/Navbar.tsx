import { AccessibilityIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

export const Navbar = () => {
    const navItems = [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Pricing", href: "/pricing" },
    ]

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href="/" className="flex items-center text-white">
                <AccessibilityIcon size={16} className="mr-2" />
                <span className="text-white">Home</span>
            </Link>
            <div className="flex flex-1"> </div>
            {
                navItems.map(navItem =>
                    <ActiveLink key={navItem.href} {...navItem} />
                )
            }

        </nav>
    )
}
