export interface Product {
    id: number
    sNo?: number
    name: string
    productName?: string
    price: number
    Price?: number
    originalPrice: number
    image: string
    category: string
    slug: string
}

export const products: Product[] = [
    {
        id: 1,
        name: 'watch',
        price: 199.99,
        originalPrice: 299.99,
        image: '/images/watch.jpeg',
        category: 'Electronics',
        slug: "golden-watch"
    },
    {
        id: 2,
        name: 'shoes',
        price: 89.99,
        originalPrice: 129.99,
        image: '/images/shoe.jpeg',
        category: 'Footwear',
        slug: "red-shoes"
    }
]
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
