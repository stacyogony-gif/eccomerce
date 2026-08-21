import { ProductGallery } from '@/features/components/ProductGallery'
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
  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image]

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/product" className="hover:text-primary transition-colors">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="capitalize text-foreground font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          {/* Image Gallery */}
          <div className="relative w-full">
            <ProductGallery images={galleryImages} name={product.name} />
            {discount > 0 && (
              <span className="absolute left-3 top-3 z-30 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground shadow-md">
                -{discount}% OFF
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              {product.category}
            </span>

            <h1 className="mb-4 text-3xl sm:text-4xl font-bold capitalize text-foreground">
              {product.name}
            </h1>

            <div className="mb-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">
                {product.price}
              </span>
              {product.originalPrice !== product.price && (
                <span className="text-lg text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            <p className="mb-8 leading-relaxed text-muted-foreground">
              A closer look at the {product.name}. Crafted with premium materials designed for long-lasting comfort, durability, and modern style.
            </p>

            <div className="flex gap-4">
              <button className="flex-1 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-md cursor-pointer">
                Add to cart
              </button>
              <button className="rounded-xl border border-border bg-card px-6 py-3.5 font-semibold text-foreground transition-all hover:bg-muted cursor-pointer">
                ♡ Wishlist
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}