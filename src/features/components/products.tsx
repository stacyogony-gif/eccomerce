"use client";

import { products } from "@/products";
import { useCart } from "@/features/context/CartContext";
import Link from "next/link";

export default function Products() {
    const { addToCart } = useCart();

    return (
        <div id="product" className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured products</h2>
                    <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        Browse all products
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
                
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative flex flex-col justify-between border border-gray-100 rounded-lg p-4 shadow-xs hover:shadow-md transition-shadow duration-200">
                            <div>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-gray-900">{product.price}</p>
                                        <p className="text-xs text-gray-400 line-through">{product.originalPrice}</p>
                                    </div>
                                </div>
                            </div>
                            <Link
                               href={`/product/${product.slug}`}
                                className="mt-4 w-full flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer transition-colors duration-200"
                            >
                                View More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}