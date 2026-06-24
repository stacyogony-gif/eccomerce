import Link from "next/link";

export default function Navbar() {
    const links = [
        { name: "Product", href: "#product" },
        { name: "Features", href: "#features" },
        { name: "Marketplace", href: "#marketplace" },
        { name: "Company", href: "#company" },
    ];

    return (
        <nav className="bg-gray-900 text-white top-0 sticky z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold">
                    Logo
                </Link>

                <ul className="flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium hover:text-indigo-400 cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href="/login"
                    className="text-sm font-semibold hover:text-indigo-400"
                >
                    Log in →
                </Link>
            </div>
        </nav>
    );
}