import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, getProductBySlug } from '@/products'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

// Pre-render a page for every product at build time
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

// Dynamic <title> per product
export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Product not found' }
  return {
    title: `${product.name} — Shop`,
    description: `${product.name} in ${product.category} for ${product.price}`,
  }
}

function getDiscountPercent(price: number | string, originalPrice: number | string) {
  const current = typeof price === 'number' ? price : parseFloat(String(price).replace('$', ''))
  const original = typeof originalPrice === 'number' ? originalPrice : parseFloat(String(originalPrice).replace('$', ''))
  if (!original || original <= current) return 0
  return Math.round(((original - current) / original) * 100)
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const discount = getDiscountPercent(product.price, product.originalPrice)

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 bg-white">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-400">{product.category}</span>
        <span className="mx-2">/</span>
        <span className="capitalize text-neutral-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
          {discount > 0 && (
            <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
              -{discount}%
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
            {product.category}
          </span>

          <h1 className="mb-4 text-3xl font-bold capitalize text-neutral-900">
            {product.name}
          </h1>

          <div className="mb-6 flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-neutral-900">
              {product.price}
            </span>
            {product.originalPrice !== product.price && (
              <span className="text-lg text-neutral-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>

          <p className="mb-8 leading-relaxed text-neutral-600">
            A closer look at the {product.name}. Add real product copy here —
            materials, fit, sizing, or whatever detail helps someone decide
            to buy.
          </p>

          <div className="flex gap-4">
            <button className="flex-1 rounded-xl bg-neutral-900 px-6 py-3 font-medium text-white transition hover:bg-neutral-700">
              Add to cart
            </button>
            <button className="rounded-xl border border-neutral-300 px-6 py-3 font-medium text-neutral-900 transition hover:bg-neutral-50">
              ♡ Wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}