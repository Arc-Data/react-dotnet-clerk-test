import { Button } from "./components/ui/button"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ClerkProvider } from "@clerk/clerk-react"
import HomeLayout from "./layouts/HomeLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SSOCallback from "./pages/SSOCallback"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<div className="p-4 text-xl text-center text-blue-700">Hello World</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<div className="p-4 text-xl text-center text-blue-700">Hello World</div>} />
            <Route path="/home" element={<Home />} />
            <Route path="/sso-callback" element={<SSOCallback />}/>
          </Route>
        </Routes>
      </ClerkProvider>
    </BrowserRouter>
  )
}

export default App
