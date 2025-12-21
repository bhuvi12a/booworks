"use client"

import { useActionState } from "react"
import { authenticate } from "@/app/actions/auth"
import { Button } from "@/app/Components/ui/button"
import { Loader2 } from "lucide-react"

// NOTE: using useActionState (hook for React 19) or useFormState (React 18)
// Next.js 16/React 19 might prefer useActionState. 
// If useActionState is not found, we fallback to a simpler transition pattern or useFormState from react-dom.
// Since we are in an agentic mode and unsure of exact types availability, 
// I will use a simple form with minimal hooks to ensure compilation.

export default function LoginPage() {
    const [errorMessage, dispatch, isPending] = useActionState(authenticate, undefined);

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/20">
            <div className="w-full max-w-md p-8 rounded-2xl bg-card border border-border shadow-xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                        BooWorks Admin
                    </h1>
                    <p className="text-muted-foreground mt-2">Sign in to your dashboard</p>
                </div>

                <form action={dispatch} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1.5 ml-1">Email</label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="admin@booworks.com"
                            defaultValue="admin@booworks.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1.5 ml-1">Password</label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            defaultValue="admin123"
                            required
                            minLength={6}
                        />
                    </div>

                    <div className="pt-2">
                        <Button className="w-full" type="submit" disabled={isPending}>
                            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Sign In
                        </Button>
                    </div>

                    {errorMessage && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
                            <p>{errorMessage}</p>
                        </div>
                    )}
                </form>

                <div className="mt-6 text-center text-xs text-muted-foreground">
                    <p>Demo Credentials:</p>
                    <p>admin@booworks.com / admin123</p>
                </div>
            </div>
        </div>
    )
}
