import React from 'react';
import { useSignIn } from "@clerk/clerk-react";
import { ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const LoginPage = () => {
    const { isLoaded, signIn, setActive } = useSignIn();

    if (!isLoaded) {
        return null;
    }

    const signInWithGoogle = async () => {
        try {
        const result = await signIn.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/"
        });
        if (result.status === "complete") {
            console.log(result);
            await setActive({ session: result.createdSessionId });
        }
        } catch (err) {
        console.error("Error:", err);
        }
    };

    return (
        <div className="flex items-center justify-center p-20 bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-xl">
            <div className="text-center">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="mt-2 text-gray-600">Please sign in to your account</p>
            </div>
            
            <div className="space-y-4">
            <Button 
                onClick={signInWithGoogle} 
                className="flex items-center justify-center w-full"
            >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-6 h-6 mr-2" />
                Sign in with Google
            </Button>
            </div>
            
            <div className="mt-4 text-center">
            <Button variant="ghost" asChild>
                <Link to="/" className="inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
                </Link>
            </Button>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;

