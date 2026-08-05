"use client"
import { useState, FormEvent } from "react";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log({
            email,
            password,
        });

        // Add authentication logic here
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-4 py-12">
            <div className="w-full max-w-md rounded-2xl bg-card border border-border p-8 shadow-md text-card-foreground">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-foreground">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Sign in to your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-semibold text-foreground"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="text-sm font-semibold text-foreground"
                            >
                                Password
                            </label>

                            <a
                                href="#"
                                className="text-sm text-primary hover:underline"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-muted-foreground">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-border accent-primary"
                            />
                            Remember Me
                        </label>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-md cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-border"></div>
                    <span className="mx-4 text-sm text-muted-foreground">OR</span>
                    <div className="flex-1 border-t border-border"></div>
                </div>

                {/* Google Button */}
                <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-card py-3 text-foreground transition-all hover:bg-muted cursor-pointer">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="h-5 w-5"
                    />
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <a href="#" className="font-semibold text-primary hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}