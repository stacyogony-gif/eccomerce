import React from 'react'
import { Product } from '@/products'
import Link from 'next/dist/client/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article key={product.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">                  

                  <Link href={`/product/${product.slug}`} className="block">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-44 w-full object-cover sm:h-52"
                    />
                  </Link>

                  <button className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white opacity-70 text-black shadow-md transition-transform group-hover:scale-105">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="h-6 w-6 text-blue-700"
                    />
                  </button>
                </div>

                <div className="mt-2 space-y-1">
                  <Link href={`/products/${product.slug}`} className="block">
                    <h3 className="text-sm font-medium leading-tight text-black">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-semibold text-blue-600">
                    Ksh. {product.price.toFixed(2)}
                  </p>
                </div>
              </article>
  )
}

export default ProductCard