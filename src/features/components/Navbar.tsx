"use client";

import Link from "next/link";
import { useCart } from "@/features/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
    const { cartCount } = useCart();
    const links = [
        { name: "Home", href: "/" },
        { name: "Product", href: "/product" }, // Updated to lead to /product instead of relative product
        { name: "Company   ", href: "/company" },
        { name: "WhyUs", href: "/WhyUs" },
    


    ];

    return (
        <nav className="bg-gray-900 text-white top-0 sticky z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold hover:text-indigo-400 transition-colors">
                    Maisy Store
                </Link>

                <ul className="flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium hover:text-indigo-400 cursor-pointer transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-6">
                    <Link
                        href="/cart"
                        className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
                        aria-label="Shopping Cart"
                    >
                        <ShoppingCartIcon className="size-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white ring-2 ring-gray-900">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <Link
                        href="/login"
                        className="text-sm font-semibold hover:text-indigo-400 transition-colors"
                    >
                        Log in &rarr;
                    </Link>
                </div>
            </div>
        </nav>
    );
}