import AppSidebar from "@/components/AppSidebar"
import Navigation from "@/components/Navigation"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <Navigation />
                <div className="p-4">
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>
    )
}

export default HomeLayout