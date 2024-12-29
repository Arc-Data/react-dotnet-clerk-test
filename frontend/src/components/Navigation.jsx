import { SignedIn } from "@clerk/clerk-react"
import { SidebarTrigger } from "./ui/sidebar"

const Navigation = () => {
  return (
    <div className="w-full border-b shadow">
        <nav className="container flex w-full gap-8 px-8 py-4 mx-auto max-w-8xl">
            <SignedIn>
                <SidebarTrigger />
            </SignedIn>
            <div>Home</div>
        </nav>
    </div>
  )
}

export default Navigation