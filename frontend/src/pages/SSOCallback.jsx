import { useSignIn } from "@clerk/clerk-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const SSOCallback = () => {
    const { signIn, isLoaded } = useSignIn()
    const navigate = useNavigate()

    useEffect(() => {
        const completeSignIn = async () => {
            if (!isLoaded) return   

            try {
                const result = await signIn.attemptFirstFactor({
                    strategy: "oauth_callback",
                })

                if (result.status === "complete") {
                    navigate("/home")
                } else {
                    console.log("Something went wrong")
                }
            }
            catch (error) {
                console.log(error)
            }

                
                
        }

        completeSignIn()
    }, [isLoaded, signIn, navigate])

    return (
        <div>Completing sign in...</div>
    )
}

export default SSOCallback