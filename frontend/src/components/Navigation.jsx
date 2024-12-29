import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react"
import { SidebarTrigger } from "./ui/sidebar"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="w-full border-b shadow">
            <nav className="container flex items-center w-full gap-8 px-8 py-4 mx-auto max-w-8xl">
                <div className="space-x-4">
                    <SignedIn>
                        <SidebarTrigger />
                    </SignedIn>
                </div>
                <SignedIn>
                    <div className="flex gap-4 ml-auto">
                        <SignOutButton />
                    </div>
                </SignedIn>
                <SignedOut>
                    <div className="flex gap-4 ml-auto">
                        <Button variant="secondary" asChild>
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button asChild>
                            <Link to="/signup">Create an account</Link>
                        </Button>
                    </div>
                </SignedOut>
            </nav>
        </div>
    )
}

export default Navigation