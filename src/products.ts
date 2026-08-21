export interface Product {
    id: number
    sNo?: number
    name: string
    productName?: string
    price: number
    Price?: number
    originalPrice: number
    image: string
    images?: string[]
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
        images: [
        '/images/watch.jpeg',
        '/images/watch.jpg',
        '/images/watch-2.jpeg',
        ],
        category: 'Electronics',
        slug: "golden-watch"
    },
    {
        id: 2,
        name: 'shoes',
        price: 89.99,
        originalPrice: 129.99,
        image: '/images/shoe.jpeg',
        images: [
        '/images/shoe.jpeg',
        '/images/shoes.jpg',
        '/images/sandals.jpg',
        '/images/shoe-2.jpg',
        ],
        category: 'Footwear',
        slug: "red-shoes"
    },
    {
        id: 3,
        name: 'dress',
        price: 500.99,
        originalPrice: 999.99,
        image: '/images/dress.jpg',
        images: [
        '/images/dress.jpg',
        ],
        category: 'dresses',
        slug: "Maroon-dress"
    },
    {
        id: 4,
        name: 'bag',
        price: 600.99,
        originalPrice: 1099.99,
        image: '/images/bag.jpg',
        images: [
        '/images/bag.jpg',
        ],
        category: 'bag',
        slug: "pink bag"
    },
    {
        id: 5,
        name: 'Dove beauty',
        price: 1010.99,
        originalPrice: 1099.99,
        image: '/images/Dove beauty.jpg',
        images: [
        '/images/Dove beauty.jpg',
        ],
        category: 'Dove',
        slug: "dove-beauty"
    },
    {
        id: 6,
        name: 'Hair Growth products',
        price: 700.99,
        originalPrice: 1050.99,
        image: '/images/Hair Growth Products.jpg',
        images: [
        '/images/Hair Growth Products.jpg',
        ],
        category: 'hair product',
        slug: "hair-products"
    }
]
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
