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
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-blue-900">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-blue-500">
                        Sign in to your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-blue-700"
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
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-blue-700"
                            >
                                Password
                            </label>

                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:underline"
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
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-blue-600">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300"
                            />
                            Remember Me
                        </label>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="mx-4 text-sm text-blue-500">OR</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Google Button */}
                <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 transition hover:bg-gray-100">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="h-5 w-5"
                    />
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="font-semibold text-blue-600 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}