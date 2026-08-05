import React from 'react'
import { Product } from '@/products'
import Link from 'next/dist/client/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article key={product.id} className="group flex flex-col justify-between rounded-2xl bg-card border border-border p-3 shadow-sm hover:shadow-md transition-all">
      <div className="relative overflow-hidden rounded-xl bg-muted">                  
        <Link href={`/product/${product.slug}`} className="block">
          <img
            src={product.image}
            alt={product.name}
            className="h-44 w-full object-cover sm:h-52 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <button className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 backdrop-blur-md text-primary border border-border shadow-md transition-transform group-hover:scale-110 cursor-pointer">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="h-5 w-5 text-primary"
          />
        </button>
      </div>

      <div className="mt-3 space-y-1">
        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="text-sm font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-bold text-primary">
          Ksh. {product.price.toFixed(2)}
        </p>
      </div>
    </article>
  )
}

export default ProductCard